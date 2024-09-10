import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config/config';
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/users/allUsers`);
    setUsers(response.data);
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  const handleDelete = (id) => {
    axios.delete(`${API_BASE_URL}/api/users/${id}`)
      .then((response) => {
        console.log(response.data);
        toast.info('User Deleted successfully !.........')
        fetchUsers();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <AdminLayout>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Email</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">Role</th>
                <th className="py-2 px-4 border-b border-gray-200 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b border-gray-200">{user.username}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
                  <td className="py-2 px-4 border-b border-gray-200 text-center">
                    {
                      user.role === 'admin' ? (<button className='bg-green-500 px-2 py-1 rounded text-white' onClick={() => alert('You are not authorized to delete admin .........')}>Delete</button>) : 
                      (<button onClick={() => handleDelete(user._id)} className="text-red-500 hover:text-red-700 font-semibold">
                        Delete
                      </button>)
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
