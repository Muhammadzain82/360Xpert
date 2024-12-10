// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const Grid = () => {
//   const [hoverStates, setHoverStates] = useState({
//     dms: false,
//     eagle: false,
//     ctc: false,
//     wisayah: false,
//     hassana: false,
//     stc: false,
//     bussma: false,
//     bykea: false,
//   });

//   const handleMouseEnter = (icon: string) => {
//     setHoverStates((prevState) => ({ ...prevState, [icon]: true }));
//   };

//   const handleMouseLeave = (icon: string) => {
//     setHoverStates((prevState) => ({ ...prevState, [icon]: false }));
//   };

//   return (
//     <div className="container relative z-40 mx-auto  mt-16 px-6">
//       <h1 className="w-[80%] mx-auto text-center text-5xl font-medium mb-2 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
//         Mastering Advanced <span className="text-red-600">Expertise</span>
//       </h1>
//       <p className="text-xs mb-16 text-center text-white font-['Clash_Display']">
//         Becoming an Expert Through Advanced Skills and Knowledge
//       </p>
//       <div className="flex flex-wrap justify-center mx-auto md:w-[90%] xl:shadow-small-blue">
//   {[
//     { id: "dms", activeSrc: "/active-dms.png", inactiveSrc: "/inactive-dms.png" },
//     { id: "eagle", activeSrc: "/active-eagle.png", inactiveSrc: "/inactive-eagle.png" },
//     { id: "ctc", activeSrc: "/active-ctc.png", inactiveSrc: "/inactive-ctc.png" },
//     { id: "wisayah", activeSrc: "/active-wisayah.png", inactiveSrc: "/inactive-wisayah.png" },
//     { id: "hassana", activeSrc: "/active-hassana.png", inactiveSrc: "/inactive-hassana.png" },
//     { id: "stc", activeSrc: "/active-stc.png", inactiveSrc: "/inactive-stc.png" },
//     { id: "bussma", activeSrc: "/active-bussma.png", inactiveSrc: "/inactive-bussma.png" },
//     { id: "bykea", activeSrc: "/active-bykea.png", inactiveSrc: "/inactive-bykea.png" },
//   ].map((item, index) => (
//     <a
//       key={index}
//       href=""
//       className={`block w-1/2 py-6 px-2 text-center border-[#3C3C3C]
//         ${index % 4 !== 0 ? "border-l" : ""}
//         ${index < 4 ? "border-b" : ""}
//         lg:w-1/4`}
//       onMouseEnter={() => handleMouseEnter(item.id)}
//       onMouseLeave={() => handleMouseLeave(item.id)}
//     >
//       {/* Active image for small devices */}
//       <div className="block sm:hidden">
//         <Image
//           src={item.activeSrc}
//           alt={`${item.id} Icon`}
//           className="block mx-auto"
//           width={100}
//           height={100}
//         />
//       </div>
//       {/* Conditional images for medium and larger devices */}
//       <div className="hidden sm:block">
//         <Image
//           src={hoverStates[item.id] ? item.activeSrc : item.inactiveSrc}
//           alt={`${item.id} Icon`}
//           className="block mx-auto"
//           width={100}
//           height={100}
//         />
//       </div>
//     </a>
//   ))}
// </div>
//     </div>
//   );
// };

// export default Grid;

"use client";
import React, { useState } from "react";
import Image from "next/image";

type IconId =
  | "dms"
  | "eagle"
  | "ctc"
  | "wisayah"
  | "hassana"
  | "stc"
  | "bussma"
  | "bykea";

const Grid = () => {
  const [hoverStates, setHoverStates] = useState<Record<IconId, boolean>>({
    dms: false,
    eagle: false,
    ctc: false,
    wisayah: false,
    hassana: false,
    stc: false,
    bussma: false,
    bykea: false,
  });

  const handleMouseEnter = (icon: IconId) => {
    setHoverStates((prevState) => ({ ...prevState, [icon]: true }));
  };

  const handleMouseLeave = (icon: IconId) => {
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
      <div className="flex flex-wrap justify-center mx-auto md:w-[90%] xl:shadow-small-blue">
        {[
          { id: "dms", activeSrc: "/active-dms.png", inactiveSrc: "/inactive-dms.png" },
          { id: "eagle", activeSrc: "/active-eagle.png", inactiveSrc: "/inactive-eagle.png" },
          { id: "ctc", activeSrc: "/active-ctc.png", inactiveSrc: "/inactive-ctc.png" },
          { id: "wisayah", activeSrc: "/active-wisayah.png", inactiveSrc: "/inactive-wisayah.png" },
          { id: "hassana", activeSrc: "/active-hassana.png", inactiveSrc: "/inactive-hassana.png" },
          { id: "stc", activeSrc: "/active-stc.png", inactiveSrc: "/inactive-stc.png" },
          { id: "bussma", activeSrc: "/active-bussma.png", inactiveSrc: "/inactive-bussma.png" },
          { id: "bykea", activeSrc: "/active-bykea.png", inactiveSrc: "/inactive-bykea.png" },
        ].map((item, index) => (
          <a
            key={index}
            href=""
            className={`block w-1/2 py-6 px-2 text-center border-[#3C3C3C]
              ${index % 4 !== 0 ? "border-l" : ""}
              ${index < 4 ? "border-b" : ""}
              lg:w-1/4`}
            onMouseEnter={() => handleMouseEnter(item.id as IconId)}
            onMouseLeave={() => handleMouseLeave(item.id as IconId)}
          >
            {/* Active image for small devices */}
            <div className="block sm:hidden">
              <Image
                src={item.activeSrc}
                alt={`${item.id} Icon`}
                className="block mx-auto"
                width={100}
                height={100}
              />
            </div>
            {/* Conditional images for medium and larger devices */}
            <div className="hidden sm:block">
              <Image
                src={hoverStates[item.id as IconId] ? item.activeSrc : item.inactiveSrc}
                alt={`${item.id} Icon`}
                className="block mx-auto"
                width={100}
                height={100}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Grid;
