'use client'
import Navbar from "./components/Navbar";
import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";
import Highlight from "./components/Highlight";
import XlogoBG from "./components/XlogoBG";
import Grid from "@/app/components/Grid";
import Scroll from "./components/Scroll";
import Wording from "./components/Wording";
import Carousel from "@/app/components/Carousel";
import Footer from "./components/Footer";
import TechAndTools from "./components/TechAndTools";
// import Threejs from "./components/Threejs";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from '../../style/Home.module.css'; // Assuming you are using a CSS module for styles

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  return (
    <div>
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
