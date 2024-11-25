"use client";
import Image from "next/image";
import { useState } from "react";
import {useRouter} from 'next/navigation'
import Link from "next/link";

const jobs = [
  {
    title: "Software Engineer",
    description:
      "We are looking for a mid-level Software Engineer to join our team.",
  },
  {
    title: "Backend Developer",
    description:
      "We are looking for a mid-level Backend Developer to join our team.",
  },
  {
    title: "UI/UX Designer",
    description:
      "We are looking for a mid-level UI/UX Designer to join our team.",
  },
  {
    title: "Full Stack Developer",
    description:
      "We are looking for a mid-level Full Stack Developer to join our team.",
  },
  {
    title: "Project Manager",
    description:
      "We are looking for a mid-level Project Manager to join our team.",
  },
];

export default function JobListings() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const router = useRouter();

  return (
    <div className="relative bg-[#181815] text-white overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-4">
       
       <div className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-50">
            <Image
              src="/right.png"
              alt="Wave background"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom" }}
              className="bg-no-repeat"
            />
          </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border-b border-gray-700 pb-4 sm:pb-6 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-['Clash_Display'] font-medium items-center text-xl sm:text-2xl mb-1">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2 font-['Clash_Display']">
                  {job.description}
                </p>
                <div className="space-x-1 sm:space-x-2">
                  <span className="bg-red-900 text-white px-2 sm:px-3 py-1 rounded-sm text-xs font-['Clash_Display']">
                    Full Time
                  </span>
                  <span className="bg-red-900 text-white px-2 sm:px-3 py-1 rounded-sm text-xs font-['Clash_Display']">
                    On Site
                  </span>
                </div>
              </div>
              <button onClick={()=>router.push('/CareersForm')}  className="text-white relative z-[10000] bg-red-900 px-1 flex items-center mt-6 font-['Clash_Display'] font-medium text-xl sm:text-base">
               Apply
                <Image
                  src="/arrow-right.png"
                  alt="Apply"
                  width={20}
                  height={20}
                  className="ml-1"
                />
              </button>
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src="/coding.png"
                alt="Coding"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
