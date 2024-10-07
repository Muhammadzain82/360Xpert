"use client";
import React, { useState } from "react";
import Image from "next/image";

const Grid = () => {
  const [hoverStates, setHoverStates] = useState({
    dms: false,
    eagle: false,
    ctc: false,
    wisayah: false,
    hassana: false,
    stc: false,
    bussma: false,
    bykea: false,
  });

  const handleMouseEnter = (icon: string) => {
    setHoverStates((prevState) => ({ ...prevState, [icon]: true }));
  };

  const handleMouseLeave = (icon: string) => {
    setHoverStates((prevState) => ({ ...prevState, [icon]: false }));
  };

  return (
    <div className="container relative z-40 mx-auto  mt-16 px-6">
      <h1 className="w-[80%] mx-auto text-center text-5xl font-medium mb-2 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
        Mastering Advanced <span className="text-red-600">Expertise</span>
      </h1>
      <p className="text-xs mb-16 text-center text-white font-['Clash_Display']">
        Becoming an Expert Through Advanced Skills and Knowledge
      </p>
      <div className="flex flex-wrap justify-center mx-auto  md:w-[90%] xl:shadow-small-blue">
        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-r border-b border-[#3C3C3C] lg:w-1/4 lg:border-r lg:border-b"
          onMouseEnter={() => handleMouseEnter("dms")}
          onMouseLeave={() => handleMouseLeave("dms")}
        >
          <div>
            <Image
              src={hoverStates.dms ? "/active-dms.png" : "/inactive-dms.png"}
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-b border-[#3C3C3C] lg:w-1/4 lg:border-b"
          onMouseEnter={() => handleMouseEnter("eagle")}
          onMouseLeave={() => handleMouseLeave("eagle")}
        >
          <div>
            <Image
              src={
                hoverStates.eagle ? "/active-eagle.png" : "/inactive-eagle.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-b border-[#3C3C3C] lg:w-1/4 md:border-l-0 lg:border-l"
          onMouseEnter={() => handleMouseEnter("ctc")}
          onMouseLeave={() => handleMouseLeave("ctc")}
        >
          <div>
            <Image
              src={hoverStates.ctc ? "/active-ctc.png" : "/inactive-ctc.png"}
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-l border-b border-[#3C3C3C] lg:w-1/4 lg:border-l"
          onMouseEnter={() => handleMouseEnter("wisayah")}
          onMouseLeave={() => handleMouseLeave("wisayah")}
        >
          <div>
            <Image
              src={
                hoverStates.wisayah
                  ? "/active-wisayah.png"
                  : "/inactive-wisayah.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-r border-t border-[#3C3C3C] lg:w-1/4 lg:border-r lg:border-t"
          onMouseEnter={() => handleMouseEnter("hassana")}
          onMouseLeave={() => handleMouseLeave("hassana")}
        >
          <div>
            <Image
              src={
                hoverStates.hassana
                  ? "/active-hassana.png"
                  : "/inactive-hassana.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-[#3C3C3C] lg:w-1/4"
          onMouseEnter={() => handleMouseEnter("stc")}
          onMouseLeave={() => handleMouseLeave("stc")}
        >
          <div>
            <Image
              src={hoverStates.stc ? "/active-stc.png" : "/inactive-stc.png"}
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-t border-r border-[#3C3C3C] lg:w-1/4 lg:border-l lg:border-r lg:border-t md:border-l-0 md:border-r-0"
          onMouseEnter={() => handleMouseEnter("bussma")}
          onMouseLeave={() => handleMouseLeave("bussma")}
        >
          <div>
            <Image
              src={
                hoverStates.bussma
                  ? "/active-bussma.png"
                  : "/inactive-bussma.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>

        <a
          href=""
          className="block w-1/2 py-6 px-2 text-center border-l border-t border-[#3C3C3C] lg:w-1/4 lg:border-l lg:border-t"
          onMouseEnter={() => handleMouseEnter("bykea")}
          onMouseLeave={() => handleMouseLeave("bykea")}
        >
          <div>
            <Image
              src={
                hoverStates.bykea ? "/active-bykea.png" : "/inactive-bykea.png"
              }
              alt="Ecommerce Icon"
              className="block mx-auto"
              width={100}
              height={100}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Grid;
