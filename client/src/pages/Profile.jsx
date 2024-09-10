import React from 'react';
import { useAuth } from '../context/AuthContext'
import Layout from '../components/Layout';
const Profile = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <h1 className='text-black mt-24'>Profile</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome,!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default Profile;
