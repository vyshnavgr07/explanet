import React from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiVideoThin } from "react-icons/pi";

const CourseCard2 = ({
  image = "/dd1.png",
  tag1 = "Development",
  tag2 = "All level",
  title = "Angular – The Complete Guide (2021 Edition)",
  rating = 4,
  reviews = 3500,
  students = 4500,
  duration = "12h 45m",
  lectures = 65,
  instructor = "Billy Vasquez",
  instructorImage,
  price = 255,
  isLiked = false,
}) => {
  return (
    <div className="w-full max-w-sm md:w-[400px] md:h-[450px] rounded-xl border shadow-sm bg-white overflow-hidden flex flex-col">
      {/* Top Image */}
      <div className="relative h-60 bg-gradient-to-t from-orange-200 via-yellow-100 to-orange-100">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Tags */}
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-purple-100 text-purple-600 text-[11px] font-semibold px-2 py-[2px] rounded-full">
            {tag1}
          </span>
          <span className="bg-black text-white text-[11px] font-semibold px-2 py-[2px] rounded-full">
            {tag2}
          </span>
        </div>
        {/* Like Icon */}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 text-sm">
          {isLiked ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
          <FaStar />
          <span className="text-gray-700 ml-1">{rating}</span>
          <span className="text-gray-500 text-xs">({reviews})</span>
          <span className="text-gray-400 text-xs ml-auto">{students} Students</span>
        </div>

        {/* Info Row */}
        <div className="flex justify-between text-xs text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <MdOutlineAccessTime className="text-red-400" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <PiVideoThin className="text-yellow-500" />
            {lectures} lectures
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center gap-2">
            <img
              src={instructorImage || "/dd1.png"}
              alt={instructor}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm md:text-base text-gray-800">{instructor}</span>
          </div>
          <span className="text-green-600 font-bold text-sm">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard2;
