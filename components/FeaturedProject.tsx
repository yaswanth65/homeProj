import React from "react";
import { motion } from "framer-motion";

const featuredImage = new URL(
  "../DS%20Krishna/Stock%20Images/building-4884852.jpg",
  import.meta.url
).href;

const FeaturedProject: React.FC = () => {
  return (
    <section id="featured" className="py-12 bg-white">
      <div className="max-w-[90%] mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-medium text-gray-500 uppercase tracking-widest block mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl tracking-[-0.08em] font-light text-primary max-w-2xl leading-tight mb-8">
            Showcasing our dedication to innovative design and timeless
            architectural excellence.
          </h2>
          <button className="px-6 py-2.5 border border-gray-300 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Our Projects
          </button>
        </motion.div>
      </div>

      <div className="w-full relative overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={featuredImage}
          alt="The Celestia Residences"
          className="w-full h-[60vh] md:h-[85vh] object-cover"
        />
        <div className="max-w-[90%] mx-auto mt-6 flex justify-between items-start border-b border-gray-200 pb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal text-primary">
              The Celestia Residences
            </h3>
            <p className="text-sm text-secondary font-light mt-1 uppercase tracking-wide">
              Residential / Nov 2020
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="group-hover:stroke-white"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="group-hover:stroke-white"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
