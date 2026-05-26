import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import mascot from '../../assets/logo.jpg';

function AlphabetGame() {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(null);
  const [letters, setLetters] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState('Easy');
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
    }
  });
  const [showInstructions, setShowInstructions] = useState(false);

  const alphabetRanges = {
    Easy: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
    Medium: ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    Hard: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
           'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  };

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('alphabetGameStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Get difficulty from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const level = params.get('level') || '1';
    setDifficulty(level === '1' ? 'Easy' : level === '2' ? 'Medium' : 'Hard');
  }, [location]);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      updateStats();
    }
  }, [timeLeft, gameOver]);

  const updateStats = () => {
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
    localStorage.setItem('alphabetGameStats', JSON.stringify(newStats));
  };

  const generateNewLetter = () => {
    const availableLetters = alphabetRanges[difficulty];
    const newLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
    setCurrentLetter(newLetter);

    // Generate 8 random letters for the grid
    const gridLetters = new Set([newLetter]);
    while (gridLetters.size < 9) {
      gridLetters.add(availableLetters[Math.floor(Math.random() * availableLetters.length)]);
    }
    setLetters(Array.from(gridLetters).sort(() => Math.random() - 0.5));
  };

  const handleLetterClick = (clickedLetter) => {
    if (clickedLetter === currentLetter) {
      // Calculate points based on difficulty and streak
      let points = 10;
      if (difficulty === 'Medium') points = 15;
      if (difficulty === 'Hard') points = 20;
      points += Math.floor(streak / 3) * 5; // Bonus points for streaks

      setScore(score + points);
      setStreak(streak + 1);
      setFeedback({
        text: `Correct! +${points} points 🎉`,
        type: 'success'
      });
      setTimeout(() => {
        setFeedback('');
        generateNewLetter();
      }, 1000);
    } else {
      setStreak(0);
      setFeedback({
        text: 'Try again! 💪',
        type: 'error'
      });
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setCurrentLetter(null);
    setLetters([]);
    setFeedback('');
    setStreak(0);
  };

  const startGame = () => {
    resetGame();
    setShowInstructions(false);
  };

  const getAccuracy = () => {
    if (stats.gamesPlayed === 0) return 0;
    return Math.round((stats.totalScore / stats.gamesPlayed) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100 p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 relative">
          <img src={mascot} alt="Kukhuri Ka Mascot" className="w-24 h-24 rounded-full border-4 border-pink-200 absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg" />
          <div className="flex justify-between items-center mb-8 mt-12">
            <div>
              <h1 className="text-4xl font-extrabold text-pink-600 flex items-center gap-2">🔤 Alphabet Explorer</h1>
              <p className="text-lg text-yellow-700 font-semibold">Level {difficulty}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-pink-600">Score: {score}</p>
              <p className="text-lg text-yellow-700">⏰ {timeLeft}s</p>
              <p className="text-lg text-green-600">🔥 Streak: {streak}</p>
              <p className="text-lg text-blue-600">🏆 High Score: {stats.difficultyHighScores[difficulty]}</p>
            </div>
          </div>
          {showInstructions ? (
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-pink-700">How to Play</h2>
              <div className="bg-yellow-50 p-6 rounded-2xl text-left space-y-4 border-2 border-pink-100">
                <p className="text-gray-700">1. Find the letter shown at the top in the grid below</p>
                <p className="text-gray-700">2. Click the matching letter as quickly as you can</p>
                <p className="text-gray-700">3. Get bonus points for streaks <span className='text-green-500'>🔥</span></p>
                <div className="mt-4">
                  <p className="font-semibold text-pink-700">Difficulty Levels:</p>
                  <p className="text-gray-700">Easy: A-M</p>
                  <p className="text-gray-700">Medium: N-Z</p>
                  <p className="text-gray-700">Hard: All A-Z</p>
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
                  {currentLetter}
                </div>
                {feedback && (
                  <p className={`text-2xl font-bold ${feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'} animate-pulse`}>
                    {feedback}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {letters.map((letter, index) => (
                  <button
                    key={index}
                    onClick={() => handleLetterClick(letter)}
                    className="bg-pink-100 hover:bg-yellow-200 text-3xl font-extrabold text-pink-700 p-8 rounded-2xl shadow-md transition-all duration-200 transform hover:scale-110 border-2 border-yellow-300"
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <div className="text-center text-gray-600">
                <p>Find the letter shown above in the grid below!</p>
                <p className="mt-2">Difficulty: {difficulty}</p>
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

export default AlphabetGame; 