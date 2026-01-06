import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
       {/* Top minimalist bar simulating the reference's top edge */}
    
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 top-0' : 'bg-transparent py-6 top-[20px] md:top-[25px]'}`}>
        <div className="max-w-[95%] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
             {/* Simple Logo Icon */}
             <div className="w-6 h-6 bg-primary text-white flex items-center justify-center rounded-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
             </div>
             <div className={`font-medium text-lg tracking-tight ${scrolled ? 'text-primary' : 'text-primary/90'}`}>
               Luxe Haven Realty
             </div>
          </div>
          
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-primary">
            <a href="#featured" className="hover:text-secondary transition-colors">Our Work</a>
            <a href="#why-haven" className="hover:text-secondary transition-colors">Why Haven</a>
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#process" className="hover:text-secondary transition-colors">Process</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a>
          </div>
          
          <button className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;