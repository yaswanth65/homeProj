import React from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  // Reusable animation object
  const slideUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section id="about" className="bg-white py-16 md:py-24 ">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: History */}
          <div className="lg:col-span-4">
            <motion.p
              {...slideUp}
              className="text-base md:text-lg leading-relaxed font-normal tracking-[-0.06em] md:tracking-[-0.08em] text-primary max-w-xs"
            >
              Founded in 1985, D S Krishna Associates represents a new chapter in purposeful construction and real estate development, 
              rooted in trust, technical mastery, and customer satisfaction.

            </motion.p>
          </div>

          {/* Right Column: Main Content */}
          <div className="lg:col-span-8">
            <motion.p
              {...slideUp}
              className="text-xl md:text-3xl lg:text-4xl tracking-[-0.06em] md:tracking-[-0.08em] text-primary mb-12"
            >
              With over 35 years of experience in building planning, structural engineering,
               permissions, valuations, and Vastu consulting, the firm seamlessly integrates functionality, 
               sustainability, and energy harmony. Every project reflects a deep understanding of land, structure, 
               and human well-being designed to stand strong both technically and energetically.

            </motion.p>

            <motion.p
              {...slideUp}
              transition={{ ...slideUp.transition, delay: 0.1 }}
              className="text-base md:text-2xl font-normal tracking-[-0.06em] md:tracking-[-0.08em] text-primary mb-12"
            >
              D S Krishna Associates is led by Er. Ganesh Dhondi, a veteran structural engineer, and Er. D Sai Krishna, 
              an B-School Grad–trained Management consultant brings together generational wisdom and modern strategic thinking.
            </motion.p>

            <motion.button
              {...slideUp}
              transition={{ ...slideUp.transition, delay: 0.2 }}
              className="px-8 py-3 scale-110 md:scale-100 bg-white border border-black rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              More About Us
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;