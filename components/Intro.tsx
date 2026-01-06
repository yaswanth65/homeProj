import React from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <p className="text-sm leading-relaxed font-normal tracking-[-0.08em] text-primary max-w-xs">
              Founded in 2012, Luxe Haven Realty embodies forward-thinking and
              inspiring architectural design headquartered in India.
            </p>
          </motion.div>

          {/* Right Column: Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl tracking-[-0.08em] text-primary mb-12">
              Luxe Haven Realty specializes in modern architecture and real
              estate development that seamlessly integrates functionality,
              aesthetics, and sustainability. The studio brings a unique global
              perspective to every project. With a commitment to crafting
              timeless designs.
            </p>

            <p className="text-xl md:text-2xl font-normal tracking-[-0.08em] text-primary mb-12">
              Co-founded by Indian-born visionary Pradhyumn Dhondi and creative
              architect Thyfreelanceguy
            </p>

            <button className="px-8 py-3 bg-white border border-black rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
