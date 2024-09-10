import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [totalUsers,setTotalUsers] = useState(0);
  const [loader,setLoader] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    toast.info('Logged out successfully!');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout,totalUsers,setTotalUsers,loader,setLoader }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
