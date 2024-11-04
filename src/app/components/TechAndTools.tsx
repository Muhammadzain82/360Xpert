"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

const techCategories = [
  {
    name: "Artificial Intelligence",
    tools: [
      { name: "Scikit-learn", logo: "/Scikit.png" },
      { name: "OpenAI", logo: "/gpt.png" },
      { name: "PyTorch", logo: "/pytorch.png" },
      { name: "Pandas", logo: "/pandas.png" },
      { name: "Tensor-Flow", logo: "/tensorflow.png" },
      { name: "SciPy", logo: "/scipy.png" },
      { name: "NumPy", logo: "/numpy.png" },
    ],
    video: "/Ai.mp4",
  },
  
];

export default function TechAndTools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const resetActiveIndex = useCallback(() => {
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    let interval:any = null;
    if (inView) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % techCategories.length);
      }, 5000);
    } else {
      resetActiveIndex();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [inView, resetActiveIndex]);

  const renderTools = (category:typeof techCategories[number]) => (
    <div
      className={`grid ${category.name === "Full Stack Development" || category.name === "Cloud & DevOps"
          ? "grid-cols-2 sm:grid-cols-3 h-[400px]"
          : "grid-cols-2 sm:grid-cols-3"
        } gap-4 bg-[#181815]`}
      data-aos="fade-up"
    >
      {category.tools.map((tool) => (
        <div
          key={tool.name}
          className="rounded-lg p-2 md:p-4 flex items-center space-x-3 border border-[#3C3C3C] bg-[#181815]"
          data-aos="zoom-in"
        >
          <Image
            src={tool.logo}
            alt={tool.name}
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span className="text-xs md:text-sm">{tool.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#181815] relative text-white p-4 md:p-8 mt-32">
      <div className="max-w-7xl mx-auto bg-[#181815]">
        <div className="text-center bg-[#181815] mb-8 md:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]"
            data-aos="fade-down"
          >
            Tech and Tools <span className="text-red-600">We Use</span>
          </h1>
          <p
            className="text-gray-200 mx-auto max-w-xl md:max-w-2xl font-['Clash_Display'] leading-snug md:leading-normal font-medium mb-10 sm:mb-16"
            data-aos="fade-down"
          >
            Our developers use the latest technologies and frameworks to build
            powerful solutions with sleek, user-friendly designs.
          </p>
        </div>

        <div
          className="flex justify-center items-center font-['Clash_Display'] relative min-h-[600px]"
          ref={ref}
          data-aos="fade-up"
        >
          <AnimatePresence mode="wait">
            {techCategories.map(
              (category, index) =>
                index === activeIndex && (
                  <motion.div
                    key={category.name}
                    className="absolute w-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.5,
                    }}
                  >
                    <div
                      className="bg-[#1E1E1E] rounded-tr-[40px] sm:rounded-tr-[80px] md:rounded-tr-[150px] overflow-hidden shadow-2xl w-full max-w-[85%] mx-auto"
                      data-aos="fade-up"
                    >
                      <div className="flex flex-col md:flex-row h-full border border-[#3C3C3C]">
                        <div className="p-4 md:p-8 md:w-1/2">
                          <h2
                            className="text-2xl md:text-4xl mb-4 md:mb-8 mt-4 md:mt-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999]"
                            data-aos="fade-left"
                          >
                            {category.name}
                          </h2>
                          {renderTools(category)}
                        </div>
                        <div
                          className="md:w-1/2 relative flex items-center justify-center"
                          data-aos="fade-right"
                        >
                          <div className="w-full h-full relative overflow-hidden rounded-tr-[40px] sm:rounded-tr-[80px] md:rounded-tr-[150px]">
                            {category.video.endsWith(".mp4") ? (
                              <video
                                className="object-cover w-full h-full"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                <source src={category.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <Image
                                src={category.video}
                                alt={category.name}
                                layout="fill"
                                objectFit="cover"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}