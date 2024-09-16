import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const QuizPage = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); 

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:3000/api/quizzes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          if (!isSubmitted) {  
            setIsSubmitted(true)
            return () => clearInterval(timer);
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id, isSubmitted]);

  const handleOptionChange = (questionIndex, optionValue) => {
    if (!isSubmitted) {
      setSelectedOptions((prev) => ({
        ...prev,
        [questionIndex]: optionValue,
      }));
    }
  };

  const handleSubmit = () => {
    if (isSubmitted) return; // Prevent resubmission if already submitted

    let newScore = 0;
    quiz.questions.forEach((question, qIndex) => {
      const selectedOption = selectedOptions[qIndex];
      if (selectedOption === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setIsSubmitted(true); // Mark quiz as submitted
  };

  if (!quiz) return <div><Link to='/'>Go to home</Link></div>;

  return (
    <div className="container mx-auto p-4 mt-14">
      <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
      <p className="text-gray-700 text-base mb-4">{quiz.description}</p>
      <div className="mb-4">
        <div className="text-lg mb-4">Time left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</div>
        <div className="text-lg mb-4">Total Number of Questions :{quiz.questions.length} </div>
        

        {quiz.questions.map((question, qIndex) => (
          <div key={qIndex} className="mb-6 p-4 border rounded-lg shadow-lg bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">Question {qIndex + 1}: {question.questionText}</h2>
            <ul>
              {question.options.map((option, oIndex) => {
                const isSelected = selectedOptions[qIndex] === option.text;
                const isCorrect = option.text === question.correctAnswer;

                return (
                  <li key={oIndex} className="my-2">
                    <label className={`flex items-center p-2 rounded cursor-pointer border shadow ${isSubmitted && (isSelected ? (isCorrect ? 'bg-green-300 border-green-500' : 'bg-red-300 border-red-500') : (isCorrect ? 'bg-green-100 border-green-300' : ''))}`}>
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={option.text}
                        checked={isSelected}
                        onChange={() => handleOptionChange(qIndex, option.text)}
                        disabled={isSubmitted}
                        className="mr-2"
                      />
                      {option.text}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isSubmitted}
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {isSubmitted ? 'Quiz Submitted' : 'Submit Quiz'}
      </button>
      <Link to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go to Home</Link>
      <Modal
        isOpen={isSubmitted}
        onRequestClose={() => setIsSubmitted(false)}
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
      >
        <h2 className="text-2xl font-bold mb-4">Quiz Submitted</h2>
        <p className="text-lg mb-4">You scored {score} out of {quiz.questions.length}.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default QuizPage;
