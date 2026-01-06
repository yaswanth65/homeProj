import React from "react";
import { motion } from "framer-motion";

const gridImage = "/assets/Stock Images/building-6577149.jpg";

const ImageGrid: React.FC = () => {
  return (
    <section className="w-full bg-white pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full h-[60vh] md:h-[100vh]"
      >
        <img
          src={gridImage}
          alt="Atmospheric architecture skyline"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default ImageGrid;
