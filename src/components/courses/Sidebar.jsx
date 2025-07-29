import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const categories = [
  "Business English",
  "English Conversation",
  "Electrical Engineering",
  "Automotive Engineering",
  "Human Resources",
  "Quality Management",
  "Educational Psychology",
  "Digital Marketing",
  "Project Management",
  "Supply Chain Management",
];

const types = ["Live Courses", "Self-Paced", "Hybrid", "Recorded"];

const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-base font-medium text-gray-800 py-3 hover:text-purple-700 transition"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-full min-h-screen md:w-80 bg-white p-5 rounded-2xl shadow-xl space-y-8">
      {/* Search */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition">
            <FaSearch size={12} />
          </button>
        </div>
      </div>

      {/* Categories Accordion */}
      <AccordionSection title="Course Categories">
        <div className="space-y-3 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
          {categories.map((cat, index) => (
            <label
              key={index}
              className="flex items-center justify-between text-sm text-gray-700 hover:bg-purple-50 px-2 py-1 rounded-md transition"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-600" />
                {cat}
              </div>
              <span className="text-xs text-gray-500">(200)</span>
            </label>
          ))}
        </div>
      </AccordionSection>

      {/* Types Accordion */}
      <AccordionSection title="Course Types">
        <div className="space-y-3">
          {types.map((type, index) => (
            <label
              key={index}
              className="flex items-center justify-between text-sm text-gray-700 hover:bg-purple-50 px-2 py-1 rounded-md transition"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-purple-600" />
                {type}
              </div>
              <span className="text-xs text-gray-500">(150)</span>
            </label>
          ))}
        </div>
      </AccordionSection>
    </aside>
  );
};

export default Sidebar;
