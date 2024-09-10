import React from 'react';
import Layout from '../components/Layout';
const AboutPage = () => {
  return (
    <Layout>
    <div className="bg-blue-500 text-white">
      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">About Trivia-Hut</h1>
          <p className="mt-4">Your go-to platform for learning and quizzing.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-white leading-relaxed">
          Trivia-Hut is an innovative platform designed to make learning engaging and fun through quizzes and interactive content. Whether you're a student, professional, or just someone who loves to learn new things, our platform offers a wide range of quizzes and learning resources that cater to all levels of knowledge.
        </p>
        <p className="text-lg text-white leading-relaxed mt-4">
          Our mission is to provide a comprehensive and user-friendly platform where users can challenge themselves, learn at their own pace, and track their progress. We believe in the power of quizzes to reinforce learning and make it more enjoyable.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-100 text-blue-500 py-10 mt-10">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="sm:w-1/3 mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Empower Learning</h3>
              <p className="text-gray-600">
                We aim to make learning accessible to everyone through engaging quizzes that test and expand your knowledge on various topics.
              </p>
            </div>
            <div className="sm:w-1/3 mb-6 sm:mb-0">
              <h3 className="text-lg font-semibold mb-2">Promote Curiosity</h3>
              <p className="text-gray-600">
                Our quizzes are designed to spark curiosity and encourage continuous learning across different subjects.
              </p>
            </div>
            <div className="sm:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Users can track their progress, see their strengths, and identify areas for improvement, making learning more effective and goal-oriented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="container mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Repeat this block for each team member */}
          <div className="bg-gray-100 text-blue-500 shadow-lg rounded-lg p-4 text-center">
            <img
              src="/path/to/team-member.jpg"
              alt="Team Member"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
         
          {/* Add more team members here */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-10 mt-10 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <p className="mt-4">
            Become a part of the Trivia-Hut community and start your learning journey today!
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 hover:bg-gray-200 rounded-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default AboutPage;
