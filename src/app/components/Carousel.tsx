// "use client";
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from 'framer-motion';

// const Carousel = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="bg-[#181815] text-white py-12 overflow-hidden m-16">
//       <div className="max-w-7xl mx-auto px-2 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
//         <div
//           data-aos="fade-right"
//           className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:mr-0 lg:pl-0 lg:pr-8"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Clash_Display'] break-words font-medium mt-12">
//             Showcase{" "}
//             <span className="text-red-500">
//               of <br />
//             </span>{" "}
//             <span className="text-red-500"> Our Expertise</span>
//           </h1>
//           <p className="mt-4 sm:mt-6 text-gray-400 font-light text-sm md:text-base font-['Clash_Display']">
//             Discover how 360XpertSolutions transforms businesses with
//             innovative, AI-powered solutions. Explore our portfolio to see
//             successful projects <br /> that enhance customer engagement and
//             streamline operations across various industries. <br />
//             Let our expertise drive your business forward.
//           </p>
//         </div>

//         <div className="flex flex-col lg:flex-row justify-start lg:justify-start lg:w-2/3 space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden">
//           <div
//             data-aos="fade-left"
//             className="relative w-full sm:w-72 md:w-80 lg:w-96 h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[37%] lg:group-hover:w-[37%] flex-shrink-0"
//           >
//             <img
//               src="/image.jpg"
//               alt="Project 1"
//               className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
//               <h2 className="text-lg md:text-xl font-['Clash_Display']">
//                 Break Time
//               </h2>
//               <p className="text-xs md:text-sm mt-2 font-['Clash_Display']">
//                 We equip healthcare providers with AI chatbots that improve
//                 patient engagement and streamline administrative tasks.
//               </p>
//             </div>
//           </div>

//           <SlidingCard />

//           <div
//             data-aos="fade-left"
//             className="relative w-full sm:w-72 md:w-80 lg:w-48 h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[25%] lg:group-hover:w-[25%] flex-shrink-0"
//           >
//             <img
//               src="/image3.jpg"
//               alt="Project 3"
//               className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//             />
//             <div className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6">
//               <h2 className="text-lg md:text-xl font-['Clash_Display']">
//                 Green Tech
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const SlidingCard = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       data-aos="fade-left"
//       className="relative w-full sm:w-72 md:w-80 lg:w-48 h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 group hover:w-[25%] lg:group-hover:w-[25%] flex-shrink-0"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img
//         src="/image2.jpg"
//         alt="Project 2"
//         className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//       />
//       <motion.div
//         className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6"
//         initial={{ x: "200%" }}
//         animate={{ x: isHovered ? 0 : "100%" }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         <h2 className="text-lg md:text-xl font-['Clash_Display'] text-white">
//           Invenr
//         </h2>
//       </motion.div>
//     </div>
//   );
// };
// export default Carousel;

// "use cslient";
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion, AnimatePresence } from 'framer-motion';

// const Carousel = () => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const [isAOSInitialized, setIsAOSInitialized] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out",
//       once: true,
//     });
//     setIsAOSInitialized(true);
//   }, []);

//   if (!isAOSInitialized) {
//     return null; // or a loading spinner
//   }

//   return (
//     <section className="bg-[#181815] text-white py-12 overflow-hidden m-16">
//       <div className="max-w-7xl mx-auto px-2 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
//         <div
//           data-aos="fade-right"
//           className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:mr-0 lg:pl-0 lg:pr-8"
//         >
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Clash_Display'] break-words font-medium mt-12">
//             Showcase{" "}
//             <span className="text-red-500">
//               of <br />
//             </span>{" "}
//             <span className="text-red-500"> Our Expertise</span>
//           </h1>
//           <p className="mt-4 sm:mt-6 text-gray-400 font-light text-sm md:text-base font-['Clash_Display']">
//             Discover how 360XpertSolutions transforms businesses with
//             innovative, AI-powered solutions. Explore our portfolio to see
//             successful projects <br /> that enhance customer engagement and
//             streamline operations across various industries. <br />
//             Let our expertise drive your business forward.
//           </p>
//         </div>

//         <motion.div 
//           className="flex flex-col lg:flex-row justify-start lg:justify-start lg:w-2/3 space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden"
//           layout
//         >
//           <CardItem
//             index={0}
//             hoveredCard={hoveredCard}
//             setHoveredCard={setHoveredCard}
//             image="/image3.jpg?height=400&width=300"
//             title="Break Time"
//             description="We equip healthcare providers with AI chatbots that improve patient engagement and streamline administrative tasks."
//           />

//           <CardItem
//             index={1}
//             hoveredCard={hoveredCard}
//             setHoveredCard={setHoveredCard}
//             image="/image2.jpg?height=400&width=300"
//             title="Invenr"
//             description="Our innovative solutions help businesses streamline their inventory management processes."
//           />

//           <CardItem
//             index={2}
//             hoveredCard={hoveredCard}
//             setHoveredCard={setHoveredCard}
//             image="/image.jpg?height=400&width=300"
//             title="Green Tech"
//             description="We develop sustainable technology solutions to help businesses reduce their environmental impact."
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// interface CardItemProps {
//   index: number;
//   hoveredCard: number | null;
//   setHoveredCard: (index: number | null) => void;
//   image: string;
//   title: string;
//   description: string;
// }

// const CardItem: React.FC<CardItemProps> = ({ index, hoveredCard, setHoveredCard, image, title, description }) => {
//   const isHovered = hoveredCard === index;
//   const isFirstCard = index === 0;

//   const getWidth = () => {
//     if (hoveredCard === null) {
//       return isFirstCard ? "37%" : "25%";
//     }
//     if (isHovered) {
//       return "37%";
//     }
//     if (isFirstCard && hoveredCard !== 0) {
//       return "25%";
//     }
//     return "19%";
//   };

//   return (
//     <motion.div
//       className="relative h-64 lg:h-96 bg-gray-800 rounded-xl overflow-hidden flex-shrink-0"
//       onMouseEnter={() => setHoveredCard(index)}
//       onMouseLeave={() => setHoveredCard(null)}
//       layout
//       style={{ width: getWidth() }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//     >
//       <img
//         src={image}
//         alt={`Project ${index + 1}`}
//         className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//       />
//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <h2 className="text-lg md:text-xl font-['Clash_Display'] text-white">
//               {title}
//             </h2>
//             <p className="text-xs md:text-sm mt-2 font-['Clash_Display'] text-white">
//               {description}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };
// export default Carousel;

"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const Carousel = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isAOSInitialized, setIsAOSInitialized] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    setIsAOSInitialized(true);
  }, []);

  if (!isAOSInitialized) {
    return null; // or a loading spinner
  }

  return (
    <section className="bg-[#181815] text-white py-8 sm:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start">
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Clash_Display'] font-medium mt-6 sm:mt-8 lg:mt-12">
              Showcase{" "}
              <span className="text-red-500">
                of <br className="hidden sm:inline" />
              </span>{" "}
              <span className="text-red-500"> Our Expertise</span>
            </h1>
            <p className="mt-3 sm:mt-4 lg:mt-6 text-gray-400 font-light text-sm sm:text-base md:text-lg font-['Clash_Display']">
              Discover how 360XpertSolutions transforms businesses with
              innovative, AI-powered solutions. Explore our portfolio to see
              successful projects that enhance customer engagement and
              streamline operations across various industries.
              Let our expertise drive your business forward.
            </p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-start w-full lg:w-2/3 space-y-4 sm:space-y-0 sm:space-x-4 overflow-x-auto pb-4 sm:pb-0"
            layout
          >
            <CardItem
              index={0}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              image="/image3.jpg"
              title="Break Time"
              description="We equip healthcare providers with AI chatbots that improve patient engagement and streamline administrative tasks."
            />

            <CardItem
              index={1}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              image="/image2.jpg"
              title="Invenr"
              description="Our innovative solutions help businesses streamline their inventory management processes."
            />

            <CardItem
              index={2}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              image="/image.jpg"
              title="Green Tech"
              description="We develop sustainable technology solutions to help businesses reduce their environmental impact."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface CardItemProps {
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
  image: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({ index, hoveredCard, setHoveredCard, image, title, description }) => {
  const isHovered = hoveredCard === index;
  const isFirstCard = index === 0;

  const getWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return "100%";
    }
    if (hoveredCard === null) {
      return isFirstCard ? "37%" : "25%";
    }
    if (isHovered) {
      return "37%";
    }
    if (isFirstCard && hoveredCard !== 0) {
      return "25%";
    }
    return "19%";
  };

  return (
    <motion.div
      className="relative h-64 sm:h-72 md:h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden flex-shrink-0"
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      layout
      style={{ width: getWidth() }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Image
        src={image}
        alt={`Project ${index + 1}`}
        width={300} // Specify a width
        height={400} // Specify a height
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
      />
      <AnimatePresence>
        {(isHovered || typeof window !== 'undefined' && window.innerWidth < 640) && (
          <motion.div
            className="absolute inset-0 bg-[#181815] bg-opacity-40 flex flex-col justify-end p-4 sm:p-5 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Clash_Display'] text-white">
              {title}
            </h2>
            <p className="text-sm sm:text-base mt-2 font-['Clash_Display'] text-white">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Carousel;


