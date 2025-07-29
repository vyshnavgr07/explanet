import React from "react";
import Sidebar from "../components/courses/Sidebar";
import { Outlet } from "react-router-dom";
import CourseFilterBar from "../components/courses/CourseFilterBar";

const CourseLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 text-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-5 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
      Explore Courses
    </h1>
    <p className="text-base md:text-lg font-medium opacity-90">
      Learn from expert instructors and boost your skills.
    </p>
  </div>
</header>


      {/* Body: Sidebar + Main Content */}
      <div className="flex flex-1 flex-col md:flex-row px-2 mx-auto w-full mt-4  gap-4">
        {/* Sidebar */}
        <aside className="w-full md:w-80 bg-white border border-gray-200 rounded-lg  h-fit">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Filter Bar aligned with sidebar */}
          <div className="bg-white  rounded-lg ">
            <CourseFilterBar />
          </div>

          {/* Course Content */}
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
