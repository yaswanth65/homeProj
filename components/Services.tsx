import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Architectural Design",
    tags: [
      "Site Planning",
      "Layout Design",
      "3D Visualization",
      "Rendering",
      "Construction Documentation",
      "Schematic Design Development",
      "BIM",
      "And more...",
    ],
  },
  {
    id: "02",
    title: "Interior Design & Planning",
    tags: [
      "Space Planning & Optimization",
      "Furniture & Fixture Selection",
      "Material Selection",
      "Lighting Design",
      "Art & Accessory Curation",
      "Custom Cabinetry Design",
      "Interior Landscaping",
    ],
  },
  {
    id: "03",
    title: "Consulting Services",
    tags: [
      "Site & Building Code Consultation",
      "Design & Concept Review",
      "Technical Advisory Services",
      "Cost Estimation & Budgeting",
      "Project Feasibility Consulting",
    ],
  },
  {
    id: "04",
    title: "Project Management",
    tags: [
      "Pre-Construction Planning",
      "Site Inspection & Supervision",
      "Cost Estimation",
      "Resource Allocation",
      "Timeline & Milestone Tracking",
      "Contractor & Vendor Management",
      "Final Inspection & Handover",
    ],
  },
  {
    id: "05",
    title: "Landscape Architecture",
    tags: [
      "Conceptual Site Planning",
      "Hardscape Design",
      "Planting Design",
      "Landscape Lighting Design",
      "Water Feature Design",
      "Irrigation System Planning",
      "Green Roof & Vertical Garden Design",
    ],
  },
  {
    id: "06",
    title: "3D Rendering Visualization",
    tags: [
      "Photorealistic Renderings",
      "Virtual Reality Walkthroughs",
      "360-Degree Panoramic Views",
      "Exterior & Landscape Renderings",
      "Interior 3D Renderings",
      "Conceptual Sketch Renders",
    ],
  },
  {
    id: "07",
    title: "Feasibility Studies",
    tags: [
      "Site Analysis",
      "Market Research",
      "Cost Estimation",
      "Risk Assessment",
      "Sustainability Evaluation",
      "Legal & Regulatory Analysis",
      "Resource Availability Studies",
      "Preliminary Design Review",
      "Economic Feasibility",
    ],
  },
];

const Services: React.FC = () => {
  // Optional: State if you want them to be expandable accordions later
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="w-full">
      {/* 1. Light Header Section */}
      <div className="bg-[#fffcf5] py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            {/* Small leaf/logo icon placeholder */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-neutral-800"
            >
              <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl leading-tight font-medium text-neutral-900">
            If our services don't tick all your boxes, no worries! Share your
            dream project with us, and we'll create a custom plan just for you.
          </h2>
        </div>
      </div>

      {/* 2. Dark Services List Section */}
      <div className="bg-[#1a1a1a] text-white px-6 md:px-12 pb-20 pt-10">
        <div className="max-w-[1400px] mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-t border-white/10 py-12 md:py-16 transition-colors duration-300 hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
                
                {/* Column 1: Title */}
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl md:text-2xl font-medium text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Column 2: Tags / Sub-services */}
                <div className="w-full md:w-1/2">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm md:text-base text-gray-400 font-light leading-relaxed"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 3: Action / Icon */}
                <div className="w-full md:w-1/4 flex justify-start md:justify-end mt-4 md:mt-0">
                  <button className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-gray-300 transition-colors">
                    <span>Show Details</span>
                    <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center ml-2">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

              </div>
            </div>
          ))}
          
          {/* Bottom Border for last item */}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;