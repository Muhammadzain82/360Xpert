"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ThreeFibreApp from "./Threejs";
import WaveForm from "./WaveForm";

export default function Hero() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      loader: GLTFLoader;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      canvasRef.current ? canvasRef.current.clientWidth : 0,
      canvasRef.current ? canvasRef.current.clientHeight : 0
    );
    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      const width = canvasRef.current ? canvasRef.current.clientWidth : 0;
      const height = canvasRef.current ? canvasRef.current.clientHeight : 0;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    loader = new GLTFLoader();
    loader.load("/X.gltf", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(-0.5, 0, 0);
      scene.add(model);
      modelRef.current = model;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    gsap.to("#toggleButton", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    const cardComponent = document.getElementById("card-component");
    if (cardComponent) {
      cardComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" relative px-4 sm:px-6 lg:px-8">
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#181815] text-white overflow-hidden">
      <div className=" absolute h-[500px] w-full  pt-6 ">
        <ThreeFibreApp/>
      </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Clash_Display'] font-light leading-custom-line text-center mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-[#FFFFFF]">
            Unleashing your
          </h2>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium mb-4 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
            Business
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
            Potential
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-300 font-['Clash_Display']">
            At{" "}
            <span className="text-white font-semibold">360XpertSolutions</span>,
            we craft innovative digital solutions that amplify your brand&apos;s
            visibility and impact. With our expertise, your online presence
            won&apos;t just stand out - it will excel.
          </p>
          <div className="flex justify-center">
            <Image src="/Mouse.png" alt="" width={30} height={30}/>
          </div>
        </div>
        <div className="absolute inset-0 z-0 w-full h-full mt-60">
          {/* <Image
            src="/Waveform.png"
            alt="Wave background"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            className="bg-no-repeat"
          /> */}
          {/* <WaveForm/> */}
        </div>

        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 -mb-8">
          <Image
            id="toggleButton"
            src="/toggle.png"
            alt="Toggle"
            width={20}
            height={30}
            className="cursor-pointer"
            onClick={handleToggle}
          />
        </div> */}
      </section>
    </div>
  );
}
