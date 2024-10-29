import React from "react";

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
];

export default function Component() {
  return (
    <div className="flex justify-center h-[500px] items-center bg-[#181815] p-4">
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:-ml-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-[300px] sm:w-[390px] h-[300px] sm:h-[380px] bg-gradient-to-t from-[#333333] to-[#222222] rounded-lg border border-[#3C3C3C] p-4 sm:p-6 flex flex-col justify-center items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 ${
              index === 1 ? "z-10 scale-105 sm:scale-110" : "z-0"
            }`}
            style={{ cursor: "pointer" }}
          >
            <h2 className="font-['Clash_Display'] text-white text-lg sm:text-xl font-medium mb-2">
              {testimonial.name}
            </h2>
            <span className="bg-red-900 text-white px-2 sm:px-3 py-1 rounded-sm text-xs mb-4 font-['Clash_Display']">
              {testimonial.title}
            </span>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed overflow-hidden font-['Clash_Display'] font-light mt-2">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}