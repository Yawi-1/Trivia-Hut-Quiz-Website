import React from 'react';
import Layout from '../components/Layout';
const LearningPage = () => {
  return (
    <Layout>
  
    <div className="bg-blue-500 text-gray-800">

      {/* Hero Section */}
      <section className="bg-hero-pattern bg-cover bg-center py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Expand Your Knowledge with Our Learning Resources</h1>
          <p className="mt-4">Explore topics, study materials, and tips to excel in quizzes.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Start Learning</button>
        </div>
      </section>

      {/* Search Bar */}
      <div className="container mx-auto px-6 mt-8">
        <input
          type="text"
          placeholder="Search for topics..."
          className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Featured Topics */}
      <section className="container mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-6">Featured Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Repeat this block for each topic */}
          <div className="bg-white  shadow-lg rounded-lg p-4">
            <img src="/path/to/image.jpg" alt="Science" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">Science</h3>
            <p className="mt-2 text-sm text-gray-600">Explore the wonders of science with our curated resources.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Learn More</button>
          </div>
          <div className="bg-white  shadow-lg rounded-lg p-4">
            <img src="/path/to/image.jpg" alt="Science" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">Science</h3>
            <p className="mt-2 text-sm text-gray-600">Explore the wonders of science with our curated resources.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Learn More</button>
          </div>
          <div className="bg-white  shadow-lg rounded-lg p-4">
            <img src="/path/to/image.jpg" alt="Science" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">Science</h3>
            <p className="mt-2 text-sm text-gray-600">Explore the wonders of science with our curated resources.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Learn More</button>
          </div>
          <div className="bg-white  shadow-lg rounded-lg p-4">
            <img src="/path/to/image.jpg" alt="Science" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">Science</h3>
            <p className="mt-2 text-sm text-gray-600">Explore the wonders of science with our curated resources.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Learn More</button>
          </div>
          <div className="bg-white  shadow-lg rounded-lg p-4">
            <img src="/path/to/image.jpg" alt="Science" className="w-full h-32 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">Science</h3>
            <p className="mt-2 text-sm text-gray-600">Explore the wonders of science with our curated resources.</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">Learn More</button>
          </div>
        </div>
      </section>

      {/* Articles, Videos, Study Guides */}
      <section className="container mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Repeat this block for each article */}
          <div className="bg-white my-10 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold">Understanding Quantum Physics</h3>
            <p className="mt-2 text-sm text-gray-600">A deep dive into the world of quantum mechanics.</p>
            <a href="/articles/quantum-physics" className="mt-4 text-blue-600 hover:text-blue-700">Read More</a>
          </div>
          <div className="bg-white my-10 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold">Understanding Quantum Physics</h3>
            <p className="mt-2 text-sm text-gray-600">A deep dive into the world of quantum mechanics.</p>
            <a href="/articles/quantum-physics" className="mt-4 text-blue-600 hover:text-blue-700">Read More</a>
          </div>
          <div className="bg-white my-10 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold">Understanding Quantum Physics</h3>
            <p className="mt-2 text-sm text-gray-600">A deep dive into the world of quantum mechanics.</p>
            <a href="/articles/quantum-physics" className="mt-4 text-blue-600 hover:text-blue-700">Read More</a>
          </div>
          <div className="bg-white my-10 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold">Understanding Quantum Physics</h3>
            <p className="mt-2 text-sm text-gray-600">A deep dive into the world of quantum mechanics.</p>
            <a href="/articles/quantum-physics" className="mt-4 text-blue-600 hover:text-blue-700">Read More</a>
          </div>
          <div className="bg-white my-10 shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold">Understanding Quantum Physics</h3>
            <p className="mt-2 text-sm text-gray-600">A deep dive into the world of quantum mechanics.</p>
            <a href="/articles/quantum-physics" className="mt-4 text-blue-600 hover:text-blue-700">Read More</a>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default LearningPage;
