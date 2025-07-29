import React from "react";
import { Monitor, Users, GraduationCap } from "lucide-react";
import StatCard from "../ StatCard";
import CoursesSection from "../CoursesSection";
import CourseCardCarousel from "../CourseCardCarousel";
import FeedbackSection from "./FeedBack";
import Footer from "../Footer";

const Landing2 = () => {
  // Stats data to be displayed in cards
  const statsData = [
    {
      count: "10K",
      label: "Online Courses",
      icon: Monitor,
      bg: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      count: "500K",
      label: "Students Enrolled",
      icon: Users,
      bg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      count: "1K+",
      label: "Expert Mentors",
      icon: GraduationCap,
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      count: "100+",
      label: "Certifications Offered",
      // No icon provided — will render default fallback in StatCard
      bg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <>
      {/* Stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-8 justify-items-center py-8">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            count={stat.count}
            label={stat.label}
            bg={stat.bg}
            iconColor={stat.iconColor}
          />
        ))}
      </div>

      {/* Full-width banner with centered heading */}
      <div className="w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Most Popular Courses
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Choose from hundreds of courses from specialist organizations
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        <CoursesSection />
      </div>

      {/* Banner */}
      <div className="w-full">
        <section className="bg-[#01A2BE] rounded-xl px-10 py-14 relative overflow-hidden text-white max-w-6xl mx-auto my-10">
          {/* Background circles */}
          <div className="absolute w-40 h-40 bg-white/10 rounded-full top-4 left-4"></div>
          <div className="absolute w-4 h-4 bg-white/20 rounded-full top-6 left-1/3"></div>
          <div className="absolute w-6 h-6 bg-white/20 rounded-full bottom-6 right-1/3"></div>

          {/* Content */}
          <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Become an Instructor!
              </h2>
              <p className="max-w-xl text-white/90">
                Speedily say has suitable disposal add boy. On forth doubt miles
                of child. Exercise joy man children rejoiced. Yet uncommonly his
                ten who diminution astonished.
              </p>
            </div>

            <button className="mt-6 md:mt-0 px-6 py-2 border-2 border-yellow-300 text-yellow-300 font-semibold rounded-md hover:bg-yellow-300 hover:text-[#01A2BE] transition">
              Start Teaching Today
            </button>
          </div>
        </section>
      </div>

      {/* Full-width banner with centered heading */}
      <div className="w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Trending Courses
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Check out most 🔥 courses in the market
            </p>
          </div>
        </div>
      </div>

      <div>
        <CourseCardCarousel />
      </div>

      <FeedbackSection />
    </>
  );
};

export default Landing2;
