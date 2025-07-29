import React from "react";

const CourseHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-white py-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Text Content on Left */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 max-w-2xl">
              The Complete Histudy 2023: From Zero To Expert!
            </h1>
            <p className="text-lg opacity-90 mb-6 max-w-xl">
              Master Python by building 100 projects in 100 days. Learn Data Science, 
              Automation, Build Websites, Games, and Apps — all in one comprehensive course.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
              <button className="bg-white text-teal-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition duration-200">
                Get Started
              </button>
              <div className="text-sm text-white flex flex-wrap items-center gap-3">
                <span>⭐ 4.8</span>
                <span>• 94,000+ ratings</span>
                <span>• 680,123 students</span>
              </div>
            </div>
          </div>

          {/* Image on Right */}
          <div className="md:w-1/3 w-full flex justify-center">
            <img
              src="/dd1.png"
              alt="Course Preview"
              className="rounded-xl shadow-xl border-4 border-white w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
