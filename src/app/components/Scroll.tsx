"use client";

import React, { useState, useEffect } from "react";

export default function Scroll() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => prevPosition - 1);
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[40px] sm:h-[45px] md:h-[50px] lg:h-[60px] bg-[#181815] mt-20 mb-20">
      <div
        className="absolute whitespace-nowrap flex"
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform 0.02s linear",
        }}
      >
        {Array(1000)
          .fill("")
          .map((_, index) => (
            <span
              key={index}
              className="text-[4vw] sm:text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-['Clash_Display'] px-4 leading-[40px] sm:leading-[45px] md:leading-[50px] lg:leading-[60px]"
            >
              What&apos;s holding you back? &nbsp; &nbsp; What&apos;s holding
              you back? &nbsp; &nbsp; What&apos;s holding you back?
            </span>
          ))}
      </div>
    </div>
  );
}
