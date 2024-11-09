import Navbar from "@/app/components/Navbar";
import HeroAbout from "@/app/components/HeroAbout";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";
import VisionSection from "@/app/components/visionSection";
import TextComponent from "@/app/components/textComponent";  // Ensure this matches the exact casing
import Banner from "@/app/components/Banner";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <VisionSection />
      <TextComponent />
      <Card />
      <Banner />
      <Footer />
    </div>
  );
}
