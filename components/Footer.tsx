import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const rotating = "/assets/Stock Images/rotating-image.png"
  return (
    // Outer container - Ensures full viewport height and centers content
    <footer className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#e0e0e0]">
        
        {/* --- Background Image --- */}
        <div className="absolute inset-0 z-0">
           <img 
             // You can swap this background image URL as needed
             src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2600&auto=format&fit=crop" 
             alt="Architecture Background" 
             // object-cover ensures it fills the space, making it feel "big"
             className="w-full h-[130vh] object-cover grayscale brightness-110 contrast-125"
           />
        </div>
        
        {/* --- Central Card Container --- */}
        <div className="relative z-10 w-full px-6 flex justify-center items-center my-24">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             // The card itself - centered, fixed aspect ratio, white background
             className="bg-white w-full max-w-[600px] aspect-square flex flex-col items-center justify-between text-center p-10 md:p-16 shadow-2xl"
           >
              {/* 1. Top Text Section */}
              <div className="flex-1 flex items-end pb-4">
                <h2 className="text-xl md:text-2xl font-light text-black leading-tight mx-auto">
                  We are always eager to explore new projects and collaboration opportunities. Feel free to reach out, and let's bring visionary designs to life together.
                </h2>
              </div>

              {/* 2. Middle Spinning Image Placeholder */}
              <div className="flex-1 flex items-center justify-center py-6">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 12, // Adjust rotation speed here (higher number = slower)
                      ease: "linear" 
                    }}
                    // Set the size of your icon container here (e.g., w-24 h-24)
                    className="w-28 h-28 relative flex items-center justify-center"
                 >
                    {/* ----------- IMAGE PLACEHOLDER ----------- 
                       Replace the 'src' below with your actual image path.
                       e.g., src="/assets/images/my-icon.png"
                    */}
                    <img 
                        src={rotating} 
                        alt="Spinning Icon"
                        // object-contain ensures your image doesn't get cropped
                        className="w-full h-full object-contain"
                    />
                 </motion.div>
              </div>
              
              {/* 3. Bottom Contact Section */}
              <div className="flex-1 flex flex-col justify-start pt-4 gap-1">
                 <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">Get in Touch</p>
                 <a href="mailto:luxehaven@gmail.com" className="text-lg md:text-xl font-medium text-black hover:text-gray-600 transition-colors">
                   luxeheavan@gmail.com
                 </a>
                 <p className="text-sm text-gray-500 font-light mt-1">+91 01234 56789</p>
              </div>
           </motion.div>
        </div>

        {/* --- Bottom Credits Footer --- */}
        <div className="absolute bottom-8 w-full text-center z-10">
           <p className="text-white/70 text-[10px] font-medium uppercase tracking-widest mix-blend-difference">
             © 2024 Luxe Haven Realty. All rights reserved.
           </p>
        </div>
    </footer>
  );
};

export default Footer;