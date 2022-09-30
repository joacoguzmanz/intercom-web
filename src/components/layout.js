import React from 'react';
// import { Link } from 'gatsby';
import { container } from './layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
