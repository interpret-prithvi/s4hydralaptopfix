import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function MathGame() {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);
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
    },
    operationsMastered: {
      addition: 0,
      subtraction: 0,
      multiplication: 0,
      division: 0
    },
    problemsSolved: 0,
    correctAnswers: 0
  });
  const [showInstructions, setShowInstructions] = useState(false);

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('mathGameStats');
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
    localStorage.setItem('mathGameStats', JSON.stringify(newStats));
  };

  const generateProblem = () => {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    switch (difficulty) {
      case 'Easy':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case 'Medium':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        break;
      case 'Hard':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        break;
    }

    // Ensure division problems have whole number answers
    if (operation === '/') {
      answer = Math.floor(Math.random() * 10) + 1;
      num1 = num2 * answer;
    } else {
      switch (operation) {
        case '+':
          answer = num1 + num2;
          break;
        case '-':
          // Ensure positive answer for subtraction
          if (num2 > num1) {
            [num1, num2] = [num2, num1];
          }
          answer = num1 - num2;
          break;
        case '*':
          answer = num1 * num2;
          break;
      }
    }

    setCurrentProblem({ num1, num2, operation, answer });
    setUserAnswer('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswerNum = parseFloat(userAnswer);

    if (userAnswerNum === currentProblem.answer) {
      // Calculate points based on difficulty and streak
      let points = 10;
      if (difficulty === 'Medium') points = 15;
      if (difficulty === 'Hard') points = 20;
      points += Math.floor(streak / 3) * 5; // Bonus points for streaks

      // Update operation mastery
      const operationKey = {
        '+': 'addition',
        '-': 'subtraction',
        '*': 'multiplication',
        '/': 'division'
      }[currentProblem.operation];

      const newStats = {
        ...stats,
        operationsMastered: {
          ...stats.operationsMastered,
          [operationKey]: stats.operationsMastered[operationKey] + 1
        },
        problemsSolved: stats.problemsSolved + 1,
        correctAnswers: stats.correctAnswers + 1
      };
      setStats(newStats);
      localStorage.setItem('mathGameStats', JSON.stringify(newStats));

      setScore(score + points);
      setStreak(streak + 1);
      setFeedback({
        text: `Correct! +${points} points 🎉`,
        type: 'success'
      });
      setTimeout(() => {
        setFeedback('');
        generateProblem();
      }, 1000);
    } else {
      setStreak(0);
      setFeedback({
        text: 'Try again! 💪',
        type: 'error'
      });
      // Update stats for incorrect answer
      const newStats = {
        ...stats,
        problemsSolved: stats.problemsSolved + 1
      };
      setStats(newStats);
      localStorage.setItem('mathGameStats', JSON.stringify(newStats));
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setCurrentProblem(null);
    setUserAnswer('');
    setFeedback('');
    setStreak(0);
  };

  const getAccuracy = () => {
    if (stats.problemsSolved === 0) return 0;
    return Math.round((stats.correctAnswers / stats.problemsSolved) * 100);
  };

  const getMasteredOperations = () => {
    return Object.entries(stats.operationsMastered)
      .filter(([_, count]) => count >= 10)
      .map(([op]) => op.charAt(0).toUpperCase() + op.slice(1));
  };

  const startGame = () => {
    resetGame();
    generateProblem();
    setShowInstructions(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100 p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-yellow-200 relative">
          <div className="flex justify-between items-center mb-8 mt-12">
            <div>
              <h1 className="text-4xl font-extrabold text-pink-600 flex items-center gap-2">➕ Math Adventure</h1>
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
                <p className="text-gray-700">1. Solve the math problem shown at the top</p>
                <p className="text-gray-700">2. Enter your answer and press submit</p>
                <p className="text-gray-700">3. Get bonus points for streaks <span className='text-green-500'>🔥</span></p>
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
                <div className="text-5xl font-extrabold text-yellow-500 mb-4 animate-bounce">
                  {currentProblem.question}
                </div>
                {feedback && (
                  <p className={`text-2xl font-bold ${feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'} animate-pulse`}>
                    {feedback}
                  </p>
                )}
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-8">
                <input
                  type="number"
                  value={userAnswer}
                  onChange={e => setUserAnswer(e.target.value)}
                  className="w-32 p-4 rounded-xl border-2 border-yellow-300 text-2xl text-center font-bold focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Your answer"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-pink-400 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-pink-500 transition-colors text-lg"
                >
                  Submit
                </button>
              </form>
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

export default MathGame; 