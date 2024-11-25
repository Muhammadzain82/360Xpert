// 'use client';

// import React, { useState, useEffect, useRef } from "react";
// import { toast, Toaster } from "react-hot-toast";
// import TypingIndicator from "./TypingIndicator";
// import Image from "next/image";

// const ChatBot = () => {
//   const [formData, setFormData] = useState({
//     lookingFor: "",
//     firstName: "",
//     phoneNumber: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const [step, setStep] = useState(0);
//   const [showChat, setShowChat] = useState(false);
//   const [conversation, setConversation] = useState([]);
//   const conversationBoxRef = useRef(null);
//   const [validEmail, setValidEmail] = useState(true);
//   const chatContainerRef = useRef(null);
//   const [isTyping, setIsTyping] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   const fields = [
//     { name: 'lookingFor', placeholder: 'Looking For', type: 'select' },
//     { name: 'firstName', placeholder: 'Full Name', type: 'text' },
//     { name: 'phoneNumber', placeholder: 'Phone Number', type: 'tel' },
//     { name: 'email', placeholder: 'Email', type: 'email' },
//     { name: 'company', placeholder: 'Company', type: 'text' },
//     { name: 'message', placeholder: 'Message', type: 'textarea' }
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 600);
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "email") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       const isValidEmail = emailRegex.test(value);
//       setValidEmail(isValidEmail);
//     }

//     // Move to the next field when current field is completed
//     if (value.trim() !== '') {
//       setTimeout(() => {
//         setStep(prev => (prev < fields.length - 1 ? prev + 1 : prev));
//       }, 300);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentInput = formData[fields[step].name];

//     if (fields[step].name === "email" && !validEmail) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     const nextStep = step + 1;
//     const botResponses = [
//       "What are you looking for?",
//       "What's your full name?",
//       "What's your phone number?",
//       "What's your email address?",
//       "What company are you from?",
//       "Do you have any specific message or inquiry?",
//       `Thanks! Your message has been submitted, ${formData.firstName}.`,
//     ];

//     setConversation((prev) => [
//       ...prev,
//       { type: "user", content: currentInput, time: new Date().toLocaleTimeString() },
//     ]);
//     setStep(nextStep);

//     if (nextStep <= fields.length) {
//       setIsTyping(true);
//       setTimeout(() => {
//         setConversation((prev) => [
//           ...prev,
//           { type: "bot", content: botResponses[step], time: new Date().toLocaleTimeString() },
//         ]);
//         setIsTyping(false);
//       }, 1500);
//     }

//     if (nextStep === fields.length) {
//       toast.success("Your message has been sent successfully!");
//       setFormData({
//         lookingFor: "",
//         firstName: "",
//         phoneNumber: "",
//         email: "",
//         company: "",
//         message: "",
//       });
//       setStep(0);
//     }
//   };

//   const handleChatToggle = () => {
//     setShowChat((prev) => !prev);

//     if (!showChat && conversation.length === 0) {
//       setTimeout(() => {
//         setConversation([
//           { type: "bot", content: "What are you looking for?", time: new Date().toLocaleTimeString() },
//         ]);
//         setStep(0);
//       }, 500);
//     }
//   };

//   return (
//     <>
//       {/* Chat Button */}
//       <div
//         className="fixed z-50 bottom-7 right-7 text-right cursor-pointer"
//         onClick={handleChatToggle}
//         style={{
//           bottom: isSmallScreen ? "20px" : "80px",
//           right: isSmallScreen ? "20px" : "40px",
//         }}
//       >
//         <Image
//           src="/chatsupport.png"
//           alt="Message"
//           width={70}
//           height={70}
//           className="w-[70px] transition-transform hover:scale-110"
//         />
//       </div>

//       {/* Chat Container */}
//       <div
//         ref={chatContainerRef}
//         className={`fixed ${
//           showChat ? "scale-100" : "scale-0"
//         } transition-transform duration-300 bottom-[90px] right-[50px] w-[360px] bg-[#181914] text-white rounded-lg shadow-xl ${
//           isSmallScreen ? "w-[90vw] bottom-0 left-1/2 transform -translate-x-1/2" : ""
//         }`}
//       >
//         {showChat && (
//           <form onSubmit={handleSubmit} className="flex flex-col h-full">
//             {/* Header */}
//             <header className="bg-red-600 p-3 text-center text-lg font-semibold rounded-t-lg">
//               Lytica AI Chat
//               <button
//                 type="button"
//                 className="absolute top-3 right-3 text-white hover:text-gray-300 text-2xl"
//                 onClick={() => setShowChat(false)}
//               >
//                 ×
//               </button>
//             </header>

//             {/* Conversation */}
//             <div
//               ref={conversationBoxRef}
//               className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-hide"
//             >
//               {conversation.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`p-3 rounded-lg max-w-[75%] ${
//                     msg.type === "user" ? "bg-red-600 ml-auto text-white" : "bg-gray-700 text-gray-200"
//                   }`}
//                 >
//                   <p>{msg.content}</p>
//                   <span className="text-xs text-gray-400 block mt-1">{msg.time}</span>
//                 </div>
//               ))}
//               {isTyping && <TypingIndicator />}
//             </div>

//             {/* Input Box */}
//             <div className="p-3 border-t border-gray-700 flex items-center space-x-3">
//               {fields[step].type === 'select' ? (
//                 <select
//                   name={fields[step].name}
//                   value={formData[fields[step].name]}
//                   onChange={handleChange}
//                   className="flex-1 p-2 rounded-lg bg-[#181914] text-white border border-gray-700 focus:ring-2 focus:ring-red-600"
//                 >
//                   <option value="" disabled>Select an option</option>
//                   <option value="AI">AI</option>
//                   <option value="ML">ML</option>
//                   <option value="App Development">App Development</option>
//                   <option value="Web Development">Web Development</option>
//                   <option value="DevOps">DevOps</option>
//                   <option value="UI/UX">UI/UX</option>
//                   <option value="Project Manager">Project Manager</option>
//                   <option value="Full Stack Development">Full Stack Development</option>
//                   <option value="QA">QA</option>
//                 </select>
//               ) : fields[step].type === 'textarea' ? (
//                 <textarea
//                   name={fields[step].name}
//                   placeholder={fields[step].placeholder}
//                   value={formData[fields[step].name]}
//                   onChange={handleChange}
//                   className="flex-1 p-2 rounded-lg bg-[#181914] text-white border border-gray-700 focus:ring-2 focus:ring-red-600"
//                   rows="3"
//                 ></textarea>
//               ) : (
//                 <input
//                   type={fields[step].type}
//                   name={fields[step].name}
//                   placeholder={fields[step].placeholder}
//                   value={formData[fields[step].name]}
//                   onChange={handleChange}
//                   className="flex-1 p-2 rounded-lg bg-[#181914] text-white border border-gray-700 focus:ring-2 focus:ring-red-600"
//                 />
//               )}
//               <button
//                 type="submit"
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         )}
//       </div>

//       {/* Toast Notifications */}
//       <Toaster
//         position="bottom-center"
//         toastOptions={{
//           style: {
//             background: "#181914",
//             color: "#ffffff",
//           },
//         }}
//       />
//     </>
//   );
// };

// export default ChatBot;

'use client'
import { useState } from 'react'
import Image from 'next/image'
import emailjs from 'emailjs-com'

export default function Component() {
  const [formData, setFormData] = useState({
    lookingFor: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const formreset = (e) => {
    e.preventDefault()  
    setFormData({
      lookingFor: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      company: '',
      message: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(
      'service_j6csyxd', 
      'template_9d2y9k3', 
      e.target, 
      'cmO2drZIAuccL7NnJ',
    )
    .then((result) => {
      console.log('Email sent:', result.text)
      alert('Message sent successfully!')
      formreset(e)
    }, (error) => {
      console.error('Failed to send email:', error.text)
      alert('Failed to send message. Please try again.')
    })
  }

  return (
    <div className="flex items-left justify-left p-4">
      <div className="w-full max-w-5xl p-8 relative flex">
        <form onSubmit={handleSubmit} className="relative z-10 w-5/6">
          <h2 className="text-white text-lg mb-4">Looking For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full border-b border-gray-600 text-white bg-[#181914] py-2 outline-none hover:border-red-500"
                aria-label="Looking For"
              >
                <option value="AI">AI</option>
                <option value="ML">ML</option>
                <option value="App Development">App Development</option>
                <option value="Web Development">Web Development</option>
                <option value="DevOps">DevOps</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="QA">QA</option>
              </select>
            </div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
              aria-label="First name"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
              aria-label="Last name"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
              aria-label="Phone Number"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
              aria-label="Email"
            />
            <div className="col-span-2">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
                aria-label="Company"
              />
            </div>
            <div className="col-span-2">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
                rows="3"
                aria-label="Message"
              ></textarea>
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300"
              >
                GET STARTED →
              </button>
            </div>
          </div>
        </form>
        <div className="relative left-52">
          <Image 
            src="/right.png" 
            width={600} 
            height={600} 
            alt="Decorative image" // Added alt text here
          />
        </div>
      </div>
    </div>
  )
}