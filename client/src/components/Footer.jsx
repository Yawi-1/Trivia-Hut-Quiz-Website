import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-6">
    <div className="container mx-auto px-4">
      <p className="mb-4">&copy; 2024 Trivia-Hut. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms of Service</Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer