
import Navbar from "@/app/components/Navbar";
import HeroCareers from "@/app/components/HeroCareers";
import CareerForm from "@/app/components/CareersForms";
import Footer from "../components/Footer";


export default function paged() {
  return (
    <div>
         <Navbar/>
         <div className="mt-4">
         <CareerForm/>
         </div>
         <Footer/>   
    </div>
  )
}
