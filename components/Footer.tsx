import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#e0e0e0]">
        {/* Background - Concrete Angles */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2600&auto=format&fit=crop" 
             alt="Concrete Architecture" 
             className="w-full h-full object-cover grayscale brightness-110 contrast-125"
           />
           {/* <div className="absolute inset-0 bg-gray-200/20 mix-blend-multiply"></div> */}
        </div>
        
        <div className="relative z-10 w-full px-6">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="bg-white max-w-[600px] mx-auto aspect-square flex flex-col items-center justify-center text-center p-12 md:p-20 shadow-2xl relative"
           >
              {/* Custom Clover Icon */}
              <div className="mb-12 text-primary">
                 <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                    <circle cx="30" cy="18" r="9" />
                    <circle cx="30" cy="42" r="9" />
                    <circle cx="18" cy="30" r="9" />
                    <circle cx="42" cy="30" r="9" />
                 </svg>
              </div>

              <h2 className="text-xl md:text-2xl font-light text-primary leading-relaxed mb-12 max-w-sm">
                We always eager to explore new projects and collaboration opportunities. Feel free to reach out, and let's bring visionary designs to life together.
              </h2>
              
              <div className="flex flex-col gap-3">
                 <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">Get in Touch</p>
                 <a href="mailto:luxehaven@gmail.com" className="text-lg font-medium text-primary hover:text-secondary transition-colors">
                   luxehaven@gmail.com
                 </a>
                 <p className="text-sm text-secondary font-light">+91 01234 56789</p>
              </div>
           </motion.div>
        </div>

        {/* Bottom Credits */}
        <div className="absolute bottom-8 w-full text-center z-10">
           <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest mix-blend-difference">
             © 2024 Luxe Haven Realty. All rights reserved.
           </p>
        </div>
    </footer>
  );
};

export default Footer;