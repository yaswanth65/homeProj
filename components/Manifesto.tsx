import React from "react";
import { motion } from "framer-motion";

const manifestoBackground = "/assets/Stock Images/building-6011756.jpg";
const manifestoInset = "/assets/Stock Images/interior-design-3564955.jpg";

const Manifesto: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={manifestoBackground}
          alt="Architectural detail"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 w-full max-w-[90%] mx-auto h-full flex flex-col justify-between py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-light text-white leading-[1.1] tracking-[-0.08em] drop-shadow-lg">
            Welcome to our world of creativity, where every project starts with
            a dream and ends with a space that feels like home.
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-end justify-between mt-24 gap-12">
          {/* Small inset image/video trigger */}
          <div className="hidden md:block w-64 h-40 bg-gray-200 rounded overflow-hidden relative group cursor-pointer border border-white/20">
            <img
              src={manifestoInset}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] text-white uppercase tracking-wider">
              Take a glimpse
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/90 font-light text-lg md:text-xl max-w-lg leading-[1.1] tracking-[-0.08em] text-right drop-shadow-md"
          >
            Based in India, we specialize in curating and delivering high-end
            residential and commercial spaces that epitomize sophistication,
            comfort, and elegance.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
