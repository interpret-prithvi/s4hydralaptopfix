import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mascot from '../../assets/logo.jpg';

function NumberRoll() {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [numbers, setNumbers] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState('Easy');
  const [level, setLevel] = useState(1);
  const [showInstructions, setShowInstructions] = useState(true);
  const [combo, setCombo] = useState(0);
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    totalScore: 0,
    bestStreak: 0,
    averageScore: 0,
    lastPlayed: null,
    difficultyHighScores: {
      Easy: 0,
      Medium: 0,
      Hard: 0
    },
    numbersMastered: {},
    experience: 0,
    currentLevel: 1,
    levelProgress: {},
    levelThreshold: 1000,
    totalCorrect: 0,
    totalAttempts: 0,
    bestCombo: 0
  });

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('numberRollStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Set difficulty from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const difficultyParam = params.get('difficulty');
    if (['Easy', 'Medium', 'Hard'].includes(difficultyParam)) {
      setDifficulty(difficultyParam);
    } else {
      setDifficulty('Easy');
    }
  }, [location]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !gameOver) {
      handleGameOver();
    }
  }, [timeLeft, gameOver]);

  // Generate new number and grid
  useEffect(() => {
    if (!gameOver && !showInstructions) {
      generateNewNumber();
    }
  }, [gameOver, showInstructions]);

  const generateNewNumber = () => {
    let maxNumber;
    switch (difficulty) {
      case 'Easy':
        maxNumber = 10;
        break;
      case 'Medium':
        maxNumber = 50;
        break;
      case 'Hard':
        maxNumber = 100;
        break;
      default:
        maxNumber = 10;
    }

    const newNumber = Math.floor(Math.random() * maxNumber) + 1;
    setCurrentNumber(newNumber);

    // Generate grid of numbers
    const gridNumbers = new Set();
    gridNumbers.add(newNumber);
    while (gridNumbers.size < 9) {
      const randomNum = Math.floor(Math.random() * maxNumber) + 1;
      gridNumbers.add(randomNum);
    }
    setNumbers(Array.from(gridNumbers).sort(() => Math.random() - 0.5));
  };

  const handleNumberClick = (clickedNumber) => {
    if (gameOver || showInstructions) return;

    const isCorrect = clickedNumber === currentNumber;
    let points = 0;

    if (isCorrect) {
      // Base points based on difficulty
      switch (difficulty) {
        case 'Easy':
          points = 10;
          break;
        case 'Medium':
          points = 20;
          break;
        case 'Hard':
          points = 30;
          break;
      }

      // Add streak bonus
      const newStreak = streak + 1;
      setStreak(newStreak);
      points += Math.floor(newStreak / 3) * 5; // Bonus points every 3 correct answers

      // Add combo bonus
      const newCombo = combo + 1;
      setCombo(newCombo);
      points += Math.floor(newCombo / 5) * 10; // Extra bonus every 5 correct answers in a row

      setFeedback(`Correct! +${points} points 🎉`);
      setScore(prev => prev + points);

      // Update number mastery
      setStats(prev => ({
        ...prev,
        numbersMastered: {
          ...prev.numbersMastered,
          [currentNumber]: (prev.numbersMastered[currentNumber] || 0) + 1
        },
        totalCorrect: prev.totalCorrect + 1,
        totalAttempts: prev.totalAttempts + 1,
        bestCombo: Math.max(prev.bestCombo, newCombo)
      }));

      // Generate new number after a short delay
      setTimeout(() => {
        generateNewNumber();
        setFeedback('');
      }, 500);
    } else {
      setStreak(0);
      setCombo(0);
      setFeedback('Try again! 💪');
      setStats(prev => ({
        ...prev,
        totalAttempts: prev.totalAttempts + 1
      }));
      setTimeout(() => setFeedback(''), 1000);
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
    const accuracy = stats.totalAttempts > 0 
      ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) 
      : 0;

    const newStats = {
      ...stats,
      gamesPlayed: stats.gamesPlayed + 1,
      totalScore: stats.totalScore + score,
      bestStreak: Math.max(stats.bestStreak, streak),
      averageScore: Math.round((stats.totalScore + score) / (stats.gamesPlayed + 1)),
      lastPlayed: new Date().toISOString(),
      difficultyHighScores: {
        ...stats.difficultyHighScores,
        [difficulty]: Math.max(stats.difficultyHighScores[difficulty], score)
      }
    };
    setStats(newStats);
    localStorage.setItem('numberRollStats', JSON.stringify(newStats));
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setStreak(0);
    setCombo(0);
    setFeedback('');
    setShowInstructions(false);
    generateNewNumber();
  };

  const startGame = () => {
    setShowInstructions(false);
    generateNewNumber();
  };

  const getAccuracy = () => {
    if (stats.totalAttempts === 0) return 0;
    return Math.round((stats.totalCorrect / stats.totalAttempts) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100 p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 relative">
          <img src={mascot} alt="Kukhuri Ka Mascot" className="w-24 h-24 rounded-full border-4 border-pink-200 absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg" />
          <div className="flex justify-between items-center mb-8 mt-12">
            <div>
              <h1 className="text-4xl font-extrabold text-pink-600 flex items-center gap-2">🎲 Number Roll</h1>
              <p className="text-lg text-yellow-700 font-semibold">Level {level} - {difficulty}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-pink-600">Score: {score}</p>
              <p className="text-lg text-yellow-700">⏰ {timeLeft}s</p>
              <p className="text-lg text-green-600">🔥 Streak: {streak}</p>
              <p className="text-lg text-blue-600">⚡ Combo: {combo}</p>
              <p className="text-lg text-yellow-600">🏆 High Score: {stats.difficultyHighScores[difficulty]}</p>
            </div>
          </div>
          {showInstructions ? (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-pink-700">How to Play</h2>
              <div className="bg-yellow-50 p-6 rounded-2xl text-left space-y-4 border-2 border-pink-100">
                <p className="text-gray-700">1. Find the number shown at the top in the grid below</p>
                <p className="text-gray-700">2. Click the matching number as quickly as you can</p>
                <p className="text-gray-700">3. Get bonus points for maintaining a streak <span className='text-green-500'>🔥</span></p>
                <p className="text-gray-700">4. Build up your combo for extra points <span className='text-blue-500'>⚡</span></p>
                <div className="mt-4">
                  <p className="font-semibold text-pink-700">Difficulty Levels:</p>
                  <p className="text-gray-700">Easy: Numbers 1-10</p>
                  <p className="text-gray-700">Medium: Numbers 1-50</p>
                  <p className="text-gray-700">Hard: Numbers 1-100</p>
                </div>
              </div>
              <button
                onClick={startGame}
                className="bg-pink-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-500 transition-colors text-lg"
              >
                🚀 Start Game
              </button>
              <button
                onClick={() => navigate(-1)}
                className="mt-4 text-pink-400 font-semibold hover:underline block mx-auto"
              >
                ← Back to Chapter
              </button>
            </div>
          ) : !gameOver ? (
            <>
              <div className="text-center mb-8">
                <div className="text-7xl font-extrabold text-yellow-500 mb-4 animate-bounce">
                  {currentNumber}
                </div>
                {feedback && (
                  <p className={`text-2xl font-bold ${feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'} animate-pulse`}>
                    {feedback}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {numbers.map((number, index) => (
                  <button
                    key={index}
                    onClick={() => handleNumberClick(number)}
                    className="bg-pink-100 hover:bg-yellow-200 text-3xl font-extrabold text-pink-700 p-8 rounded-2xl shadow-md transition-all duration-200 transform hover:scale-110 border-2 border-yellow-300"
                  >
                    {number}
                  </button>
                ))}
              </div>
              <div className="text-center text-gray-600">
                <p>Find the number shown above in the grid below!</p>
                <p className="mt-2">Difficulty: {difficulty} | Level: {level}</p>
              </div>
              <button
                onClick={() => setShowInstructions(true)}
                className="mt-6 text-pink-400 font-semibold hover:underline"
              >
                ← How to Play / Back
              </button>
            </>
          ) : (
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-extrabold text-pink-700">Game Over!</h2>
              <div className="bg-yellow-50 p-6 rounded-2xl border-2 border-pink-100">
                <p className="text-2xl text-pink-700 mb-4">Final Score: {score}</p>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-600">Best Streak: <span className='text-green-600 font-bold'>{stats.bestStreak}</span></p>
                    <p className="text-gray-600">Best Combo: <span className='text-blue-600 font-bold'>{stats.bestCombo}</span></p>
                    <p className="text-gray-600">Accuracy: <span className='text-yellow-600 font-bold'>{getAccuracy()}%</span></p>
                  </div>
                  <div>
                    <p className="text-gray-600">Games Played: {stats.gamesPlayed}</p>
                    <p className="text-gray-600">Total Score: {stats.totalScore}</p>
                    <p className="text-gray-600">Average Score: {stats.averageScore}</p>
                  </div>
                </div>
              </div>
              <div className="space-x-4">
                <button
                  onClick={resetGame}
                  className="bg-pink-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-500 transition-colors"
                >
                  🔄 Play Again
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="text-pink-400 font-semibold hover:underline"
                >
                  ← Back to Chapter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NumberRoll; 