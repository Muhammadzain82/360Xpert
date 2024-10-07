'use client'
import React, { useRef, useEffect } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import useMediaQuery from "@mui/material/useMediaQuery";

extend({ OrbitControls: ThreeOrbitControls });

const OrbitControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => controls.current && controls.current.update());
  if (controls.current) {
    controls.current.enableZoom = false; // Enable zoom
    controls.current.enableRotate = true; // Enable rotation
    controls.current.enablePan = true; // Enable panning
  }

  return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
};
const MyModel = () => {
  const modelRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/X.gltf", (gltf) => {
      const customModel = gltf.scene;
      modelRef.current.add(customModel);

      // Set red color for the model
      const material = new THREE.MeshPhongMaterial({
        color: 0xd0140f,
        shininess: 100,
      });
      customModel.traverse((node) => {
        if (node.isMesh) {
          node.material = material;
        }
      });
    });
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      // Automatic rotation
      modelRef.current.rotation.y += 0.003;
    }
  });

  return <group ref={modelRef} />;
};

const Threejs = () => {
  const isNestHubScreen = useMediaQuery("(width:1400px)");
  const isSmallScreen = useMediaQuery("(min-width:900px)");
  const isXSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Canvas
      camera={{ position: [30, 10, 40], fov: 32 }}
      style={{
        background: "transparent",
        // height: isNestHubScreen ? "55vh" : "80vh",
      }}
    >
      <MyModel />
      <directionalLight
        color={0xffffff}
        intensity={1}
        position={[411.47, 564.68, 740.56]}
      />
      <ambientLight intensity={0.5} />
      <OrbitControls />
    </Canvas>
  );
};

export default Threejs;

// import React from 'react'
// import Image from 'next/image'

// export default function Threejs() {
//   return (
//     <div className='w-[200px ] h-[300px] '>
//        <Image
//                         src="/X.png"
//                         alt="X icon"
//                         layout="fill"
//                         objectFit="contain"
//                         // className='w-56 h-12'
//                       />
//     </div>
//   )
// }

