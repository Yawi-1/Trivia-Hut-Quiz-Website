import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config/config';
const AdminQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get(`${API_BASE_URL}/api/quizzes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(response.data);
      } catch (error) {
        toast.error('Error fetching quizzes. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`${API_BASE_URL}/api/quizzes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(quizzes.filter(quiz => quiz._id !== id));
        toast.success('Quiz deleted successfully!');
      } catch (error) {
        console.log(error)
        toast.error('Error deleting quiz. Please try again.');
      }
    }
  };

  if (loading) return <p>Loading quizzes...</p>;

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">All Quizzes</h1>
        {quizzes.length === 0 ? (
          <p>No quizzes available.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number of Questions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {quizzes.map((quiz) => (
                <tr key={quiz._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{quiz.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quiz.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{quiz.questions.length}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => handleDelete(quiz._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminQuizzes;
