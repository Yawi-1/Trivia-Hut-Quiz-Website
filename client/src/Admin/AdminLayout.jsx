import React from 'react';
import { Link } from 'react-router-dom';


const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
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
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
