// import Navbar from "@/app/components/Navbar";
import HeroBlogs from "@/app/components/HeroBlogs";
import GlassCards from "@/app/components/GlassCards";
import TechAndTools from "@/app/components/TechAndTools";
import TestimonialCards from "../components/TestimonialCards";
import JourneyBanner from "@/app/components/JourneyBanner";
// import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroBlogs />
      <GlassCards />
      <TechAndTools />
      <TestimonialCards />
      <JourneyBanner />
      {/* <Footer /> */}
    </div>
  );
}
