// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { Send, Paperclip, Smile, X } from "lucide-react";

// interface Message {
//   text: string;
//   isUser: boolean;
// }

// export default function Hero() {
//   const canvasRef = useRef<HTMLDivElement | null>(null);
//   const modelRef = useRef<THREE.Group | null>(null);
//   const [isToggled, setIsToggled] = useState(false);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       text: "Welcome to our site, if you need help, feel free to ask me anything.",
//       isUser: false,
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     let scene: THREE.Scene,
//       camera: THREE.PerspectiveCamera,
//       renderer: THREE.WebGLRenderer,
//       loader: GLTFLoader;

//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 0, 5);

//     renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(
//       canvasRef.current ? canvasRef.current.clientWidth : 0,
//       canvasRef.current ? canvasRef.current.clientHeight : 0
//     );
//     canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

//     const handleResize = () => {
//       const width = canvasRef.current ? canvasRef.current.clientWidth : 0;
//       const height = canvasRef.current ? canvasRef.current.clientHeight : 0;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };
//     window.addEventListener("resize", handleResize);

//     loader = new GLTFLoader();
//     loader.load("/X.gltf", (gltf) => {
//       const model = gltf.scene;
//       model.scale.set(0.5, 0.5, 0.5);
//       model.position.set(-0.5, 0, 0);
//       scene.add(model);
//       modelRef.current = model;
//     });

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     gsap.to("#toggleButton", {
//       y: -10,
//       repeat: -1,
//       yoyo: true,
//       duration: 1,
//       ease: "power1.inOut",
//     });

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//     const cardComponent = document.getElementById("card-component");
//     if (cardComponent) {
//       cardComponent.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const toggleChatSupport = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const handleSendMessage = () => {
//     if (inputMessage.trim() !== "") {
//       setMessages([...messages, { text: inputMessage, isUser: true }]);
//       setInputMessage("");
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   const handleEmojiClick = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const handleFileAttachment = () => {
//     alert("File attachment functionality to be implemented.");
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#181815] text-white overflow-hidden">
//         <div className="absolute inset-0 z-0 w-full h-full bg-cover bg-center opacity-50">
//           <Image
//             src="/Waveform.png"
//             alt="Wave background"
//             fill
//             style={{ objectFit: "contain", objectPosition: "bottom" }}
//             className="bg-no-repeat"
//           />
//         </div>
//         <div
//           ref={canvasRef}
//           className="absolute inset-0 z-10 w-full h-full"
//         ></div>
//         <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="font-['Clash_Display'] font-light leading-custom-line text-center mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-[#FFFFFF]">
//             Elevating your
//           </h2>

//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium mb-4 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
//             Digital
//           </h1>
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
//             Presence
//           </h1>
//           <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-300 font-['Clash_Display']">
//             At{" "}
//             <span className="text-white font-semibold">360XpertSolutions</span>,
//             we craft innovative digital solutions that amplify your brand&apos;s
//             visibility and impact. With our expertise, your online presence
//             won&apos;t just stand out - it will excel.
//           </p>
//         </div>

//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 -mb-8">
//           <Image
//             id="toggleButton"
//             src="/toggle.png"
//             alt="Toggle"
//             width={20}
//             height={30}
//             className="cursor-pointer"
//             onClick={handleToggle}
//           />
//         </div>

//         <div className="absolute bottom-4 right-2 z-40">
//           <div
//             className="rounded-full p-2 shadow-lg cursor-pointer"
//             onClick={toggleChatSupport}
//           >
//             <Image
//               src="/chatsupport.png"
//               alt="Chat Support"
//               width={80}
//               height={80}
//             />
//           </div>
//         </div>
//         {isChatOpen && (
//           <div className="fixed bottom-4 right-4 z-50 bg-[#1E1E1E] text-white shadow-lg rounded-lg w-[320px] h-[480px] flex flex-col">
//             <div className="flex justify-between items-center p-4 border-b border-gray-700">
//               <div className="flex flex-col">
//                 <div className="flex items-center">
//                   <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 mr-2"></div>
//                   <h3 className="text-lg font-['Clash_Display'] font-medium">
//                     Lytica AI Agent
//                   </h3>
//                 </div>
//                 <span className="text-xs text-gray-400 ml-4 font-['Clash_Display']">
//                   Ready to help
//                 </span>
//               </div>
//               <button
//                 onClick={() => setIsChatOpen(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-700">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`${
//                     message.isUser
//                       ? "ml-auto bg-red-500"
//                       : "mr-auto bg-gray-700"
//                   } max-w-[80%] rounded-lg p-2 flex items-start`}
//                 >
//                   {!message.isUser && (
//                     <div className="bg-red-500 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
//                       <span className="text-xs font-bold">AI</span>
//                     </div>
//                   )}
//                   <p className="text-sm font-['Clash_Display']">
//                     {message.text}
//                   </p>
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>

//             <div className="p-4 border-t border-gray-700">
//               <div className="flex items-center bg-[#2A2A2A] rounded-full relative">
//                 <input
//                   type="text"
//                   className="flex-1 bg-transparent px-4 py-2 text-sm focus:outline-none font-['Clash_Display']"
//                   placeholder="Write a message"
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                 />
//                 <button
//                   className="p-2 text-gray-400 hover:text-white relative"
//                   onClick={handleEmojiClick}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   {showEmojiPicker && (
//                     <div className="absolute bottom-full right-0 mb-2 bg-white text-black p-2 rounded shadow-lg">
//                       <p>Emoji Picker (To be implemented)</p>
//                     </div>
//                   )}
//                 </button>
//                 <button
//                   className="p-2 text-gray-400 hover:text-white"
//                   onClick={handleFileAttachment}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 <button
//                   className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600"
//                   onClick={handleSendMessage}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 rotate-90"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//          )}
//       </section>
//     </div>
//   );
// }
'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThreeFibreApp from "./Threejs";
import WaveForm from './WaveForm';
import useMediaQuery from "@mui/material/useMediaQuery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Send, Paperclip, Smile, X } from "lucide-react";
import Head from "next/head";
import ChatBot from "./ChatBot"

const TextBox = () => {
  const [isClient, setIsClient] = useState(false);
  const isNestHubScreen = useMediaQuery;
  const isXSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [messages, setMessages] = useState([
    {
      text: "Welcome to our site, if you need help, feel free to ask me anything.",
      isUser: false,
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const canvasRef = useRef(null); // Define the canvasRef here

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    const cardComponent = document.getElementById("card-component");
    if (cardComponent) {
      cardComponent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleChatSupport = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, isUser: true }]);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleFileAttachment = () => {
    alert("File attachment functionality to be implemented.");
  };

  return (
    <div className="w-full h-[450px] pt-1 bg-transparent">
      <div className="absolute px-4 w-full sm:px-6 lg:px-8">
        <section className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
          <div></div>

          <div ref={canvasRef} className="absolute inset-0 z-10 w-full h-full"></div>

          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-['Clash_Display'] font-light leading-custom-line text-center mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-[#FFFFFF]">
              Elevating your
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium mb-4 font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
              Digital
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Clash_Display'] bg-clip-text text-transparent bg-gradient-to-r from-white to-[#999]">
              Presence
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-300 font-['Clash_Display']">
              At{" "}
              <span className="text-white font-semibold">360XpertSolutions</span>, we craft innovative digital solutions that amplify your brand&apos;s visibility and impact. With our expertise, your online presence won&apos;t just stand out - it will excel.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 -mb-8"></div>

          <div className="absolute bottom-4 right-10 z-40">
            <div className="rounded-full p-2 w-16 h-52 shadow-lg cursor-pointer" onClick={toggleChatSupport}>
              {/* <Image src="/chatsupport.png" alt="Chat Support" width={80} height={80} /> */}
              <ChatBot />
            </div>
          </div>

          {isChatOpen && (
            <div className="fixed bottom-4 right-4 z-50 bg-[#1E1E1E] text-white shadow-lg rounded-lg w-[320px] h-[480px] flex flex-col">
              Chat content
            </div>
          )}
        </section>
      </div>

      <div className="absolute mt-[500px] w-[100%]">
        <WaveForm />
      </div>
    </div>
  );
};

export default TextBox;
