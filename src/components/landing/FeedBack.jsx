import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Carolyn Ortiz",
    feedback:
      "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing.",
    rating: 4.5
  },
  {
    name: "Jacob Lee",
    feedback:
      "Extremely helpful platform. The mentors guided me step-by-step through complex concepts with ease.",
    rating: 5
  },
  {
    name: "Angela Smith",
    feedback:
      "I feel more confident in my field after learning from the top mentors here.",
    rating: 4
  },
  {
    name: "Carolyn Ortiz",
    feedback:
      "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing.",
    rating: 4.5
  },
  {
    name: "Jacob Lee",
    feedback:
      "Extremely helpful platform. The mentors guided me step-by-step through complex concepts with ease.",
    rating: 5
  },
  {
    name: "Angela Smith",
    feedback:
      "I feel more confident in my field after learning from the top mentors here.",
    rating: 4
  }
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400 text-yellow-400 opacity-50'
            : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

const FeedbackSection = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6 md:px-12 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
        >
          What our students say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Learn how our mentors have made a difference in the learning journeys of students worldwide. Here’s some of the heartfelt feedback we’ve received.
        </motion.p>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mb-6">
          <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition">
            <span className="sr-only">Previous</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition">
            <span className="sr-only">Next</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden h-full">
                <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-pink-200 to-transparent opacity-20 rounded-full blur-3xl" />

                <div className="relative z-10 h-full flex flex-col items-center justify-between">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg mb-6">
                    {testimonial.name.charAt(0)}
                  </div>

                  <p className="italic text-gray-700 mb-6 text-base md:text-lg leading-relaxed relative text-center">
                    <span className="text-5xl font-serif absolute -left-4 -top-2 text-gray-300">“</span>
                    {testimonial.feedback}
                    <span className="text-5xl font-serif absolute -right-4 -bottom-2 text-gray-300">”</span>
                  </p>

                  <div>
                    <StarRating rating={testimonial.rating} />
                    <p className="font-semibold mt-2">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackSection;
