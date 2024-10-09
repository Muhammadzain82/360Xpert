'use client'
import Navbar from "./components/Navbar";
import XlogoBG from "./components/XlogoBG";
import Scroll from "./components/Scroll";
import Wording from "./components/Wording";
import Carousel from "@/app/components/Carousel";
import Footer from "./components/Footer";
import TechAndTools from "./components/TechAndTools";
import ChatBot from "./components/chatBot";

export default function Home() {


  return (
    <div className="overflow-x-hidden">
      <ChatBot/>
      <Navbar />
      <XlogoBG/>
      <div className="bg-[#181815] relative">
      <TechAndTools />
      <Scroll />
      <Wording />
      <Scroll />
      <Carousel />
      <Footer /> 
       </div>
    </div>
  );
}
