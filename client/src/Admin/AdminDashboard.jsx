import React from 'react';
import AdminLayout from './AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Total Quizzes</h2>
            <p className="text-3xl">50</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Total Users</h2>
            <p className="text-3xl">120</p>
          </div>
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2">Pending Quizzes</h2>
            <p className="text-3xl">5</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
