import React from "react";
import Image from "next/image";
import WaveForm from "./WaveForm";

const Wording = () => {
  return (
    <>
    <div className=" relative max-w-3xl mx-auto text-center p-5 sm:p-6 md:p-8 ">
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium leading-tight font-['Clash_Display'] mx-0">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D43833] to-[#650300] font-['Clash_Display']">
          Become
        </span>{" "}
        Part <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display']">
          of the Circle
        </span>
      </h1>
      <div className="  inset-0 z-0 w-full h-full bg-cover bg-center  ">
          {/* <Image
            src="/Waveform.png"
            alt="Wave background"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            className="  bg-no-repeat lg:scale-150"
          /> */}
          {/* <WaveForm/> */}
        </div>

      <a
        href=""
        className="mt-8 relative bg-gradient-to-r from-[#D43833] to-[#650300] hover:from-[#650300] hover:to-[#D43833] text-white font-normal py-2 px-4 sm:px-6 md:px-8 rounded-full inline-block text-sm sm:text-base md:text-lg lg:text-xl font-['Clash_Display']"
        >
        Start the Conversation
      </a>

    </div>

    <div className="absolute  w-[100%] " >
          <WaveForm/>
      </div>


        </>
  );
};

export default Wording;
