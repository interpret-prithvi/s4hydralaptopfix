import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [userProgress, setUserProgress] = useState({
    totalPoints: 0,
    completedGames: 0,
    achievements: []
  });

  const subjects = [
    {
      id: 'math',
      title: 'Mathematics',
      icon: '🔢',
      description: 'Learn numbers, addition, and more!',
      color: 'from-blue-400 to-blue-600',
      chapters: [
        { id: 1, title: 'Numbers 1-10', progress: 0 },
        { id: 2, title: 'Addition Basics', progress: 0 },
        { id: 3, title: 'Numbers 1-100', progress: 0 }
      ]
    },
    {
      id: 'english',
      title: 'English',
      icon: '🔤',
      description: 'Master the alphabet and words!',
      color: 'from-green-400 to-green-600',
      chapters: [
        { id: 1, title: 'Alphabet A-Z', progress: 0 },
        { id: 2, title: 'Basic Words', progress: 0 },
        { id: 3, title: 'Word Matching', progress: 0 }
      ]
    },
    {
      id: 'nepali',
      title: 'Nepali',
      icon: '📝',
      description: 'Learn Nepali letters and words!',
      color: 'from-red-400 to-red-600',
      chapters: [
        { id: 1, title: 'Nepali Alphabet', progress: 0 },
        { id: 2, title: 'Basic Words', progress: 0 },
        { id: 3, title: 'Word Practice', progress: 0 }
      ]
    },
    {
      id: 'science',
      title: 'Science',
      icon: '🔬',
      description: 'Explore the world of science!',
      color: 'from-purple-400 to-purple-600',
      chapters: [
        { id: 1, title: 'Basic Concepts', progress: 0 },
        { id: 2, title: 'Simple Experiments', progress: 0 },
        { id: 3, title: 'Science Quiz', progress: 0 }
      ]
    }
  ];

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome to Kukhuri Ka! 🎮</h1>
              <p className="text-lg text-gray-600">Choose a subject to start learning!</p>
            </div>
            <div className="text-right">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <p className="text-xl font-bold text-blue-800">Total Points</p>
                <p className="text-3xl font-bold text-blue-600">{userProgress.totalPoints}</p>
              </div>
            </div>
          </div>

          {!selectedSubject ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  onClick={() => handleSubjectClick(subject)}
                  className={`bg-gradient-to-br ${subject.color} p-6 rounded-2xl cursor-pointer transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h2 className="text-xl font-bold text-white mb-2">{subject.title}</h2>
                  <p className="text-white/80">{subject.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setSelectedSubject(null)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    ← Back to Subjects
                  </button>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{selectedSubject.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedSubject.title}</h2>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Completed Games: {userProgress.completedGames}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedSubject.chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    onClick={() => navigate(`/subject/${selectedSubject.id}/chapter/${chapter.id}`)}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-800">Chapter {chapter.id}</h3>
                      <span className="text-sm text-gray-500">Level {chapter.id}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{chapter.title}</p>
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#A2D2FF] h-2 rounded-full"
                          style={{ width: `${chapter.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">Progress: {chapter.progress}%</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['First Game', 'Perfect Score', 'Quick Learner', 'Math Master'].map((achievement) => (
                    <div
                      key={achievement}
                      className="bg-white p-4 rounded-xl text-center opacity-50"
                    >
                      <div className="text-3xl mb-2">🏆</div>
                      <p className="text-sm font-semibold text-gray-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 