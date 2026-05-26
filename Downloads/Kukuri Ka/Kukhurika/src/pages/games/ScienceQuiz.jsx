import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScienceQuiz() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [streak, setStreak] = useState(0);

  const questions = [
    {
      question: 'What is the process by which plants make their food?',
      options: ['Photosynthesis', 'Respiration', 'Digestion', 'Fermentation'],
      correct: 0,
      explanation: 'Plants use sunlight to convert water and carbon dioxide into glucose and oxygen! 🌱'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correct: 1,
      explanation: 'Mars appears red due to iron oxide (rust) on its surface! 🔴'
    },
    {
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correct: 2,
      explanation: 'Diamonds are formed under extreme pressure and heat! 💎'
    },
    {
      question: 'Which animal can change its color to match its surroundings?',
      options: ['Chameleon', 'Frog', 'Snake', 'Lizard'],
      correct: 0,
      explanation: 'Chameleons can change their color for camouflage and communication! 🦎'
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

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === questions[currentQuestion].correct;
    setShowFeedback(true);
    
    if (isCorrect) {
      setScore(score + 10 + (streak * 2));
      setStreak(streak + 1);
      setFeedback({
        text: `Correct! ${questions[currentQuestion].explanation}`,
        type: 'success'
      });
    } else {
      setStreak(0);
      setFeedback({
        text: `Oops! The correct answer was: ${questions[currentQuestion].options[questions[currentQuestion].correct]}`,
        type: 'error'
      });
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setCurrentQuestion(0);
    setStreak(0);
    setShowFeedback(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Science Quiz 🔬</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-800">Score: {score}</p>
              <p className="text-lg text-gray-600">Time: {timeLeft}s</p>
              {streak > 1 && (
                <p className="text-[#A2D2FF] font-semibold">🔥 {streak}x Streak!</p>
              )}
            </div>
          </div>

          {gameOver ? (
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete! 🎯</h2>
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
              <div className="bg-gray-50 p-6 rounded-3xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showFeedback}
                      className={`p-4 rounded-2xl text-left transition duration-300 ${
                        showFeedback
                          ? index === questions[currentQuestion].correct
                            ? 'bg-green-100 border-2 border-green-500'
                            : 'bg-gray-100'
                          : 'bg-white hover:bg-gray-100 border-2 border-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {showFeedback && (
                <div className={`p-4 rounded-3xl ${
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

export default ScienceQuiz; 