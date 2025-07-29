import React from "react";

const InstructorInfo = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
      <div className="flex items-center gap-4">
        <img
          src="/pro.jpg"
          alt="Instructor"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold">B.M. Rokekul Islam</h3>
          <p className="text-sm text-gray-600">Senior Python Instructor</p>
        </div>
      </div>
    </section>
  );
};

export default InstructorInfo;
