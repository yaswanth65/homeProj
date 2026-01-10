// import React from "react";
// import { motion } from "framer-motion";

// const heroSky = new URL("../assets/Hero%20Section/Image.png", import.meta.url)
//   .href;
// const heroBuilding = new URL(
//   "../assets/Hero%20Section/Image.png",
//   import.meta.url
// ).href;
// const heroVideo = new URL(
//   "../assets/Hero%20Section/Background%20Video.mp4",
//   import.meta.url
// ).href;

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-[80vh] md:h-screen w-full overflow-hidden flex flex-col items-center pt-32 bg-[#E6F0F5]">
//       {/* Background video at base layer */}
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           src={heroVideo}
          
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-white/35" />
//       </div>

//       {/* Text Overlay */}
//       <div className="relative z-20 text-center top-20 pt-10   md:top-0 px-4 mb-8">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="text-4xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-sm tracking-tight mb-2"
//           style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
//         >
//           Elevating Luxury Living
//         </motion.h1>
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
//           className="text-4xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-sm tracking-tight mb-6"
//           style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
//         >
//           in India
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
//           className="text-white/90 font-light text-base md:text-lg tracking-wide max-w-lg mx-auto drop-shadow-md"
//         >
//           At Luxe Haven Realty, we go beyond real estate, we create
//           extraordinary living experiences.
//         </motion.p>
//       </div>

//       {/* Building Image - Bottom Anchored */}
//       <div className="relative w-full max-w-[90%] md:max-w-[100%] mt-auto z-30">
//         <motion.img
//           initial={{ opacity: 0, scale: 0.95, y: 100 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           src={heroBuilding}
//           alt="Luxury building architecture"
//           className="w-full h-auto max-h-[70vh] object-cover object-center rounded-t-sm shadow-2xl"
//         />
//       </div>

//       {/* Fog gradient to blend into the next section */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-10 bg-gradient-to-b from-transparent via-white/70 to-white backdrop-blur-[2px] z-40" />
//     </section>
//   );
// };

// export default Hero;

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const heroSky = new URL("../assets/Hero%20Section/Image.png", import.meta.url).href;
const heroBuilding = new URL("../assets/Hero%20Section/Image.png", import.meta.url).href;
const heroVideo = new URL("../assets/Hero%20Section/Background%20Video.mp4", import.meta.url).href;

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
 
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Fade out faster

  return (
    <section 
      ref={containerRef} 
      // CHANGE 1: Increased height to 130vh to create vertical space at the top
      className="relative h-[110vh] lg:h-[140vh] w-full overflow-hidden flex flex-col items-center bg-[#E6F0F5]"
    >
      
      {/* --- LAYER 1: Background Video (Z-0) --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          poster={heroSky}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/10" /> 
      </div>

      {/* --- LAYER 2: Text Content (Z-10) --- */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        // CHANGE 2: Restored padding and size because we now have room in the 130vh container
        className="relative z-10 top-20 md:top-0 w-full text-center pt-32 md:pt-16 px-4 flex flex-col items-center fixed-text-layer"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-sans font-normal text-white leading-tight drop-shadow-lg"
        >
          {/* Big, beautiful text restored */}
          <span className="block text-6xl  opacity-70 lg:text-[4rem] tracking-tight mb-2 md:mb-4">
            Engineering Spaces That
          </span>
          <span className="block text-6xl   opacity-70  lg:text-[4rem] tracking-tight">
            Align With Life
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-white/90 font-light text-lg md:text-lg max-w-[90%] md:max-w-3xl text-center leading-relaxed drop-shadow-md"
        >
          A legacy-driven real estate and consulting firm blending advanced Vastu science, 
          structural engineering, and modern development to create spaces of balance, value, and longevity.
        </motion.p>
      </motion.div>

      {/* --- LAYER 3: House Image (Z-20) --- */}
      {/* This is anchored to 'bottom-0'. 
         Since container is 130vh, this starts further down, leaving the top clear.
         As you scroll, this element rises naturally with the page.
      */}
      <div className="absolute bottom-0 z-20 w-full flex justify-center items-end">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={heroBuilding}
          alt="Luxury Architecture"
          // CHANGE 3: max-h set to ensure it looks dominant but doesn't overflow the 130vh container inappropriately
          className="w-full min-w-[90vh] h-auto max-h-[75vh] md:max-h-[100vh] object-cover object-bottom"
        />
      </div>

      {/* --- LAYER 4: White Fade Gradient (Z-30) --- */}
      <div className="absolute inset-x-0 bottom-0 h-64 md:h-64 bg-gradient-to-t from-white via-white/90 to-transparent z-30 pointer-events-none" />

    </section>
  );
};

export default Hero;