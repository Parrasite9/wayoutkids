// src/pages/Home.jsx
import React from 'react';
import { Hero, About, Education, Products, SupportMission, EventSection } from '../components/Home';

const Home = () => {
  return (
    <div className='bg-myWhite text-myBlack px-4 lg:px-1'>
      <Hero />
      <EventSection />
      <About />
      {/* <Education /> */}
      {/* <Products /> */}
      {/* <SupportMission /> */}
    </div>
  );
};

export default Home;
