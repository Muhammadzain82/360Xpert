import Hero from "./Hero";
import Card from "./Card";
import Highlight from "./Highlight"; 
import Threejs from "./Threejs";
import Grid from "./Grid";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function XlogoBG() {
    useEffect(() => {
        // Animate the threejs-background based on the scroll position
        gsap.to('.threejs-background',{
          x:340,
          // ease: "power1.inOut",
          rotateX:30,
          rotateY:45,
          rotateZ:-10,
          scrollTrigger: {
              trigger: ".background",  
              start: " bottom 100px",  
              end: "top  ", 
              duration:1, 
              delay:2,
              // scrub:true,
            //   pin:true,
              // markers: true,          
              toggleActions: 'play reverse play reverse'
            },               
        });

      


       
    }, []);

    return (
        <div className="relative   ">
            {/* Threejs as the background (scrolls with the page) */}
            <div className="w-full fixed h-[500px] mt-3  threejs-background">
                <Threejs />
            </div>
        
            {/* Content that scrolls after Threejs */}
            <div className="relative z-10">
                <section className="">
                    <Hero />
                </section>
                <section className="  h-[600px]">
                    <Card />
                </section>
                <section className=" background">
                <Highlight />
                </section>
                <section className=" carts">
                 <Grid/>
                </section>

            </div>
        </div>
    );
}
