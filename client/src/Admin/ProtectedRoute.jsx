// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { isAuthenticated } = useAuth();
  const role = localStorage.getItem('role'); // Assuming role is stored in localStorage under 'role'

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    // Redirect to a different page if role does not match the requiredRole
    return <Navigate to="/" />;
  }

  // If authenticated and role matches, render the element
  return element;
};

export default ProtectedRoute;
