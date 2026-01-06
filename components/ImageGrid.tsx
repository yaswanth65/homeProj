import React from "react";
import { motion } from "framer-motion";

const gridImage = new URL(
  "../DS%20Krishna/Stock%20Images/building-6577149.jpg",
  import.meta.url
).href;

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
