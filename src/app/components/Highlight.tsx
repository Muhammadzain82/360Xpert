import React from "react";

const Highlight = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#181815] text-white px-6 py-12 md:px-12 lg:px-24 mb-8 mt-8">
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl gap-10 ml-12 flex-grow">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-400 font-['Clash_Display']">
          <span className="">
            <span className="text-red-600"> Crafting </span>
            the
          </span>{" "}
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-300 font-['Clash_Display']">
          Future, One
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-300 font-['Clash_Display']">
          Solution at a Time
        </h1>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-400 max-w-md font-['Clash_Display']">
          We’re tech enthusiasts solving real-world problems with cutting-edge
          innovation. Today, we build apps, websites, and IoT solutions.
          Tomorrow, who knows—robots or even intergalactic portals. At{" "}
          <span className="font-bold text-white">360XpertSolutions</span>, the
          future is limitless.
        </p>
      </div>
    </section>
  );
};

export default Highlight;
