import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'react-feather'; // Icons for the menu button
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setIsOpen(false); // Hide the menu
    navigate(path); // Navigate to the path
  };

    const role = localStorage.getItem('role');
  return (
    <nav className="bg-blue-600 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto py-3 flex justify-between items-center px-8">
        <Link to="/" className="text-white font-bold text-2xl" onClick={() => handleLinkClick('/')}>
          Trivia-Hut
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Sliding menu for small devices */}
        <div
          className={`fixed top-0 left-0 h-full bg-blue-600 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out md:relative md:transform-none md:flex md:items-center md:gap-8`}
        >
          <div className="mt-20 flex items-center md:gap-x-8 flex-col space-y-4 px-8 md:flex-row md:mt-0 md:space-y-0">
            <Link
              to="/"
              className="text-white hover:text-gray-200 block"
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Link>
            <Link
              to="/quizzes"
              className="text-white hover:text-gray-200 block"
              onClick={() => handleLinkClick('/quizzes')}
            >
              Quizzes
            </Link>
            <Link
              to="/learning"
              className="text-white hover:text-gray-200 block"
              onClick={() => handleLinkClick('/learning')}
            >
              Learning
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 block"
              onClick={() => handleLinkClick('/about')}
            >
              About
            </Link>
            
            {isAuthenticated ? (
              <>
              {
                role == 'admin' &&   <Link
                to="/admin"
                className="text-white hover:text-gray-200 block bg-slate-400 px-3 py-1 rounded-md font-medium"
                onClick={() => handleLinkClick('/admin')}
              >
                Admin
              </Link>
              }
            
                <Link
                  to="/profile"
                  className="text-white hover:text-gray-200 block"
                  onClick={() => handleLinkClick('/profile')}
                >
                  <img
                    src="https://placehold.co/600x400/000000/FFF"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </Link>
                <button
                  onClick={() => {
                    logout();
                    handleLinkClick('/');
                  }}
                  className="text-white hover:text-gray-200 block bg-red-600 py-1 px-3 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-blue-500 hover:bg-blue-600 py-1 px-3 rounded-md block text-center"
                  onClick={() => handleLinkClick('/login')}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-blue-500 bg-white hover:bg-gray-100 py-1 px-3 rounded-md border border-blue-500 block text-center mt-2 md:mt-0 md:ml-4"
                  onClick={() => handleLinkClick('/signup')}
                >
                  Sign Up
                </Link>

              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
