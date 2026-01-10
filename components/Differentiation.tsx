import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccordionItem } from "../types";


const items: AccordionItem[] = [
  {
    id: "1",
    number: "0001",
    title: "Exclusivity",
    content:
      "We handpick only the finest properties that meet our high standards of luxury and elegance.",
  },
  {
    id: "2",
    number: "0002",
    title: "Integrity",
    content:
      "Transparency and honesty are at the core of our business. We build trust through clear communication.",
  },
  {
    id: "3",
    number: "0003",
    title: "Client Centric",
    content:
      "Your vision is our blueprint. We tailor every aspect of our service to meet your specific needs.",
  },
  {
    id: "4",
    number: "0004",
    title: "Innovation",
    content:
      "Embracing modern technology and sustainable practices to create homes for the future.",
  },
  {
    id: "5",
    number: "0005",
    title: "Excellence",
    content:
      "We settle for nothing less than perfection in craftsmanship, design, and delivery.",
  },
];

const Differentiation: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="why-haven" className="   mt-10 bg-white">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-base text-secondary uppercase tracking-[-0.06em] md:tracking-[-0.08em] tracking-widest mb-4">
                Why Luxe Haven Realty
              </h2>
              <p className="text-3xl md:text-4xl tracking-[-0.06em] md:tracking-[-0.08em] font-normal text-primary leading-tight mb-12">
                what makes us different <br /> (and totally awesome)
              </p>
            </motion.div>


          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7">
            <div className="w-full border-t border-gray-200">
              {items.map((item) => (
                <div key={item.id} className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setOpenId(openId === item.id ? null : item.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {item.number}
                      </span>
                      <span className="text-xl md:text-2xl font-normal text-primary group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span
                      className={`text-xl font-light text-primary transition-transform duration-300 ${
                        openId === item.id ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-0 md:pl-20 pr-4 md:pr-12 text-sm md:text-base text-secondary font-light leading-relaxed italic">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;
