import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WordMatch() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [currentPair, setCurrentPair] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const wordPairs = [
    { word: 'Apple', meaning: 'A red fruit' },
    { word: 'Book', meaning: 'Something you read' },
    { word: 'Cat', meaning: 'A furry pet' },
    { word: 'Dog', meaning: 'Man\'s best friend' },
    { word: 'Elephant', meaning: 'A large animal with a trunk' }
  ];

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleWordClick = (word) => {
    if (selectedWord) {
      const pair = wordPairs.find(p => p.word === word || p.meaning === word);
      if (pair && (pair.word === selectedWord || pair.meaning === selectedWord)) {
        setMatchedPairs([...matchedPairs, pair]);
        setScore(score + 10);
      }
      setSelectedWord(null);
    } else {
      setSelectedWord(word);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setMatchedPairs([]);
    setSelectedWord(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Word Match Game 🎮</h1>
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-800">Score: {score}</p>
              <p className="text-lg text-gray-600">Time: {timeLeft}s</p>
            </div>
          </div>

          {gameOver ? (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Game Over! 🎯</h2>
              <p className="text-2xl text-gray-600 mb-8">Your final score: {score}</p>
              <button
                onClick={resetGame}
                className="bg-[#A2D2FF] text-white px-8 py-3 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                Play Again
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Words</h3>
                <div className="space-y-4">
                  {wordPairs.map((pair) => (
                    !matchedPairs.includes(pair) && (
                      <button
                        key={pair.word}
                        onClick={() => handleWordClick(pair.word)}
                        className={`w-full p-4 rounded-2xl text-left transition duration-300 ${
                          selectedWord === pair.word
                            ? 'bg-[#A2D2FF] text-white'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {pair.word}
                      </button>
                    )
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Meanings</h3>
                <div className="space-y-4">
                  {wordPairs.map((pair) => (
                    !matchedPairs.includes(pair) && (
                      <button
                        key={pair.meaning}
                        onClick={() => handleWordClick(pair.meaning)}
                        className={`w-full p-4 rounded-2xl text-left transition duration-300 ${
                          selectedWord === pair.meaning
                            ? 'bg-[#A2D2FF] text-white'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        {pair.meaning}
                      </button>
                    )
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate(-1)}
              className="text-[#A2D2FF] font-semibold hover:underline"
            >
              ← Back to Chapters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordMatch; 