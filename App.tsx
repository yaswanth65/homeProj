import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FeaturedProject from './components/FeaturedProject';
import Manifesto from './components/Manifesto';
import Differentiation from './components/Differentiation';
import ImageGrid from './components/ImageGrid';
import Process from './components/Process';
import Footer from './components/Footer';
import Team from './components/Team';
import Services from './components/Services'; // Make sure this file exists

// 1. Define the Home Page (Landing Page without Team)
const Home: React.FC = () => {
  return (
    <>
      <div className="w-full overflow-hidden bg-white text-primary selection:bg-gray-200">
        <Hero />
        <Intro />
        {/* Team removed from here */}
        <FeaturedProject />
        <Manifesto />
        <Differentiation />
        <ImageGrid />
      </div>
      
      {/* Process is kept outside overflow-hidden to allow sticky positioning to work */}
      <Process />
    </>
  );
};

// 2. Define the Company Page (Team + Services)
const Company: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white text-primary selection:bg-gray-200 pt-20">
      <Team />
      <Services />
    </div>
  );
};

// 3. Main App Component with Routing
const App: React.FC = () => {
  return (
    <Router>
      <main>
        {/* Navbar stays at the top for all pages */}
        <div className="w-full bg-white text-primary">
          <Navbar />
        </div>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
        </Routes>

        {/* Footer stays at the bottom for all pages */}
        <div className="w-full overflow-hidden bg-white text-primary selection:bg-gray-200">
          <Footer />
        </div>
      </main>
    </Router>
  );
};

export default App;