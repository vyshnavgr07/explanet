import React from "react";
import { List, LayoutGrid } from "lucide-react";

const CourseFilterBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border rounded-lg px-4 py-3 bg-white shadow-sm mb-6">
      {/* Left Section - Course Count */}
      <div className="text-sm md:text-base">
        We found <span className="text-red-500 font-semibold">200</span> courses for you
      </div>

      {/* Right Section - Sort & View Toggle */}
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        <span className="text-sm text-gray-600">Sort By:</span>

        <select className="border rounded px-2 py-1 text-sm outline-none">
          <option value="default">Default</option>
          <option value="latest">Latest</option>
          <option value="popular">Most Popular</option>
        </select>

        <div className="flex gap-1">
          <button className="p-2 rounded border text-gray-600 hover:bg-gray-100">
            <LayoutGrid size={18} />
          </button>
          <button className="p-2 rounded border text-gray-600 hover:bg-gray-100">
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFilterBar;
