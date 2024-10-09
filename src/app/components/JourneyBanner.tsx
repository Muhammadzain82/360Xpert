import Image from "next/image";

export default function JourneyBanner() {
  return (
    <div className="w-full flex justify-center py-6 md:py-10">
      <div className="p-4 sm:p-8 md:p-12 relative overflow-hidden mx-auto w-full max-w-3xl md:max-w-5xl h-auto md:h-[400px]">
        <div className="bg-gradient-to-t from-[#333333] to-[#222222] rounded-lg p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center h-full w-full">
          <div className="max-w-full md:max-w-2xl ml-0 md:ml-10 text-center md:text-left">
            <h2 className="font-['Clash_Display'] font-medium text-4xl md:text-5xl lg:text-5xl mt-2 md:mt-4">
              <span className="text-[#D43833]">Ready</span>{" "}
              <span className="bg-gradient-to-r from-white to-[#999999] text-transparent bg-clip-text">
                To Begin
              </span>
            </h2>
            <h2 className="font-['Clash_Display'] font-medium text-4xl md:text-5xl lg:text-5xl mt-2">
              <span className="bg-gradient-to-r from-white to-[#999999] text-transparent bg-clip-text">
                The Journey
              </span>
            </h2>
            <a
              href="#"
              className="mt-6 md:mt-8 bg-gradient-to-r from-[#D43833] to-[#650300] hover:from-[#650300] hover:to-[#D43833] text-white px-4 sm:px-6 md:px-8 rounded-full inline-block text-sm sm:text-base md:text-lg lg:text-xl font-['Clash_Display']"
            >
              Start the Conversation
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end mt-6 md:mt-0 mr-0 md:mr-10">
            <Image
              src="/X.png"
              alt="Journey Arrow"
              width={80}
              height={80}
              className="mb-4"
            />
            <p className="text-[#999999] text-center md:text-right max-w-xs text-sm font-['Clash_Display']">
              Join us as we embark on a path to innovation <br /> and success.
              Together, we&#39;ll <br /> turn your vision into reality, creating
              <br /> solutions that stand out in the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
