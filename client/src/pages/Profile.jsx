import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { API_BASE_URL } from '../config/config';
import axios from 'axios';

const Profile = () => {
  const { isAuthenticated, user, logout } = useAuth(); // Assuming 'user' contains user ID
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);  // For showing loading state
  const [error, setError] = useState(null);      // For handling errors

  // Function to fetch user data
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/singleUser/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUserData(response.data.user);
      setLoading(false);
    } catch (err) {
      setError("Error fetching user data");
      setLoading(false);
    }
  };

  // Use useEffect to fetch user data on component mount
  useEffect(() => {
    if (isAuthenticated && user) {
      fetchData(user._id); // Pass the user ID to fetch data
    }
  }, [isAuthenticated, user]);

  return (
    <Layout>
      <h1 className='text-black mt-24'>Profile</h1>
      {isAuthenticated ? (
        <>
          {loading ? (
            <p>Loading user data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              <p>Welcome, {userData?.name}!</p>
              <p>Email: {userData?.email}</p>
              {/* Add more user data fields as needed */}
              <button onClick={logout}>Logout</button>
            </>
          )}
        </>
      ) : (
        <p>Please log in</p>
      )}
    </Layout>
  );
};

export default Profile;
