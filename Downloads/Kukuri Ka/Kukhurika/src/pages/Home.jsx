import { Link } from 'react-router-dom';

function Home() {
  const subjects = [
    { name: 'English', icon: '📚', color: 'bg-[#A2D2FF]' },
    { name: 'Math', icon: '🔢', color: 'bg-[#FFC8DD]' },
    { name: 'Science', icon: '🔬', color: 'bg-[#FDFFB6]' },
    { name: 'Nepali', icon: '🇳🇵', color: 'bg-[#CAFFBF]' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A2D2FF] to-[#FFC8DD]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to Kukhuri Ka! 🎮
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learning is fun with our exciting games and adventures! Join us on this amazing journey of knowledge.
            </p>
            <Link
              to="/login"
              className="bg-[#A2D2FF] text-white px-8 py-4 rounded-3xl text-xl font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              Start Learning Now! 🚀
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero-illustration.png"
              alt="Learning Adventure"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore Our Subjects 🎯
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className={`${subject.color} p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-6xl mb-4">{subject.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{subject.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Kukhuri Ka? ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fun Learning Games</h3>
            <p className="text-gray-600">Learn through exciting games and interactive activities</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Earn Rewards</h3>
            <p className="text-gray-600">Get badges and rewards for your achievements</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your learning journey with detailed progress tracking</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#FDFFB6] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Ready to Start Your Learning Adventure? 🌟
          </h2>
          <Link
            to="/login"
            className="bg-[#A2D2FF] text-white px-8 py-4 rounded-3xl text-xl font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Join Now! 🎯
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 