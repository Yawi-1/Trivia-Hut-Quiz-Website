import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
import { toast } from 'react-toastify';
const QuizCard = ({ title, description, category, id }) => {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();
  const handleStartQuiz = () => {
    if (isAuthenticated) {
    navigate(`/quizzes/${id}`); 
  } else {
    toast.info('Please Login to attempt the quiz......');
    navigate(`/login`); 
  }

  };
 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{category}
        </span>
        <button
          onClick={handleStartQuiz}
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
