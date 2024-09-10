import React from 'react';
import Navbar from './Navbar'; // Adjust path as needed
import Footer from './Footer'; // Adjust path as needed

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
