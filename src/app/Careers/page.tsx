import Navbar from "@/app/components/Navbar";
import HeroCareers from "@/app/components/HeroCareers";
import JobListings from "@/app/components/JobListings";
import WordingCareer from "@/app/components/WordingCareer";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroCareers />
      <JobListings />
      <WordingCareer />
      <Footer />
    </div>
  );
}
