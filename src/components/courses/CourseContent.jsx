import React from "react";
import { ChevronDown } from "lucide-react";

const CourseContent = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
      <ul className="space-y-4">
        {[
          "Intro to Course and Histudy",
          "World-Wide Start",
          "Course Fundamentals",
          "Skill Building",
          "Course Description",
        ].map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-xl hover:shadow"
          >
            <span>{item}</span>
            <ChevronDown className="text-gray-500" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseContent;
