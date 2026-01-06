import React from "react";
import { motion } from "framer-motion";

const heroSky = "/assets/Hero Section/Image.png";
const heroBuilding = "/assets/Hero Section/Image.png";
const heroVideo = "/assets/Hero Section/Background Video.mp4";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center pt-32 bg-[#E6F0F5]">
      {/* Background video at base layer */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-white/35" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 text-center px-4 mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-sm tracking-tight mb-2"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          Elevating Luxury Living
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-normal text-white drop-shadow-sm tracking-tight mb-6"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          in India
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-white/90 font-light text-sm md:text-base tracking-wide max-w-lg mx-auto drop-shadow-md"
        >
          At Luxe Haven Realty, we go beyond real estate, we create
          extraordinary living experiences.
        </motion.p>
      </div>

      {/* Building Image - Bottom Anchored */}
      <div className="relative w-full max-w-[90%] md:max-w-[100%] mt-auto z-30">
        <motion.img
          initial={{ opacity: 0, scale: 0.95, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBuilding}
          alt="Luxury building architecture"
          className="w-full h-auto max-h-[70vh] object-cover object-center rounded-t-sm shadow-2xl"
        />
      </div>

      {/* Fog gradient to blend into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-10 bg-gradient-to-b from-transparent via-white/70 to-white backdrop-blur-[2px] z-40" />
    </section>
  );
};

export default Hero;
