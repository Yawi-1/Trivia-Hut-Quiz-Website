import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Profile from './pages/Profile';
import Quizzes from './pages/Quizzes'; 
import LearningPage from './pages/LearningPage';
import AboutPage from './pages/AboutPage';
import CreateQuizAdmin from './Admin/CreateQuizAdmin';
import AdminQuizzes from './Admin/AdminQuizzes';
import AdminDashboard from './Admin/AdminDashboard';
import AdminUsers from './Admin/AdminUsers';
import ProtectedRoute from './Admin/ProtectedRoute'; // Import the ProtectedRoute component
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import QuizPage from './pages/QuizPage';
import Gemini from './pages/Gemini';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/quizzes/:id" element={<QuizPage />} />
        <Route path="/ai" element={<Gemini />} />
      

        {/* Admin routes with protection */}
        <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />} />
        <Route path="/admin/createquiz" element={<ProtectedRoute element={<CreateQuizAdmin />} requiredRole="admin" />} />
        <Route path="/admin/quizzes" element={<ProtectedRoute element={<AdminQuizzes />} requiredRole="admin" />} />
        <Route path="/admin/users" element={<ProtectedRoute element={<AdminUsers />} requiredRole="admin" />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
