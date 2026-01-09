import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FeaturedProject from './components/FeaturedProject';
import Manifesto from './components/Manifesto';
import Differentiation from './components/Differentiation';
import ImageGrid from './components/ImageGrid';
import Process from './components/Process';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main >
      <div className="w-full overflow-hidden bg-white text-primary selection:bg-gray-200" >
      <Navbar />
      <Hero />
      <Intro />
      <FeaturedProject />
      <Manifesto />
      <Differentiation />
      <ImageGrid />
      </div>
      <Process />
      <div className="w-full overflow-hidden bg-white text-primary selection:bg-gray-200" >
      <Footer />
      </div>
    </main>
  );
};

export default App;