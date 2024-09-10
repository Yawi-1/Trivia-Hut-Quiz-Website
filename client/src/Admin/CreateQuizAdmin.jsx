import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useAuth } from '../context/AuthContext';
const CreateQuizAdmin = () => {

  const {setLoader,loader} = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([
    { questionText: '', options: [{ text: '', isCorrect: false }], correctAnswer: '' },
  ]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', options: [{ text: '', isCorrect: false }], correctAnswer: '' }]);
  };

  const handleAddOption = (index) => {
    const newQuestions = [...questions];
    if (newQuestions[index].options.length < 4) {
      newQuestions[index].options.push({ text: '', isCorrect: false });
      setQuestions(newQuestions);
    } else {
      toast.error('A question can have only four options.');
    }
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const { name, value, checked } = event.target;
    const newQuestions = [...questions];
    if (name === 'isCorrect') {
      newQuestions[questionIndex].options[optionIndex][name] = checked;
    } else {
      newQuestions[questionIndex].options[optionIndex][name] = value;
    }
    setQuestions(newQuestions);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
    setQuestions(newQuestions);
  };

  const handleDeleteOption = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newQuestions[questionIndex].options.filter((_, oIndex) => oIndex !== optionIndex);
    setQuestions(newQuestions);
  };

  const validateForm = () => {
    if (!title) {
      toast.error('Quiz title is required.');
      return false;
    }
    if (questions.length === 0) {
      toast.error('At least one question is required.');
      return false;
    }

    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].questionText) {
        toast.error(`Question ${i + 1} text is required.`);
        return false;
      }
      if (!questions[i].correctAnswer) {
        toast.error(`Correct answer for Question ${i + 1} is required.`);
        return false;
      }
      for (let j = 0; j < questions[i].options.length; j++) {
        if (!questions[i].options[j].text) {
          toast.error(`Option ${j + 1} for Question ${i + 1} text is required.`);
          return false;
        }
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoader(true);
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const creator = decoded.id; // Adjust based on your token structure

      const response = await axios.post('http://localhost:3000/api/quizzes/create', {
        title,
        description,
        category,
        questions,
        creator,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        toast.success('Quiz created successfully!');
        setTitle('');
        setDescription('');
        setCategory('');
        setQuestions([{ questionText: '', options: [{ text: '', isCorrect: false }], correctAnswer: '' }]);
      }
      setLoader(false);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      toast.error('Error creating quiz. Please try again.');
      setLoader(false);
    }
  };
  
  return (
    <AdminLayout>
     { loader && <Loader/>}
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Create a New Quiz</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Quiz Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {questions.map((question, qIndex) => (
            <div key={qIndex} className="mb-8 border-b pb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Question {qIndex + 1}</h2>
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(qIndex)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete Question
                </button>
              </div>
              <input
                type="text"
                name="questionText"
                value={question.questionText}
                onChange={(e) => handleInputChange(qIndex, e)}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                placeholder="Enter question text"
                required
              />
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Correct Answer</label>
                <input
                  type="text"
                  name="correctAnswer"
                  value={question.correctAnswer}
                  onChange={(e) => handleInputChange(qIndex, e)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter correct answer"
                  required
                />
              </div>
              {question.options.map((option, oIndex) => (
                <div key={oIndex} className="flex items-center mb-4">
                  <input
                    type="text"
                    name="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                    className="w-3/4 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Option ${oIndex + 1}`}
                    required
                  />
                  <label className="flex items-center ml-4">
                    <input
                      type="checkbox"
                      name="isCorrect"
                      checked={option.isCorrect}
                      onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                      className="mr-2 leading-tight focus:outline-none"
                    />
                    <span className="text-gray-700">Correct</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => handleDeleteOption(qIndex, oIndex)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Delete Option
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddOption(qIndex)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Add Option
              </button>
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleAddQuestion}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Question
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit Quiz
            </button>
          </div>
        </form>
      </div>

    </AdminLayout>
  );
};

export default CreateQuizAdmin;
