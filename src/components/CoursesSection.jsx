import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { cardData } from "../config/courseSection";

const tabs = ["Web Design", "Development", "Graphic Design", "Marketing", "Finance"];

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("Web Design");

  return (
    <div className="py-10 px-4">
      {/* Tabs */}
      <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center mb-8 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition text-sm sm:text-base ${
              activeTab === tab
                ? "bg-text-Primary text-white"
                : "text-gray-600 hover:text-text-Primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-items-center lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cardData
          .filter((card) => card.category === activeTab)
          .map((card, index) => (
            <CourseCard key={index} {...card} />
          ))}
      </div>
    </div>
  );
};

export default CoursesSection;
