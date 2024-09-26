import React from "react";

export default function VisionSection() {
  return (
    <section className="bg-[#181815] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="font-['Clash_Display'] text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
            Our <span className="text-red-500">Vision</span> & <br />
            Core Values
          </h2>
          <p className="font-['Clash_Display'] text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl w-[80%]">
            Our guiding principles—commitment to innovation, respect for
            integrity, and dedication to excellence—shape our decisions and fuel
            our creativity. By staying true to these values, we deliver
            outstanding results and contribute to a better future for our
            clients, partners, and communities.
          </p>
        </div>

        <div className="flex items-center justify-center w-[50%] mx-auto">
          <div className=" items-center w-full max-w-sm p-6 bg-gradient-to-t from-[#333333] to-[#222222] rounded-lg border border-[#3C3C3C] h-[100%]">
            <h3 className="font-['Clash_Display'] text-lg sm:text-xl font-normal text-white mb-3 text-center">
              Our Vision
            </h3>
            <p className="font-['Clash_Display'] text-sm text-gray-200 leading-relaxed text-center">
              Making advanced IT solutions accessible to firms at the
              avant-garde and in performance-rich businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
