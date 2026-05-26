import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function NepaliAlphabet() {
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
    },
    lettersMastered: {}
  });

  const nepaliAlphabet = [
    { letter: 'क', pronunciation: 'ka' },
    { letter: 'ख', pronunciation: 'kha' },
    { letter: 'ग', pronunciation: 'ga' },
    { letter: 'घ', pronunciation: 'gha' },
    { letter: 'ङ', pronunciation: 'nga' },
    { letter: 'च', pronunciation: 'cha' },
    { letter: 'छ', pronunciation: 'chha' },
    { letter: 'ज', pronunciation: 'ja' },
    { letter: 'झ', pronunciation: 'jha' },
    { letter: 'ञ', pronunciation: 'nya' },
    { letter: 'ट', pronunciation: 'ta' },
    { letter: 'ठ', pronunciation: 'tha' },
    { letter: 'ड', pronunciation: 'da' },
    { letter: 'ढ', pronunciation: 'dha' },
    { letter: 'ण', pronunciation: 'na' },
    { letter: 'त', pronunciation: 'ta' },
    { letter: 'थ', pronunciation: 'tha' },
    { letter: 'द', pronunciation: 'da' },
    { letter: 'ध', pronunciation: 'dha' },
    { letter: 'न', pronunciation: 'na' },
    { letter: 'प', pronunciation: 'pa' },
    { letter: 'फ', pronunciation: 'pha' },
    { letter: 'ब', pronunciation: 'ba' },
    { letter: 'भ', pronunciation: 'bha' },
    { letter: 'म', pronunciation: 'ma' },
    { letter: 'य', pronunciation: 'ya' },
    { letter: 'र', pronunciation: 'ra' },
    { letter: 'ल', pronunciation: 'la' },
    { letter: 'व', pronunciation: 'wa' },
    { letter: 'श', pronunciation: 'sha' },
    { letter: 'ष', pronunciation: 'sha' },
    { letter: 'स', pronunciation: 'sa' },
    { letter: 'ह', pronunciation: 'ha' },
    { letter: 'क्ष', pronunciation: 'ksha' },
    { letter: 'त्र', pronunciation: 'tra' },
    { letter: 'ज्ञ', pronunciation: 'gya' }
  ];

  const alphabetRanges = {
    Easy: nepaliAlphabet.slice(0, 12),
    Medium: nepaliAlphabet.slice(12, 24),
    Hard: nepaliAlphabet
  };

  // Load stats from localStorage
  useEffect(() => {
    const savedStats = localStorage.getItem('nepaliAlphabetGameStats');
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
    localStorage.setItem('nepaliAlphabetGameStats', JSON.stringify(newStats));
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
    if (clickedLetter.letter === currentLetter.letter) {
      // Calculate points based on difficulty and streak
      let points = 10;
      if (difficulty === 'Medium') points = 15;
      if (difficulty === 'Hard') points = 20;
      points += Math.floor(streak / 3) * 5; // Bonus points for streaks

      // Update letter mastery
      const updatedLettersMastered = {
        ...stats.lettersMastered,
        [currentLetter.letter]: (stats.lettersMastered[currentLetter.letter] || 0) + 1
      };

      setStats(prev => ({
        ...prev,
        lettersMastered: updatedLettersMastered
      }));

      setScore(score + points);
      setStreak(streak + 1);
      setFeedback({
        text: `Correct! +${points} points 🎉 (${currentLetter.pronunciation})`,
        type: 'success'
      });
      setTimeout(() => {
        setFeedback('');
        generateNewLetter();
      }, 1500);
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

  const getMasteredLetters = () => {
    return Object.entries(stats.lettersMastered)
      .filter(([_, count]) => count >= 5)
      .map(([letter]) => letter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Nepali Alphabet Explorer</h1>
              <p className="text-lg text-gray-600">Level: {difficulty}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-800">Score: {score}</p>
              <p className="text-lg text-gray-600">Time: {timeLeft}s</p>
              <p className="text-lg text-gray-600">Streak: {streak} 🔥</p>
              <p className="text-lg text-gray-600">High Score: {stats.difficultyHighScores[difficulty]} 🏆</p>
            </div>
          </div>

          {gameOver ? (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Game Over! 🎯</h2>
              <p className="text-2xl text-gray-600 mb-8">Your final score: {score}</p>
              
              <div className="bg-blue-50 p-6 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h3>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-gray-600">Games Played: {stats.gamesPlayed}</p>
                    <p className="text-gray-600">Total Score: {stats.totalScore}</p>
                    <p className="text-gray-600">Best Streak: {stats.bestStreak}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Average Score: {stats.averageScore}</p>
                    <p className="text-gray-600">Last Played: {new Date(stats.lastPlayed).toLocaleDateString()}</p>
                    <p className="text-gray-600">High Score ({difficulty}): {stats.difficultyHighScores[difficulty]}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Mastered Letters</h4>
                  <div className="flex flex-wrap gap-2">
                    {getMasteredLetters().map(letter => (
                      <span key={letter} className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {letter}
                      </span>
                    ))}
                    {getMasteredLetters().length === 0 && (
                      <p className="text-gray-500">Keep practicing to master letters!</p>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={resetGame}
                className="bg-[#A2D2FF] text-white px-8 py-3 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                Play Again
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                {currentLetter ? (
                  <div className="bg-gray-50 p-8 rounded-3xl">
                    <h2 className="text-8xl font-bold text-gray-800 mb-8">
                      {currentLetter.letter}
                    </h2>
                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                      {letters.map((letter) => (
                        <button
                          key={letter.letter}
                          onClick={() => handleLetterClick(letter)}
                          className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-4xl font-bold text-gray-800 hover:bg-gray-50"
                        >
                          {letter.letter}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={generateNewLetter}
                    className="bg-[#A2D2FF] text-white px-8 py-4 rounded-3xl text-xl font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Start Game 🎮
                  </button>
                )}
              </div>

              {feedback && (
                <div className={`p-4 rounded-3xl text-center ${
                  feedback.type === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <p className={`text-lg font-semibold ${
                    feedback.type === 'success' ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {feedback.text}
                  </p>
                </div>
              )}

              <div className="bg-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How to Play</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Find the Nepali letter shown at the top in the grid below</li>
                  <li>Click the matching letter as quickly as you can</li>
                  <li>Learn the pronunciation after each correct answer</li>
                  <li>Get bonus points for maintaining a streak</li>
                  <li>Easy: First 12 letters</li>
                  <li>Medium: Next 12 letters</li>
                  <li>Hard: All Nepali letters</li>
                </ul>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate(-1)}
              className="text-[#A2D2FF] font-semibold hover:underline"
            >
              ← Back to Chapter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NepaliAlphabet; 