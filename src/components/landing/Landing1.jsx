import React from "react";
// import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Lightbulb, TrendingUp, Clock, Users } from 'lucide-react';


const HeroSection = () => {
  return (
    <>
<section
  id="home"
  className="relative overflow-hidden flex items-center py- md:py-28 lg:py-12  bg-center bg-no-repeat bg-cover "
>
  <div className="w-full max-w-[1440px] px-4 md:px-10 mx-auto ">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center ">
      {/* Left Content */}
      <div>
        <h1 className="font-semibold leading-normal tracking-wide text-4xl  mb-5">
          Join the{" "}
          <span className="relative inline-block">
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-gradient-to-tl before:from-violet-600 before:to-text-Primary relative inline-block">
              <span className="relative text-white font-bold">Revolution</span>
            </span>
          </span>{" "}
          in <br /> Experiential <span className="font-bold">Learning</span>
        </h1>

        <div className="grid sm:grid-cols-2 gap-6 text-slate-600 py-8">
          <div className="flex items-start space-x-4">
            <Lightbulb className="text-violet-600 w-6 h-6 mt-1" />
            <p className="text-lg font-medium">
              Discover the Opportunity for Experiential Learning
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <TrendingUp className="text-green-600 w-6 h-6 mt-1" />
            <p className="text-lg font-medium">
              Generate More Revenue from Existing Resources
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="text-blue-600 w-6 h-6 mt-1" />
            <p className="text-lg font-medium">
              Learn at Your Own Convenience
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <Users className="text-pink-600 w-6 h-6 mt-1" />
            <p className="text-lg font-medium">
              Acquire the People with the Right Skills
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to="/courses"
            className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#0052AA] text-white"
          >
            View Courses{" "}
            <i className="mdi mdi-arrow-right align-middle ml-1"></i>
          </Link>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex justify-center items-center ">
        <div className="relative z-10">
          <img
            src="/home.png"
            alt="Hero"
            className="w-[280px] sm:w-[360px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-auto mx-auto"
          />

          {/* Online Course Card */}
          <div className="absolute md:top-36 top-28 md:-right-10 -right-5 p-4 rounded-lg shadow-md bg-white w-52 z-20">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-14 w-14 bg-violet-600/5 text-violet-600 rounded-full mr-3">
                <i className="mdi mdi-monitor text-xl"></i>
              </div>
              <div>
                <span className="text-slate-400">Online Course</span>
                <p className="text-xl font-bold">100+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Circle BG */}
        <div className="absolute w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-gradient-to-tl from-violet-600 to-text-Primary bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 rounded-full shadow-md shadow-violet-600/10"></div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default HeroSection;
