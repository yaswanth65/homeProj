// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const projects = [
// //   {
// //     id: 1,
// //     image: "/assets/Stock Images/building-4884852.jpg",
// //     title: "The Celestia Residences",
// //     category: "Residential",
// //     date: "Nov 2020",
// //   },
// //   {
// //     id: 2,
// //     image: "/assets/How we Work/Modern Architecture.avif",
// //     title: "Modern Architects Hub",
// //     category: "Commercial",
// //     date: "Mar 2021",
// //   },
// //   {
// //     id: 3,
// //     image: "/assets/How we Work/Architectures.avif",
// //     title: "Design Innovation Center",
// //     category: "Mixed Use",
// //     date: "Jul 2021",
// //   },
// //   {
// //     id: 4,
// //     image: "/assets/How we Work/Board Meeting.avif",
// //     title: "Executive Quarters",
// //     category: "Residential",
// //     date: "Dec 2021",
// //   },
// // ];

// // const FeaturedProject: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const [isAutoplay, setIsAutoplay] = useState(true);
// //   const [direction, setDirection] = useState(0);

   
// //     // Animation variant for the "pop up" effect
// //     const popUpAnimation = {
// //       initial: { y: "100%" },
// //       whileInView: { y: 0 },
// //       viewport: { once: true },
// //       transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }, // Smooth ease-out
// //     };

// //   // Infinite autoplay loop (Moves every 5 seconds)
// //   useEffect(() => {
// //     if (!isAutoplay) return;

// //     const interval = setInterval(() => {
// //       setDirection(1);
// //       setCurrentIndex((prev) => (prev + 1) % projects.length);
// //     }, 5000); 

// //     return () => clearInterval(interval);
// //   }, [isAutoplay]);

// //   const goToPrev = () => {
// //     setDirection(-1);
// //     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
// //     setIsAutoplay(false);
// //   };

// //   const goToNext = () => {
// //     setDirection(1);
// //     setCurrentIndex((prev) => (prev + 1) % projects.length);
// //     setIsAutoplay(false);
// //   };

// //   const slideVariants = {
// //     enter: (dir: number) => ({
// //       x: dir > 0 ? "100%" : "-100%",
// //       opacity: 0,
// //       scale: 1.1,
// //     }),
// //     center: {
// //       zIndex: 1,
// //       x: 0,
// //       opacity: 1,
// //       scale: 1,
// //     },
// //     exit: (dir: number) => ({
// //       zIndex: 0,
// //       x: dir < 0 ? "100%" : "-100%",
// //       opacity: 0,
// //       scale: 0.95,
// //     }),
// //   };

// //   const currentProject = projects[currentIndex];

// //   return (
// //     <section id="featured" className="py-12 bg-white">
// //       <div className="max-w-[90%] mx-auto mb-12">
// //       <div className="flex flex-col items-start">
        
// //         {/* 1. Subtitle "Stage" Wrapper */}
// //         <div className="overflow-hidden mb-4">
// //           <motion.span
// //             variants={popUpAnimation}
// //             initial="initial"
// //             whileInView="whileInView"
// //             viewport={{ once: true }}
// //             className="text-base font-medium text-gray-500 uppercase tracking-widest block"
// //           >
// //             Featured Projects
// //           </motion.span>
// //         </div>

// //         {/* 2. Heading "Stage" Wrapper */}
// //         <div className="overflow-hidden mb-8 max-w-2xl">
// //           <motion.h2
// //             variants={popUpAnimation}
// //             initial="initial"
// //             whileInView="whileInView"
// //             viewport={{ once: true }}
// //             transition={{ ...popUpAnimation.transition, delay: 0.1 }}
// //             className="text-3xl md:text-4xl tracking-[-0.06em] md:tracking-[-0.08em] font-light text-primary leading-tight"
// //           >
// //             Showcasing our dedication to innovative design and timeless
// //             architectural excellence.
// //           </motion.h2>
// //         </div>

// //         {/* 3. Button "Stage" Wrapper */}
// //         <div className="overflow-hidden">
// //           <motion.button
// //             variants={popUpAnimation}
// //             initial="initial"
// //             whileInView="whileInView"
// //             viewport={{ once: true }}
// //             transition={{ ...popUpAnimation.transition, delay: 0.2 }}
// //             className="px-6 py-2.5 border border-gray-300 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
// //           >
// //             Our Projects
// //           </motion.button>
// //         </div>

// //       </div>
// //     </div>

// //       <div className="w-full relative overflow-hidden mb-16 md:mb-0 p-6 md:p-[5vh]">
// //         <div className="relative h-[60vh] md:h-[90vh] overflow-hidden rounded-lg">
// //           <AnimatePresence initial={false} custom={direction} mode="wait">
// //             <motion.img
// //               key={currentIndex}
// //               custom={direction}
// //               variants={slideVariants}
// //               initial="enter"
// //               animate="center"
// //               exit="exit"
// //               transition={{
// //                 x: {
// //                   type: "tween",
// //                   ease: [0.25, 0.1, 0.25, 1],
// //                   duration: 1.2,
// //                 },
// //                 opacity: { duration: 1.0 },
// //                 scale: { duration: 1.2, ease: "easeInOut" },
// //               }}
// //               src={currentProject.image}
// //               alt={currentProject.title}
// //               className="absolute w-full h-full object-cover"
// //               onMouseEnter={() => setIsAutoplay(false)}
// //               onMouseLeave={() => setIsAutoplay(true)}
// //             />
// //           </AnimatePresence>
// //         </div>

// //         {/* Info & Controls Bar */}
// //         <div className="max-w-[90%] mx-auto mt-6 flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8">
          
// //           {/* Project Details */}
// //           <AnimatePresence mode="wait">
// //             <motion.div
// //               key={`text-${currentIndex}`}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.8, ease: "easeOut" }}
// //               className="w-full md:w-auto"
// //             >
// //               <h3 className="text-2xl md:text-3xl font-normal text-primary">
// //                 {currentProject.title}
// //               </h3>
// //               <p className="text-sm text-secondary font-light mt-1 uppercase tracking-wide">
// //                 {currentProject.category} / {currentProject.date}
// //               </p>
// //             </motion.div>
// //           </AnimatePresence>

// //           {/* Navigation Controls - Responsive */}
// //           <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-3 mt-6 md:mt-0">
// //             <div className="text-xs text-gray-400 font-medium mr-4">
// //               {String(currentIndex + 1).padStart(2, "0")} /{" "}
// //               {String(projects.length).padStart(2, "0")}
// //             </div>
            
// //             <div className="flex gap-3">
// //               <button
// //                 onClick={goToPrev}
// //                 className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
// //                 aria-label="Previous project"
// //               >
// //                 <svg
// //                   width="24"
// //                   height="24"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   className="group-hover:stroke-white"
// //                 >
// //                   <path d="M15 18l-6-6 6-6" />
// //                 </svg>
// //               </button>
// //               <button
// //                 onClick={goToNext}
// //                 className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
// //                 aria-label="Next project"
// //               >
// //                 <svg
// //                   width="24"
// //                   height="24"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   className="group-hover:stroke-white"
// //                 >
// //                   <path d="M9 18l6-6-6-6" />
// //                 </svg>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FeaturedProject;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const projects = [
//   {
//     id: 1,
//     image: "/assets/Stock Images/building-4884852.jpg",
//     title: "The Celestia Residences",
//     category: "Residential",
//     date: "Nov 2020",
//   },
//   {
//     id: 2,
//     image: "/assets/How we Work/Modern Architecture.avif",
//     title: "Modern Architects Hub",
//     category: "Commercial",
//     date: "Mar 2021",
//   },
//   {
//     id: 3,
//     image: "/assets/How we Work/Architectures.avif",
//     title: "Design Innovation Center",
//     category: "Mixed Use",
//     date: "Jul 2021",
//   },
//   {
//     id: 4,
//     image: "/assets/How we Work/Board Meeting.avif",
//     title: "Executive Quarters",
//     category: "Residential",
//     date: "Dec 2021",
//   },
// ];

// const FeaturedProject: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoplay, setIsAutoplay] = useState(true);
//   const [direction, setDirection] = useState(0);

//   // Animation variants
//   // 1. For the text elements (standard pop-up)
//   const textPopUp = {
//     hidden: { y: "100%" },
//     visible: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
//   };

//   // 2. For the carousel container (needs to be distinct to ensure propagation works)
//   const carouselContainerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2, // optional delay
//       },
//     },
//   };

//   const carouselChildVariants = {
//     hidden: { y: "100%" },
//     visible: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
//   };

//   // Infinite autoplay loop
//   useEffect(() => {
//     if (!isAutoplay) return;
//     const interval = setInterval(() => {
//       setDirection(1);
//       setCurrentIndex((prev) => (prev + 1) % projects.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoplay]);

//   const goToPrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//     setIsAutoplay(false);
//   };

//   const goToNext = () => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//     setIsAutoplay(false);
//   };

//   // Internal Slide Animation for images
//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 1.1,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (dir: number) => ({
//       zIndex: 0,
//       x: dir < 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 0.95,
//     }),
//   };

//   const currentProject = projects[currentIndex];

//   return (
//     <section id="featured" className="py-24 bg-white">
//       <div className="max-w-[90%] mx-auto mb-12">
//         <div className="flex flex-col items-start">
//           {/* 1. Subtitle */}
//           <div className="overflow-hidden mb-4">
//             <motion.span
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={textPopUp}
//               className="text-xs md:text-base font-medium text-gray-500 uppercase tracking-widest block"
//             >
//               Featured Projects
//             </motion.span>
//           </div>

//           {/* 2. Heading */}
//           <div className="overflow-hidden  mb-8 max-w-2xl">
//             <motion.h2
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               variants={textPopUp}
//               className="text-xl md:text-4xl tracking-[-0.06em] md:tracking-[-0.08em] font-light text-primary leading-tight"
//             >
//               Showcasing our dedication to innovative design and timeless
//               architectural excellence.
//             </motion.h2>
//           </div>

//           {/* 3. Button */}
//           <div className="overflow-hidden">
//             <motion.button
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//               variants={textPopUp}
//               className="px-6 py-2.5 border border-gray-300 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
//             >
//               Our Projects
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* FIXED CAROUSEL SECTION:
//         The trigger (whileInView) is now on the Wrapper.
//         The animation (variants) is on the Child.
//       */}
//       <motion.div
//         className="w-full overflow-hidden"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the wrapper is visible
//         variants={carouselContainerVariants}
//       >
//         <motion.div
//           variants={carouselChildVariants}
//           className="w-full relative overflow-hidden mb-16 md:mb-0 p-6 md:p-[5vh]"
//         >
//           <div className="relative h-[60vh] md:h-[90vh] overflow-hidden rounded-lg">
//             <AnimatePresence initial={false} custom={direction} mode="wait">
//               <motion.img
//                 key={currentIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: {
//                     type: "tween",
//                     ease: [0.25, 0.1, 0.25, 1],
//                     duration: 1.2,
//                   },
//                   opacity: { duration: 1.0 },
//                   scale: { duration: 1.2, ease: "easeInOut" },
//                 }}
//                 src={currentProject.image}
//                 alt={currentProject.title}
//                 className="absolute w-full h-full object-cover"
//                 onMouseEnter={() => setIsAutoplay(false)}
//                 onMouseLeave={() => setIsAutoplay(true)}
//               />
//             </AnimatePresence>
//           </div>

//           {/* Info & Controls Bar */}
//           <div className="max-w-[90%] mx-auto mt-6 flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`text-${currentIndex}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className="w-full md:w-auto"
//               >
//                 <h3 className="text-xl md:text-3xl font-normal text-primary">
//                   {currentProject.title}
//                 </h3>
//                 <p className="text-xs text-secondary font-light mt-1 uppercase tracking-wide">
//                   {currentProject.category} / {currentProject.date}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

           
//           </div>
//           <div className="flex w-full md:w-auto items-end justify-between md:justify-start" >
//           <div className="flex w-full md:w-auto items-center justify-between md:justify-start gap-3 mt-6 md:mt-0">
//               <div className="text-xs text-gray-400 font-medium mr-4">
//                 {String(currentIndex + 1).padStart(2, "0")} /{" "}
//                 {String(projects.length).padStart(2, "0")}
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={goToPrev}
//                   className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                     className="group-hover:stroke-white"
//                   >
//                     <path d="M15 18l-6-6 6-6" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={goToNext}
//                   className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
//                 >
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                     className="group-hover:stroke-white"
//                   >
//                     <path d="M9 18l6-6-6-6" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default FeaturedProject;

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

  // Animation variants
  const textPopUp = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  const carouselContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const carouselChildVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  };

  // Infinite autoplay loop
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

  // Internal Slide Animation for images
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
    <section id="featured" className="py-24 bg-white">
      <div className="max-w-[90%] mx-auto mb-12">
        <div className="flex flex-col items-start">
          {/* 1. Subtitle */}
          <div className="overflow-hidden mb-4">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textPopUp}
              className="text-xs md:text-base font-medium text-gray-500 uppercase tracking-widest block"
            >
              Featured Projects
            </motion.span>
          </div>

          {/* 2. Heading */}
          <div className="overflow-hidden mb-8 max-w-2xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              variants={textPopUp}
              className="text-xl md:text-4xl tracking-[-0.06em] md:tracking-[-0.08em] font-light text-primary leading-tight"
            >
              Showcasing our dedication to innovative design and timeless
              architectural excellence.
            </motion.h2>
          </div>

          {/* 3. Button */}
          <div className="overflow-hidden">
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variants={textPopUp}
              className="px-6 py-2.5 border border-gray-300 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Our Projects
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div
        className="w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={carouselContainerVariants}
      >
        <motion.div
          variants={carouselChildVariants}
          className="w-full relative overflow-hidden mb-16 md:mb-0 p-6 md:p-[5vh]"
        >
          {/* Main Image Area */}
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

          {/* Info & Controls Bar Container */}
          <div className="max-w-[90%] mx-auto mt-6">
            
            {/* ROW 1: Project Details + Horizontal Line */}
            <div className="border-b border-gray-200 pb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full"
                >
                  <h3 className="text-xl md:text-3xl font-normal text-primary">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs text-secondary font-light mt-1 uppercase tracking-wide">
                    {currentProject.category} / {currentProject.date}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ROW 2: Navigation Controls (Below Line, Aligned Right) */}
            <div className="flex justify-end pt-6">
              <div className="flex items-center gap-6">
                
                {/* Counter */}
                <div className="text-xs text-gray-400 font-medium">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={goToPrev}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors group"
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;