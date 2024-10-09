"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Threejs from "./Threejs";

export default function TextComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    // Register GSAP's ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    // Animation for #heading1
    tl.to("#heading1", {
      x: 150,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#heading1",
        start: "50% center",
        end: "bottom center",
        scrub: 2,
      },
    });

    // Animation for #heading3
    tl.to("#heading3", {
      x: -170,
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading3",
        start: "50% center",
        end: "bottom center",
        scrub: 2,
      },
    });
  }, []);

  // bg-[#181815]

  return (
    <div className="bg-[#181815] h-screen flex flex-col sm:flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* Smart */}
        <div className="absolute w-full h-full  ">
            <Threejs/>
        </div>
      
      <div className="relative sm:mb-8 md:mb-0">
        <div className="absolute inset-0 flex items-center justify-center"></div>
        <h1
          id="heading1" // Assigning ID for GSAP animation
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display'] sm:-mt-16 md:-mt-32"
        >
          Smart
        </h1>
      </div>

      {/* Seamless */}
      <div className="relative z-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300] font-['Clash_Display'] sm:-ml-8 md:-ml-16">
          Seamless
        </h1>
      </div>

      {/* Scalable */}
      <div>
        <h1
          id="heading3" // Assigning ID for GSAP animation
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display'] sm:mt-24 md:mt-48 sm:-ml-8 md:-ml-16"
        >
          Scalable
        </h1>
      </div>
    </div>
  );
}
