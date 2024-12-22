'use client'
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AOS from "aos"
import "aos/dist/aos.css"

const testimonials = [
  {
    name: "Michael Moran",
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
      <div className="text-center mb-16 space-y-2">
        <h1 className="text-6xl font-bold text-white">
          Head From <span className="text-[#E31E24]">Our Clients</span>
        </h1>
        <p className="text-gray-400 text-md font-light  ">
          Discover how our solutions have made a difference through <br/>
          the words of those who knows us best
        </p>
      </div>
      
      <div className="relative w-full max-w-[1200px] h-[300px] mx-auto">
        {testimonials.map((testimonial, index) => {
          let offset = index - activeIndex
          if (offset < -1) offset += testimonials.length
          if (offset > 1) offset -= testimonials.length

          return (
            <div
              key={index}
              data-aos="fade-up"
              className="absolute top-1/2 left-1/2 w-full max-w-[400px] transition-all duration-500 ease-in-out"
              style={{
                transform: `translate(-50%, -50%) translateX(calc(${offset * 100}% + ${offset * 24}px)) scale(${
                  index === activeIndex ? 1 : 0.8
                })`,
                opacity: Math.abs(offset) > 1 ? 0 : index === activeIndex ? 1 : 0.5,
                zIndex: index === activeIndex ? 20 : 10,
              }}
            >
              <div className="bg-gradient-to-b from-[#181815] to-[#181815] rounded-lg border border-[#2A2A2A] p-6 shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-3">
                  <h2 className="text-white text-lg font-medium">{testimonial.name}</h2>
                  <span className="bg-[#E31E24] text-white px-3 py-1 rounded-sm text-xs">
                    {testimonial.title}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

