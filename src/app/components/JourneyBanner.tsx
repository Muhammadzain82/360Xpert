'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JourneyBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of animation in milliseconds
      once: true,      // Animation will only occur once as the element scrolls into view
    });
  }, []);

  return (
    <div className="w-full flex justify-center py-8 md:py-12">
      <div className="p-6 sm:p-10 md:p-14 relative overflow-hidden mx-auto w-full max-w-4xl md:max-w-6xl h-auto md:h-[500px]">
        <div
          className="bg-gradient-to-t from-[#333333] to-[#222222] rounded-lg p-6 sm:p-8 md:p-12 flex flex-col md:flex-row justify-between items-center h-full w-full"
          data-aos="fade-up"
        >
          <div
            className="max-w-full md:max-w-3xl ml-0 md:ml-12 text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="font-['Clash_Display'] font-medium text-5xl md:text-6xl lg:text-6xl mt-4 md:mt-6">
              <span className="text-[#D43833]">Ready</span>{" "}
              <span className="bg-gradient-to-r from-white to-[#999999] text-transparent bg-clip-text">
                To Begin
              </span>
            </h2>
            <h2 className="font-['Clash_Display'] font-medium text-5xl md:text-6xl lg:text-6xl mt-2">
              <span className="bg-gradient-to-r from-white to-[#999999] text-transparent bg-clip-text">
                The Journey
              </span>
            </h2>
            <a
              href="#"
              className="mt-8 md:mt-10 bg-gradient-to-r from-[#D43833] to-[#650300] hover:from-[#650300] hover:to-[#D43833] text-white px-6 sm:px-8 md:px-10 rounded-full inline-block text-base sm:text-lg md:text-xl lg:text-2xl font-['Clash_Display']"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Start the Conversation
            </a>
          </div>
          <div
            className="flex flex-col items-center md:items-end mt-8 md:mt-0 mr-0 md:mr-12"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image
              src="/X.png"
              alt="Journey Arrow"
              width={100}  // Increased width
              height={100} // Increased height
              className="mb-6"
            />
            <p className="text-[#999999] text-center md:text-right max-w-sm md:max-w-md text-base font-['Clash_Display']">
              Join us as we embark on a path to innovation <br /> and success.
              Together, we&#39;ll <br /> turn your vision into reality, creating
              <br /> solutions that stand out in the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
