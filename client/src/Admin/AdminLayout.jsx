import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className={`w-64 bg-gray-800 text-white flex-shrink-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/admin" className="text-gray-300 hover:text-white">
                  Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/admin/quizzes" className="text-gray-300 hover:text-white">
                  Quizzes
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/admin/users" className="text-gray-300 hover:text-white">
                  Users
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/admin/createquiz" className="text-gray-300 hover:text-white">
                  Create Quiz
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="text-gray-300 hover:text-white">
                  Go to website
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Hamburger icon for mobile screens */}
      <div className="lg:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
