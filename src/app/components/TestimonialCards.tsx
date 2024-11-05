'use client'

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const testimonials = [
  {
    name: "Micheal Moran",
    title: "Technical Director",
    text: "The 360Xpert team is great, I totally recommend them for a job well done, with a proactive attitude and organized approach. I am impressed by their dedication and abilities. Will surely rehire. Thank you guys!",
  },
  {
    name: "Sarah Johnson",
    title: "Project Manager",
    text: "Working with 360Xpert was seamless. Their expertise and attention to detail brought our project to life. Highly recommend them for any development needs!",
  },
  {
    name: "David Brown",
    title: "CEO",
    text: "360Xpert's dedication and work ethic are remarkable. They truly understand client needs and go the extra mile. Would hire them again without a doubt.",
  },
]

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[600px] bg-[#181815] p-4 relative overflow-hidden">
      <div className="relative w-full max-w-[1200px] h-[400px] mx-auto">
        {testimonials.map((testimonial, index) => {
          // Calculate the position offset based on the active index
          let offset = index - activeIndex
          if (offset < -1) offset += testimonials.length
          if (offset > 1) offset -= testimonials.length

          return (
            <div
              key={index}
              data-aos="fade-up"
              className="absolute top-1/2 left-1/2 w-full max-w-[450px] transition-all duration-500 ease-in-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 100}%) scale(${
                  index === activeIndex ? 1 : 0.8
                })`,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                zIndex: index === activeIndex ? 20 : 10,
              }}
            >
              <div className="bg-gradient-to-t from-[#333333] to-[#222222] rounded-lg border border-[#3C3C3C] p-8 shadow-xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <h2 className="font-['Clash_Display'] text-white text-xl font-medium">{testimonial.name}</h2>
                  <span className="bg-[#8B0000] text-white px-3 py-1 rounded-sm text-xs font-['Clash_Display']">
                    {testimonial.title}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed font-['Clash_Display'] font-light">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-gray-300 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-gray-300 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}