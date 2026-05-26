import { Link } from 'react-router-dom';

function SubjectHub() {
  const subjects = [
    {
      id: 'math',
      title: 'Mathematics',
      description: 'Master numbers and calculations',
      icon: '🔢',
      color: 'from-blue-400 to-blue-600',
      games: [
        {
          id: 'addition',
          title: 'Addition Challenge',
          description: 'Practice addition with increasing difficulty',
          path: '/subject/math/addition'
        },
        {
          id: 'multiplication',
          title: 'Multiplication Master',
          description: 'Become a multiplication expert',
          path: '/subject/math/multiplication'
        }
      ]
    },
    {
      id: 'science',
      title: 'Science',
      description: 'Explore the wonders of science',
      icon: '🔬',
      color: 'from-green-400 to-green-600',
      games: [
        {
          id: 'quiz',
          title: 'Science Quiz',
          description: 'Test your science knowledge',
          path: '/subject/science/quiz'
        }
      ]
    },
    {
      id: 'nepali',
      title: 'Nepali Language',
      description: 'Learn Nepali vocabulary and grammar',
      icon: '🇳🇵',
      color: 'from-red-400 to-red-600',
      games: [
        {
          id: 'vocabulary',
          title: 'Vocabulary Builder',
          description: 'Build your Nepali vocabulary',
          path: '/subject/nepali/vocabulary'
        }
      ]
    },
    {
      id: 'english',
      title: 'English',
      description: 'Improve your English skills',
      icon: '📚',
      color: 'from-purple-400 to-purple-600',
      games: [
        {
          id: 'wordmatch',
          title: 'Word Match',
          description: 'Match words with their meanings',
          path: '/subject/english/wordmatch'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learning Subjects 📚</h1>
          <p className="text-xl text-gray-600">Choose a subject to start learning!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className={`bg-gradient-to-br ${subject.color} p-6`}>
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{subject.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{subject.title}</h2>
                    <p className="text-white opacity-90">{subject.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {subject.games.map((game) => (
                    <Link
                      key={game.id}
                      to={game.path}
                      className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-800">{game.title}</h3>
                      <p className="text-gray-600">{game.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectHub; 