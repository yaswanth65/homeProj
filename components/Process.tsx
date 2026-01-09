import React from "react";
import { motion } from "framer-motion";

// Types
type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
};

const steps: ProcessStep[] = [
  {
    id: "01",
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your vision, goals, and the lifestyle you want the space to reflect.",
    imageUrl: "/assets/How we Work/Board Meeting.avif",
  },
  {
    id: "02",
    number: "02",
    title: "Concept Development",
    description:
      "Ideas take form through sketches, spatial planning, and early design explorations.",
    imageUrl: "/assets/How we Work/Architecture Sketches.avif",
  },
  {
    id: "03",
    number: "03",
    title: "Planning & Preparation",
    description:
      "From materials and drawings to timelines and budgets, every detail is carefully defined.",
    imageUrl: "/assets/How we Work/Architectures.avif",
  },
  {
    id: "04",
    number: "04",
    title: "Execution & Delivery",
    description:
      "We bring the vision to life with precision, quality craftsmanship, and attention to detail.",
    imageUrl: "/assets/How we Work/Modern Architecture.avif",
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-white mb-20 py-16 pt-24">
      {/* Container:
        - Mobile: Auto height, Flex Column
        - Desktop (lg): Fixed height (80vh), Flex Row, Overflow Hidden to contain the scroll area
      */}
      <div className="mx-auto max-w-[1400px] px-[30px] flex flex-col lg:flex-row gap-20 lg:h-[80vh] lg:overflow-hidden">
        
        {/* LEFT – Static
          - Desktop: Takes full height of container, centers content vertically
        */}
        <div className="lg:w-[32%] flex flex-col justify-center self-start lg:h-full">
          <div className="flex flex-col">
            <span className="block text-base tracking-[0.25em] uppercase text-neutral-500 mb-4">
              How We Work
            </span>

            <h2 className="text-[32px] leading-[1.25] font-normal tracking-[-0.08em] text-neutral-900 max-w-sm">
              Simplifying luxury —
              <br />
              from vision to reality.
            </h2>
          </div>
        </div>

        {/* RIGHT – Scrollable
          - Desktop: Takes full height, enables Y-axis scrolling, hides scrollbar for clean look
        */}
        <div className="lg:w-[68%] flex flex-col gap-20 items-end lg:overflow-y-auto lg:h-full lg:pb-20 lg:pr-4 no-scrollbar">
          {/* Style to hide scrollbar in Webkit/Firefox */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full md:w-[85%] aspect-[4/5] lg:aspect-[3/2] rounded-xl overflow-hidden flex-shrink-0"
            >
              {/* Image */}
              <img
                src={step.imageUrl}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Bottom glass panel */}
              <div className="absolute inset-x-0 bottom-0">
                <div
                  className="
                    backdrop-blur-sm
                    bg-white/20
                    border-t border-white/30
                    px-8 pt-6 pb-8
                    rounded-t-xl
                  "
                >
                  {/* Step row */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs uppercase tracking-widest text-white/80">
                      Step
                    </span>
                    <span className="text-5xl font-light text-white">
                      {step.number}
                    </span>

                    <div className="flex-1 h-px bg-white/40 ml-4" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-normal text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-white/85 max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;