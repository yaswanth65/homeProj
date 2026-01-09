import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Our Work', href: '#featured' },
    { name: 'Why Haven', href: '#why-haven' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 border-b border-gray-100 top-0' : 'bg-transparent py-6 top-[20px] md:top-[25px]'}`}
      >
        <div className="max-w-[95%] mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2 relative z-50">
             <div className="w-6 h-6 bg-primary text-white flex items-center justify-center rounded-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
             </div>
             <div className={`font-medium text-lg tracking-tight transition-colors ${scrolled || isMenuOpen ? 'text-primary' : 'text-primary/90'}`}>
               Luxe Haven Realty
             </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-primary">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-secondary transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button (Hamburger / X) */}
          <button 
            className="md:hidden relative z-50 p-2 text-primary focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)} // Close when clicking backdrop
      >
        {/* Menu Content Slide-in */}
        <div 
          className={`absolute top-0 left-0 w-full bg-white shadow-xl transition-transform duration-300 ease-out pt-24 pb-10 px-6 flex flex-col gap-6 text-center
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          onClick={(e) => e.stopPropagation()} // Prevent click inside menu from closing it immediately (optional, depends on preference. Removing this makes the whole white area clickable to close too if desired, but standard is menu links close it, whitespace doesn't.)
        >
           {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-primary hover:text-secondary py-3 border-b border-gray-100 last:border-none"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;