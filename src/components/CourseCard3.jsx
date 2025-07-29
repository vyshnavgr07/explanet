import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const CourseCard3 = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[300px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
    >
      {/* Image */}
      <img
        src="/dd1.png"
        alt="Course"
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Badge and Category */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1 text-purple-600 font-medium">
            🔟 10x Lesson
          </span>
          <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs font-semibold">
            Development
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800">
          Career to build for the pro level
        </h3>

        {/* Author & Students */}
        <div className="flex items-center justify-between text-sm pt-2">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-800 text-sm leading-none">
                Robert Fox
              </p>
              <p className="text-blue-500 text-xs">Python Developer</p>
            </div>
          </div>
          <span className="text-xs text-gray-500 font-medium">50+ Students</span>
        </div>

        {/* Rating & Button */}
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
            <span className="text-gray-600 text-xs ml-1">(10)</span>
          </div>
          <button className="text-sm text-purple-600 font-semibold hover:underline">
            Learn More+
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard3;
