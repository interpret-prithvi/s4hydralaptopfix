import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function SubjectDetail() {
  const { subjectName } = useParams();
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapters = [
    {
      id: 1,
      name: 'Chapter 1: Getting Started',
      description: 'Learn the basics and fundamentals',
      games: [
        { id: 1, name: 'Word Match', difficulty: 'Easy', points: 100 },
        { id: 2, name: 'Spelling Bee', difficulty: 'Medium', points: 200 },
        { id: 3, name: 'Grammar Quest', difficulty: 'Hard', points: 300 }
      ]
    },
    {
      id: 2,
      name: 'Chapter 2: Advanced Concepts',
      description: 'Dive deeper into the subject',
      games: [
        { id: 4, name: 'Challenge Mode', difficulty: 'Hard', points: 400 },
        { id: 5, name: 'Time Attack', difficulty: 'Medium', points: 250 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Subject Header */}
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {subjectName.charAt(0).toUpperCase() + subjectName.slice(1)} Learning Journey 🚀
          </h1>
          <p className="text-xl text-gray-600">
            Choose a chapter to start your adventure!
          </p>
        </div>

        {/* Chapters and Games Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chapters List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Chapters 📚</h2>
              <div className="space-y-4">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setSelectedChapter(chapter)}
                    className={`w-full text-left p-4 rounded-2xl transition duration-300 ${
                      selectedChapter?.id === chapter.id
                        ? 'bg-[#A2D2FF] text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-semibold mb-1">{chapter.name}</h3>
                    <p className="text-sm opacity-80">{chapter.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Games List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {selectedChapter ? 'Available Games 🎮' : 'Select a Chapter to View Games'}
              </h2>
              {selectedChapter ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedChapter.games.map((game) => (
                    <Link
                      key={game.id}
                      to={`/game/${game.id}`}
                      className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition duration-300"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">{game.name}</h3>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#A2D2FF] text-white">
                          {game.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">🏆</span>
                        <span>{game.points} points</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  Click on a chapter to see available games
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectDetail; 