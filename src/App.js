// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import TVShow from './pages/TVShow';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PressRelease from './pages/PressRelease';
import BeAware from './pages/Programs/BeAware';
import CleanRecord from './pages/Programs/CleanRecord';
import SharedLayout from './components/Globals/SharedLayout';
// Import other program pages...

function App() {
  return (
    <Router>
      <SharedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tv-show" element={<TVShow />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/press-release" element={<PressRelease />} />
          {/* Nested routes for "Our Programs" */}
          <Route path="/programs/be-aware" element={<BeAware />} />
          <Route path="/programs/clean-record" element={<CleanRecord />} />
          {/* Add other program routes... */}
        </Routes>
      </SharedLayout>
    </Router>
  );
}

export default App;
