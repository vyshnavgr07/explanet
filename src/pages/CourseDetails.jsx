import React from "react";
import CourseHeader from "../components/courses/CourseHeader";
import CourseContent from "../components/courses/CourseContent";
import InstructorInfo from "../components/courses/InstructorInfo";
import Sidebar1 from "../components/courses/Sidebar1";


const CourseDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <CourseHeader />
      <div className="max-w-7xl mx-auto px-4 lg:flex gap-6 py-10">
        <div className="w-full lg:w-2/3 space-y-6">
          <CourseContent />
          <InstructorInfo />
        </div>
        <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
          <Sidebar1 />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
