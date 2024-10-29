"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Component() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex justify-center items-center h-[350px] bg-[#181815] overflow-hidden mt-16 transition-opacity duration-700 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-[90%] sm:w-[500px] h-[250px] sm:h-[300px]">
        
        {/* Left Card */}
        <div
          className={`absolute left-0 top-0 w-[80%] sm:w-[300px] h-full bg-white bg-opacity-10 border border-white/10 shadow-xl rounded-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 ease-in-out ${
            isInView ? "-translate-x-[90%] rotate-12" : "translate-x-0"
          }`}
        >
          <Image
            src="/standard.png"
            alt="Tech illustration 1"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Right Card */}
        <div
          className={`absolute right-0 top-0 w-[80%] sm:w-[300px] h-full bg-white bg-opacity-10 border border-white/10 shadow-xl rounded-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 ease-in-out ${
            isInView ? "translate-x-[90%] -rotate-12" : "translate-x-0"
          }`}
        >
          <Image
            src="/quality.png"
            alt="Tech illustration 2"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Center Text */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-0 transition-opacity duration-500 ease-in-out"
          style={{ opacity: isInView ? 1 : 0 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display']">
            Smart
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300] font-['Clash_Display']">
            Inventory
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display']">
            Management
          </h1>
        </div>
      </div>
    </div>
  );
}
