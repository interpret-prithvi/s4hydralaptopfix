import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NepaliVocab() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  const vocabulary = [
    {
      nepali: 'नमस्ते',
      english: 'Hello',
      pronunciation: 'Namaste',
      hint: 'A common greeting'
    },
    {
      nepali: 'धन्यवाद',
      english: 'Thank you',
      pronunciation: 'Dhanyabaad',
      hint: 'Express gratitude'
    },
    {
      nepali: 'खुशी',
      english: 'Happiness',
      pronunciation: 'Khushi',
      hint: 'A positive emotion'
    },
    {
      nepali: 'पानी',
      english: 'Water',
      pronunciation: 'Paani',
      hint: 'Essential for life'
    },
    {
      nepali: 'सूर्य',
      english: 'Sun',
      pronunciation: 'Surya',
      hint: 'Gives us light'
    }
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

  useEffect(() => {
    setCurrentWord(vocabulary[Math.floor(Math.random() * vocabulary.length)]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.toLowerCase() === currentWord.english.toLowerCase()) {
      setScore(score + 10);
      setFeedback({
        text: 'Correct! 🎉',
        type: 'success'
      });
      setTimeout(() => {
        setFeedback('');
        setCurrentWord(vocabulary[Math.floor(Math.random() * vocabulary.length)]);
        setUserInput('');
        setShowHint(false);
      }, 1500);
    } else {
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
    setCurrentWord(vocabulary[Math.floor(Math.random() * vocabulary.length)]);
    setUserInput('');
    setFeedback('');
    setShowHint(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Nepali Vocabulary 🇳🇵</h1>
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
            <div className="space-y-8">
              {currentWord && (
                <div className="bg-gray-50 p-8 rounded-3xl text-center">
                  <h2 className="text-5xl font-bold text-gray-800 mb-4">
                    {currentWord.nepali}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Pronunciation: {currentWord.pronunciation}
                  </p>
                  
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-[#A2D2FF] focus:ring-2 focus:ring-[#A2D2FF] focus:ring-opacity-50 transition duration-300 text-center text-xl"
                      placeholder="Type the English meaning"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="mt-4 bg-[#A2D2FF] text-white px-8 py-3 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 w-full"
                    >
                      Check Answer
                    </button>
                  </form>

                  {!showHint ? (
                    <button
                      onClick={() => setShowHint(true)}
                      className="mt-4 text-[#A2D2FF] font-semibold hover:underline"
                    >
                      Need a hint? 💡
                    </button>
                  ) : (
                    <p className="mt-4 text-gray-600">
                      Hint: {currentWord.hint}
                    </p>
                  )}
                </div>
              )}

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

export default NepaliVocab; 