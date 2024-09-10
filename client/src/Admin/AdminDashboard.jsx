import React from 'react';
import AdminLayout from './AdminLayout';


const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total Quizzes</h2>
            <p className="text-lg mt-2">16</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Total Users</h2>
            <p className="text-lg mt-2">450</p>
          </div>
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Pending Quizzes</h2>
            <p className="text-lg mt-2">15</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
            <ul className="text-gray-600">
              <li className="mb-2">User JohnDoe added a new quiz.</li>
              <li className="mb-2">Quiz "React Basics" was approved.</li>
              <li className="mb-2">User JaneDoe registered an account.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">System Health</h2>
            <p className="text-lg">All systems are operational.</p>
            <p className="text-sm text-gray-500">Last checked: 5 minutes ago</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
