// src/pages/Home.jsx
import React from 'react';
import { Hero, About, Education, Products, SupportMission, EventSection, ChooseUs, ContactUs } from '../components/Home';

const Home = () => {
  return (
    <div className='bg-myWhite text-myBlack px-4 lg:px-1'>
      <Hero />
      <ChooseUs />
      <EventSection />
      <About />
      {/* <Education /> */}
      {/* <Products /> */}
      {/* <SupportMission /> */}
      <ContactUs />
    </div>
  );
};

export default Home;
