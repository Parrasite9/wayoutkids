// src/pages/Home.jsx
import React from 'react';
import { Hero, About, Education, Products, SupportMission, EventSection, ChooseUs, ContactUs, SponsorSection, Testimony } from '../components/Home';

const Home = () => {
  return (
    <div className='bg-myWhite text-myBlack px-4 lg:px-1'>
      <Hero />
      <ChooseUs />
      <EventSection />
      <About />
      <Testimony />
      {/* <Education /> */}
      {/* <Products /> */}
      {/* <SupportMission /> */}
      <ContactUs />
      <SponsorSection />
    </div>
  );
};

export default Home;
