"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#181815] text-white py-12 overflow-hidden m-16">
      <div className="max-w-7xl mx-auto px-2 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:mr-0 lg:pl-0 lg:pr-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Clash_Display'] break-words font-medium mt-12">
            Showcase{" "}
            <span className="text-red-500">
              of <br />
            </span>{" "}
            <span className="text-red-500"> Our Expertise</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-400 font-light text-sm md:text-base font-['Clash_Display']">
            Discover how 360XpertSolutions transforms businesses with
            innovative, AI-powered solutions. Explore our portfolio to see
            successful projects <br /> that enhance customer engagement and
            streamline operations across various industries. <br />
            Let our expertise drive your business forward.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start lg:justify-start lg:w-2/3 space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden">
          <div
            data-aos="fade-left"
            className="relative w-full sm:w-72 md:w-80 lg:w-96 h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[37%] lg:group-hover:w-[37%] flex-shrink-0"
          >
            <Image
              src="/image.jpg"
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              className="opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-lg md:text-xl font-['Clash_Display']">
              Eagle-I
              </h2>
              <p className="text-xs md:text-sm mt-2 font-['Clash_Display']">
              Eagle-I is a comprehensive fleet management solution through 
              which fleet owners can manage their assets and drivers with ease.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-left"
            className="relative w-full sm:w-72 md:w-80 lg:w-48 h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[25%] lg:group-hover:w-[25%] flex-shrink-0"
          >
            <Image
              src="/image3.jpg"
              alt="Project 2"
              layout="fill"
              objectFit="cover"
              className="opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-lg md:text-xl font-['Clash_Display']">
                Hassana
              </h2>
              <p className="text-xs md:text-sm mt-2 font-['Clash_Display']">
              Hassana is the investment manager of the General Organization 
              for Social Insurance (GOSI), Saudi Arabia’s social 
              security and pension fund.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="relative w-full sm:w-72 md:w-80 lg:w-48 h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[25%] lg:group-hover:w-[25%] flex-shrink-0"
          >
            <Image
              src="/image2.jpg"
              alt="Project 3"
              layout="fill"
              objectFit="cover"
              className="opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
              <h2 className="text-lg md:text-xl font-['Clash_Display']">
                The Metro Guide
              </h2>
              <p className="text-xs md:text-sm mt-2 font-['Clash_Display']">
              The Metro Guide App is your go-to solution for effortless 
              navigation through metro systems. Designed for efficiency 
              and ease, the app offers comprehensive features including 
              detailed route planning, real-time updates on train 
              schedules, and fare information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
