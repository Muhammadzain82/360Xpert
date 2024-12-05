'use client'
import Image from "next/image";
import WaveForm from "./WaveForm";

export default function HeroCareers() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[#181815] text-white overflow-hidden px-4 sm:px-6 lg:px-8 mt-20">
      {/* <div className="absolute  w-full h-full mt-44">
        <WaveForm/>
      </div> */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-['Clash_Display'] font-medium text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
          Explore Career
        </h1>
        <h1 className="font-['Clash_Display'] font-medium text-5xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
          Opportunities With Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-12 text-gray-300 font-['Clash_Display']">
          We&apos; always eager to connect with talented individuals.
          <br />
          Share your resume with us and we&apos;ll be in touch!
        </p>
      </div>
    </section>
  );
}
