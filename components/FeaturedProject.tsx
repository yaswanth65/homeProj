import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    image: "/assets/Stock Images/building-4884852.jpg",
    title: "The Celestia Residences",
    category: "Residential",
    date: "Nov 2020",
  },
  {
    id: 2,
    image: "/assets/How we Work/Modern Architecture.avif",
    title: "Modern Architects Hub",
    category: "Commercial",
    date: "Mar 2021",
  },
  {
    id: 3,
    image: "/assets/How we Work/Architectures.avif",
    title: "Design Innovation Center",
    category: "Mixed Use",
    date: "Jul 2021",
  },
  {
    id: 4,
    image: "/assets/How we Work/Board Meeting.avif",
    title: "Executive Quarters",
    category: "Residential",
    date: "Dec 2021",
  },
];

const FeaturedProject: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);

  // Infinite autoplay loop (Moves every 5 seconds)
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoplay(false);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="featured" className="py-12 bg-white">
      <div className="max-w-[90%] mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-base font-medium text-gray-500 uppercase tracking-widest block mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl tracking-[-0.06em]  md:tracking-[-0.08em] font-light text-primary max-w-2xl leading-tight mb-8">
            Showcasing our dedication to innovative design and timeless
            architectural excellence.
          </h2>
          <button className="px-6 py-2.5 border border-gray-300 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Our Projects
          </button>
        </motion.div>
      </div>

      <div className="w-full relative overflow-hidden mb-16 md:mb-0 p-6 md:p-[5vh]">
        <div className="relative h-[60vh] md:h-[90vh] overflow-hidden rounded-lg">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "tween",
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 1.2,
                },
                opacity: { duration: 1.0 },
                scale: { duration: 1.2, ease: "easeInOut" },
              }}
              src={currentProject.image}
              alt={currentProject.title}
              className="absolute w-full h-full object-cover"
              onMouseEnter={() => setIsAutoplay(false)}
              onMouseLeave={() => setIsAutoplay(true)}
            />
          </AnimatePresence>
        </div>

        {/* Info & Controls Bar */}
        <div className="max-w-[90%] mx-auto mt-6 flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8">
          
          {/* Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-auto"
            >
              <h3 className="text-2xl md:text-3xl font-normal text-primary">
                {currentProject.title}
              </h3>
              <p className="text-sm text-secondary font-light mt-1 uppercase tracking-wide">
                {currentProject.category} / {currentProject.date}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls - Responsive */}
          <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-3 mt-6 md:mt-0">
            <div className="text-xs text-gray-400 font-medium mr-4">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
                aria-label="Previous project"
              >
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
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
                aria-label="Next project"
              >
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
      </div>
    </section>
  );
};

export default FeaturedProject;