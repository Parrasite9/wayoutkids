import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='px-4 lg:px-10'>{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
