'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cards = [
  {
    title: "Our Vision",
    description: "Making advanced IT solutions accessible to firms at the avant-garde and in performance-rich businesses."
  },
  {
    title: "Our Mission",
    description: "To empower businesses through innovative technology solutions that drive growth and success in the digital age."
  }
]

export default function VisionSection() {
  const [activeCard, setActiveCard] = useState(0)

  const toggleCard = () => {
    setActiveCard((prev) => (prev === 0 ? 1 : 0))
  }

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
          <div 
            className="relative w-full max-w-sm cursor-pointer"
            onClick={toggleCard}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ 
                  y: 20,
                  opacity: 0,
                }}
                animate={{ 
                  y: 0,
                  opacity: 1,
                }}
                exit={{ 
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="w-full p-6 bg-gradient-to-t from-[#333333] to-[#222222] rounded-lg border border-[#3C3C3C]"
              >
                <h3 className="font-['Clash_Display'] text-lg sm:text-xl font-normal text-white mb-3 text-center">
                  {cards[activeCard].title}
                </h3>
                <p className="font-['Clash_Display'] text-sm text-gray-200 leading-relaxed text-center">
                  {cards[activeCard].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

