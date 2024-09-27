import React, { useEffect, useState } from 'react';
import QuizCard from '../components/QuizCard';
import Layout from '../components/Layout';
import axios from 'axios';
import API_BASE_URL from '../config/config'

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchQuizzes = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_BASE_URL}/api/quizzes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuizzes(response.data);
    } catch (error) {
      console.error("Error fetching quizzes", error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  useEffect(() => {
    setFilteredQuizzes(
      quizzes.filter((quiz) =>
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [quizzes, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4 mt-14">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Quizzes</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search quizzes..."
            className="p-2 border border-gray-300 rounded"
          />
        </div>


       { filteredQuizzes <=0 && <h1 className='text-4xl text-center'>Loading........</h1>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filteredQuizzes.map((quiz) => (
            <QuizCard
              key={quiz._id}
              title={quiz.title}
              description={quiz.description}
              category={quiz.category}
              id={quiz._id} 
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Quizzes;
