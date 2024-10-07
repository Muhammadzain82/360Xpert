"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Deployment",
    description:
      "Experience the smooth deployment of your software solutio with precision. We minimize downtime and ensure a seamless transition, delivering a fully functional and optimized product ready to positively impact your business.",
  },
  {
    id: 2,
    title: "Testing",
    description:
      "At 360XpertSolutions, we ensure top-notch quality through rigourous testing. We thoroughly check every line of code for functionality, security, and performance with unit, integration, and acceptance tests, delivering a reliable, error-free solution.",
  },
  {
    id: 3,
    title: "Maintenance",
    description:
      "Our committment continues after deployment. In the Maintainance phase. we proactively monitor and update your software to keep it performing at its best. We adapt to changing needs and technological advancements, ensuring your satisfaction and support at all times.",
  },
  {
    id: 4,
    title: "Development",
    description:
      "Our skilled developers bring your vision to life using agile methodologies. We break the projects into sprints for steady progress, maintaining high quality and transparency. You stay involved throughout ensuring the final product align with your goals.",
  },
  {
    id: 5,
    title: "System Design",
    description:
      "Our experts design a scable system tailored to your needs, using advanced technologies to create a blueprint that ensures current functionality and future growth.",
  },
  {
    id: 6,
    title: "Requirements",
    description:
      "At 360XpertSolutions, we begin by understanding your goals in detail, ensuring a solid foundation for successful software development through close collaboration and clear communication",
  },
];

export default function CardStack() {
  const [activeCards, setActiveCards] = useState(cards);
  const [swiping, setSwiping] = useState<number | null>(null);
  const [swipedCards, setSwipedCards] = useState<typeof cards>([]);

  useEffect(() => {
    if (activeCards.length === 0) {
      setActiveCards(cards);
    }
  }, [activeCards]);

  const handleSwipe = (id: number) => {
    setSwiping(id);
    setTimeout(() => {
      setActiveCards((prev) => {
        const swipedCard = prev.find((card) => card.id === id);
        const newCards = prev.filter((card) => card.id !== id);
        if (swipedCard) {
          setSwipedCards((prevSwiped) => [...prevSwiped, swipedCard]);
        }
        return newCards.length === 0 ? cards : newCards;
      });
      setSwiping(null);
    }, 300);
  };

  const handleBringBack = () => {
    if (swipedCards.length > 0) {
      const lastSwipedCard = swipedCards[swipedCards.length - 1];
      setActiveCards((prev) => [lastSwipedCard, ...prev]);
      setSwipedCards((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div
      id="card-component"
      className={`flex w-full h-full max-w-6xl mt-28 px-4 sm:px-6 lg:px-8 mx-auto overflow-x-hidden `}
    >
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-8  text-white font-['Clash_Display'] px-2 ml-6 sm:px-0">
          Our Proven <span className="text-red-600">Process</span>
        </h2>
        <div data-aos="fade-right" className="relative h-[450px] sm:h-[200px] md:h-[400px] w-[90%]">
          <AnimatePresence>
            {activeCards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`absolute inset-0 bg-[#181815] rounded-lg rounded-tr-[50px] sm:rounded-tr-[75px] md:rounded-tr-[100px] p-4 sm:p-6 md:p-8 shadow-lg border border-[#3C3C3C] ${
                  index === activeCards.length - 1 ? "z-20" : "z-10"
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: swiping === card.id ? 0 : 1,
                  x: swiping === card.id ? "120%" : `${index * 2}%`,
                  scale: index === activeCards.length - 1 ? 1 : 0.95,
                }}
                exit={{ opacity: 0, x: "120%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.42, 0, 0.58, 1],
                }}
                onClick={
                  index === activeCards.length - 1 ? handleBringBack : undefined
                }
              >
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative -mt-10">
                      <Image
                        src="/X.png"
                        alt="X icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl mt-8 font-semibold font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999999]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg mt-8 text-white opacity-80 pr-4 sm:pr-8 md:pr-12 leading-tight sm:leading-snug md:leading-normal font-['Clash_Display'] w-full max-w-[80%] break-words md:w-[60%]">
                    {card.description}
                  </p>

                  {index === activeCards.length - 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSwipe(card.id);
                      }}
                      className="absolute bottom-4 right-4 bg-[#3C3C3C] rounded-full border border-inherit p-2 shadow-lg hover:bg-[#3C3C3C] transition-colors"
                      aria-label="Next card"
                      disabled={swiping !== null}
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative">
                        <Image
                          src="/arrow.png"
                          alt="Arrow icon"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
