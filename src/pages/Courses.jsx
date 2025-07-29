import React from 'react';
import CourseCard3 from '../components/CourseCard3';
import CourseFilterBar from '../components/courses/CourseFilterBar';

const Courses = () => {
  const dummyCourses = [
    {
      id: 1,
      title: 'React for Beginners',
      instructor: 'John Doe',
      image: '/images/react-course.jpg',
      rating: 4.5,
      duration: '10h 30m',
    },
    {
      id: 2,
      title: 'Advanced Node.js',
      instructor: 'Jane Smith',
      image: '/images/node-course.jpg',
      rating: 4.7,
      duration: '8h 15m',
    },
    {
      id: 3,
      title: 'Fullstack MERN Bootcamp',
      instructor: 'Alex Johnson',
      image: '/images/mern-course.jpg',
      rating: 4.9,
      duration: '15h 00m',
    },
    {
      id: 1,
      title: 'React for Beginners',
      instructor: 'John Doe',
      image: '/images/react-course.jpg',
      rating: 4.5,
      duration: '10h 30m',
    },
    {
      id: 2,
      title: 'Advanced Node.js',
      instructor: 'Jane Smith',
      image: '/images/node-course.jpg',
      rating: 4.7,
      duration: '8h 15m',
    },
    {
      id: 3,
      title: 'Fullstack MERN Bootcamp',
      instructor: 'Alex Johnson',
      image: '/images/mern-course.jpg',
      rating: 4.9,
      duration: '15h 00m',
    },
    {
      id: 1,
      title: 'React for Beginners',
      instructor: 'John Doe',
      image: '/images/react-course.jpg',
      rating: 4.5,
      duration: '10h 30m',
    },
    {
      id: 2,
      title: 'Advanced Node.js',
      instructor: 'Jane Smith',
      image: '/images/node-course.jpg',
      rating: 4.7,
      duration: '8h 15m',
    },
    {
      id: 3,
      title: 'Fullstack MERN Bootcamp',
      instructor: 'Alex Johnson',
      image: '/images/mern-course.jpg',
      rating: 4.9,
      duration: '15h 00m',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50  px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dummyCourses.map((course) => (
          <CourseCard3 key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
