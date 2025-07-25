import React from "react";
import { FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";

const CourseCard = ({
  title,
  desc,
  tag,
  rating,
  time,
  lectures,
  image,
  isLiked,
}) => {
  return (
    <div className="w-[265px] rounded-2xl overflow-hidden shadow border border-gray-100 bg-white">
      {/* Header */}
      <div className="relative h-60 bg-gradient-to-t from-orange-200 via-yellow-100 to-orange-100 flex items-center justify-center overflow-hidden rounded-t-md">
  {/* Image */}
  <img
    src={image}
    alt={title}
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay elements (Tag and Like Icon) */}
  <div className="absolute top-2 left-2 bg-purple-100 text-purple-600 text-[11px] font-semibold px-2 py-[2px] rounded-full z-10">
    {tag}
  </div>
  <button className="absolute top-2 right-2 text-gray-400 hover:text-pink-500 text-sm z-10">
    {isLiked ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
  </button>
</div>


      {/* Content */}
      <div className="p-4 pb-3">
        <h3 className="text-sm font-semibold leading-snug mb-1 text-gray-800">
          {title}
        </h3>
        <p className="text-[11px] text-gray-500 mb-3 leading-snug">{desc}</p>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm mb-3">
          <span className="text-base">★★★★☆</span>
          <span className="text-gray-600 text-sm ml-2">{rating}</span>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-xs text-gray-600 border-t pt-3">
          <div className="flex items-center gap-1">
            <FaRegClock className="text-red-500 text-sm" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MdPlayLesson className="text-orange-500 text-sm" />
            <span>{lectures}</span>
          </div>
        </div>
      </div>













    </div>
  );
};

export default CourseCard;
