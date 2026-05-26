import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img src="/logo.jpg" alt="Kukhuri Ka" className="h-12 w-auto" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-[#A2D2FF] px-3 py-2 rounded-3xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-[#A2D2FF] px-3 py-2 rounded-3xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                  About
                </Link>
                <Link to="/pricing" className="text-gray-700 hover:text-[#A2D2FF] px-3 py-2 rounded-3xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                  Pricing
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#A2D2FF] px-3 py-2 rounded-3xl text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/login" className="bg-[#A2D2FF] text-white px-6 py-2 rounded-3xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              Login
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#A2D2FF]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#A2D2FF] hover:bg-gray-50">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#A2D2FF] hover:bg-gray-50">
              About
            </Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#A2D2FF] hover:bg-gray-50">
              Pricing
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#A2D2FF] hover:bg-gray-50">
              Contact
            </Link>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#A2D2FF] hover:bg-gray-50">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 