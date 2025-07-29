import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const dummyCourseData = [
  {
    title: "Intro to Course and Histudy",
    description:
      "Get a comprehensive overview of the course structure, learning goals, and outcomes. Meet your instructor and learn how to navigate through the platform for a smooth learning experience.",
  },
  {
    title: "World-Wide Start",
    description:
      "Begin by setting up your development environment. Learn about cross-platform tools, global best practices, and prepare your system for real-world software development tasks.Begin by setting up your development environment. Learn about cross-platform tools, global best practices, and prepare your system for real-world software development tasks.Begin by setting up your development environment. Learn about cross-platform tools, global best practices, and prepare your system for real-world software development tasks.Begin by setting up your development environment. Learn about cross-platform tools, global best practices, and prepare your system for real-world software development tasks.",
  },
  {
    title: "Course Fundamentals",
    description:
      "Understand the core principles of programming including variables, data types, control flow, loops, functions, and error handling. Build your first basic programs with guided practice.",
  },
  {
    title: "Skill Building",
    description:
      "Dive into practical projects and coding challenges. Build interactive applications, work with APIs, and implement responsive features. Enhance your debugging and version control skills using Git and GitHub.",
  },
  {
    title: "Course Description",
    description:
      "Recap everything you've learned throughout the course. Explore additional learning resources, advanced topics, and career guidance. Get access to community forums, certifications, and final project submission.",
  },
];


const CourseContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
      <ul className="space-y-4">
        {dummyCourseData.map((item, idx) => (
          <li key={idx} className="bg-gray-50 p-4 rounded-xl hover:shadow transition">
            <div
              onClick={() => toggleDescription(idx)}
              className="flex justify-between items-center cursor-pointer"
            >
              <span>{item.title}</span>
              <ChevronDown className="text-gray-500" />
            </div>
            {openIndex === idx && (
              <p className="mt-2 text-sm text-gray-700">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseContent;
