import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CourseCard2 from "./CourseCard2"; 
import { courses } from "../config/courseSection";


const CourseCardCarousel = () => {
  return (
    <div className="relative group px-4 py-6 w-full max-w-screen-xl mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.2}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard2 course={course} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* GLOBAL STYLE OVERRIDE FOR SWIPER NAVIGATION */}
      <style global jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 9999px !important;
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          color: white !important;
          transition: opacity 0.3s ease;
          opacity: 0;
        }

        .group:hover .swiper-button-prev,
        .group:hover .swiper-button-next {
          opacity: 1;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default CourseCardCarousel;
