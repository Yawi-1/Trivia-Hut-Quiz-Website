import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { API_BASE_URL } from '../config/config';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated ,setUser,user} = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect if already logged in
    }
  }, [isAuthenticated, navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/users/login`, { email, password });
      localStorage.setItem('token', response.data.token); // Store token
      setUser('Login Response:',response.data)
      setIsAuthenticated(true); // Update authentication state
      toast.success('Login successful!');
      navigate('/'); // Redirect to home or dashboard
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      toast.error('Login failed. Please check your credentials.');
      setIsAuthenticated(false); // Ensure authentication is set to false on failure
    }
  };

  return (
    <Layout>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default LoginPage;
