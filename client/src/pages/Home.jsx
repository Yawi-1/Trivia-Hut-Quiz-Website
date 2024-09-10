import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white text-center py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl my-4 font-extrabold ">Welcome to Trivia-Hut!</h1>
          <p className="text-lg md:text-xl mb-6">Explore a variety of quizzes, enhance your knowledge, and challenge yourself!</p>
          <Link to="/quizzes">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Start Quiz
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="feature-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Create and Attempt Quizzes</h3>
              <p>Make your own quizzes or try out quizzes created by others. Challenge yourself and have fun!</p>
            </div>
            <div className="feature-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Track Scores</h3>
              <p>View and track your quiz scores and progress. See how you’re improving over time.</p>
            </div>
            <div className="feature-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Learning Resources</h3>
              <p>Access learning materials and resources to help you enhance your knowledge and skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quizzes */}
      <section className="featured-quizzes py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Quizzes</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Example Quiz Cards */}
            <div className="quiz-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Quiz Title</h3>
              <p>Brief description of the quiz. Engage with this interesting quiz now!</p>
              <Link to="/quizzes/quiz-id">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300">
                  Start Quiz
                </button>
              </Link>
            </div>
            {/* Add more quiz cards as needed */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="step-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
              <p>Create an account or log in to get started with quizzes and tracking your progress.</p>
            </div>
            <div className="step-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Browse Quizzes</h3>
              <p>Explore available quizzes by category or popularity. Find something that interests you.</p>
            </div>
            <div className="step-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Take Quizzes</h3>
              <p>Attempt quizzes and test your knowledge. See how you fare and get feedback on your answers.</p>
            </div>
            <div className="step-card p-6 bg-white rounded-lg shadow-lg w-full md:w-1/4">
              <h3 className="text-xl font-semibold mb-4">Learn & Improve</h3>
              <p>Use the feedback and resources to improve your knowledge and skills in various subjects.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
