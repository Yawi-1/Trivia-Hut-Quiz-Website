import React, { useState } from 'react';
import Layout from '../components/Layout';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Gemini = () => {
  const [aiResponse, setAiResponse] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle user input for the search query
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Fetch AI response using Google Generative AI
  const fetchAIResponse = async () => {
    if (!query) return;
    
    setLoading(true); // Set loading state to true when fetching response
    try {
      const genAI = new GoogleGenerativeAI('AIzaSyD6e-hmI-02A8Iu7i40xBgGMGo0LRJ2WT0');
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(query);
      const text =  result.response.text();
      setAiResponse(text);
      setQuery('');
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiResponse('Error fetching response. Please try again.');
    } finally {
      setLoading(false); // Stop loading once response is received
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAIResponse();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">AI ASSISTANT</h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Ask a question..."
              className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Search
            </button>
          </div>
        </form>

        {/* AI Response Section */}
        <div className="mt-10 w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">AI Response</h2>
          {loading ? (
            <p className="text-gray-500">Fetching response...</p>
          ) : (
            <p className="text-gray-700 font-bold">{aiResponse || 'No response yet. Ask a question above!'}</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gemini;
