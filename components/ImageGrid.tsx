import React from "react";
import { motion } from "framer-motion";

const gridImage = "/assets/Stock Images/building-6577149.jpg";
const differentiationImage = "/assets/Stock Images/office-building-1026495.jpg";

const ImageGrid: React.FC = () => {
  return (
    <section className="w-full bg-white pb-10 md:pb-24 pt-12">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* Left Column: Video Placeholder */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[4/3] group cursor-pointer overflow-hidden rounded-md"
            >
              <img
                src={differentiationImage}
                alt="Curated video thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center backdrop-blur-[2px] bg-black/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/20">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className="text-white ml-1 w-6 h-6 md:w-8 md:h-8"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tall Architectural Image */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full h-[50vh] md:h-[85vh] rounded-md overflow-hidden"
            >
              <img
                src={gridImage}
                alt="Atmospheric architecture skyline"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImageGrid;