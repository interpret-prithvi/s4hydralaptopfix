import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      // Login logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.some(u => u.email === formData.email)) {
        setError('Email already exists');
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      navigate('/dashboard');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Illustration */}
          <div className="md:w-1/2 bg-[#FDFFB6] p-8 flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="Login Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right side - Login/Signup Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                {isLogin ? 'Welcome Back! 🎮' : 'Join the Adventure! 🚀'}
              </h1>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-3xl mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-[#A2D2FF] focus:ring-2 focus:ring-[#A2D2FF] focus:ring-opacity-50 transition duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-[#A2D2FF] focus:ring-2 focus:ring-[#A2D2FF] focus:ring-opacity-50 transition duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 text-lg font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-[#A2D2FF] focus:ring-2 focus:ring-[#A2D2FF] focus:ring-opacity-50 transition duration-300"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A2D2FF] text-white py-3 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <p className="text-center text-gray-600 mt-4">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                    }}
                    className="text-[#A2D2FF] font-semibold hover:underline"
                  >
                    {isLogin ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 