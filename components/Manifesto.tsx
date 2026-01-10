// import React from "react";
// import { motion } from "framer-motion";

// const manifestoBackground = "/assets/Stock Images/building-6011756.jpg";
// const manifestoInset = "/assets/Stock Images/interior-design-3564955.jpg";

// const Manifesto: React.FC = () => {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={manifestoBackground}
//           alt="Architectural detail"
//           className="w-full h-full object-cover brightness-[0.85]"
//         />
//         <div className="absolute inset-0 bg-black/10"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-[90%] mx-auto h-full flex flex-col justify-between py-24 md:py-32">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="max-w-4xl"
//         >
//           <h2 className="text-3xl md:text-5xl lg:text-5xl font-light text-white leading-[1.1] tracking-[-0.08em] drop-shadow-lg">
//             Welcome to our world of creativity, where every project starts with
//             a dream and ends with a space that feels like home.
//           </h2>
//         </motion.div>

//         <div className="flex flex-col md:flex-row items-end justify-between mt-24 gap-12">
//           {/* Small inset image/video trigger */}
//           <div className="hidden md:block w-64 h-40 bg-gray-200 rounded overflow-hidden relative group cursor-pointer border border-white/20">
//             <img
//               src={manifestoInset}
//               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
//                 <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
//               </div>
//             </div>
//             <div className="absolute bottom-2 left-2 text-[10px] text-black bg-white/25 backdrop-blur-sm px-1 rounded-md uppercase tracking-wider">
//               Take a glimpse
//             </div>
//           </div>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 1 }}
//             className="text-white/90 font-light text-base md:text-xl max-w-lg leading-[1.1] tracking-[-0.08em] text-right drop-shadow-md"
//           >
//             Based in India, we specialize in curating and delivering high-end
//             residential and commercial spaces that epitomize sophistication,
//             comfort, and elegance.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Manifesto;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifestoBackground = "/assets/Stock Images/building-6011756.jpg";
const manifestoInset = "/assets/Stock Images/interior-design-3564955.jpg";

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress relative to this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects:
  // yText: Moves the main title UP faster than the scroll (0px to -100px)
  const yText = useTransform(scrollYProgress, [0, 1], [100, -150]);
  
  // yDesc: Moves the bottom description UP slightly slower (0px to -50px)
  const yDesc = useTransform(scrollYProgress, [0, 1], [50, -100]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={manifestoBackground}
          alt="Architectural detail"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        {/* Subtle gradient overlay to ensure text readability against sky/floor */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-[90%] mx-auto h-full flex flex-col justify-between py-12 md:py-20 flex-grow">
        
        {/* Top Headline - Parallax Enabled */}
        <motion.div
          style={{ y: yText }} // Connects the scroll progress to Y position
          className="w-full text-center mt-12 md:mt-0"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-white leading-[1.1] tracking-[-0.04em] drop-shadow-lg max-w-5xl mx-auto">
            Welcome to a practice where engineering precision meets purposeful design where every project begins with clarity and ends with confidence.
          </h2>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-auto gap-8 md:gap-12 pb-12">
          
          {/* Bottom Left: Inset Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ y: yDesc }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center bg-white/20 bg-blur-sm rounded-md gap-4 w-25 md:w-full md:w-auto"
          >
            <div className="w-32 h-20 md:w-48 md:h-28 rounded-xl overflow-hidden border border-white/30 shadow-2xl relative group cursor-pointer">
              <img
                src={manifestoInset}
                alt="Interior Glimpse"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="text-white/80 text-xs md:text-sm   max-w-[150px] leading-tight font-medium">
              Take a glimpse into our world of creativity and innovation.
            </p>
          </motion.div>

          {/* Bottom Right: Description Text - Parallax Enabled */}
          <motion.div
            style={{ y: yDesc }} // Different scroll speed than header
            className="max-w-xl text-left md:text-right"
          >
            <p className="text-white font-normal text-base md:text-lg leading-[1.3] tracking-[-0.02em] drop-shadow-md">
              Based in Telangana, we specialize in advanced Vastu planning, building permissions, land surveying, valuations, and residential development, delivering solutions that are technically sound, regulation-ready, and aligned with long-term value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;