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

// 'use client'
// import { useState } from 'react'
// import Image from 'next/image'
// import emailjs from 'emailjs-com'

// export default function Component() {
//   const [formData, setFormData] = useState({
//     lookingFor: '',
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     company: '',
//     message: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     emailjs.sendForm(
//       'service_j6csyxd', 
//       'template_9d2y9k3', 
//       e.target, 
//       'cmO2drZIAuccL7NnJ'
//     )
//     .then((result) => {
//       console.log('Email sent:', result.text)
//       alert('Message sent successfully!')
//       setFormData({
//         lookingFor: '',
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         company: '',
//         message: ''
//       })
//     }, (error) => {
//       console.error('Failed to send email:', error.text)
//       alert('Failed to send message. Please try again.')
//     })
//   }

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-900">
//       {/* Form Section */}
//       <div className="w-full md:w-1/2 p-8">
//         <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
//           <h2 className="text-white text-xl font-semibold mb-4">Looking For?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="col-span-2">
//               <select
//                 name="lookingFor"
//                 value={formData.lookingFor}
//                 onChange={handleChange}
//                 className="w-full border border-gray-600 bg-gray-700 text-white py-2 px-3 rounded focus:ring-2 focus:ring-red-500 outline-none"
//               >
//                 <option value="">Select an option</option>
//                 <option value="AI">AI</option>
//                 <option value="ML">ML</option>
//                 <option value="App Development">App Development</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="DevOps">DevOps</option>
//                 <option value="UI/UX">UI/UX</option>
//                 <option value="Project Manager">Project Manager</option>
//                 <option value="Full Stack Development">Full Stack Development</option>
//                 <option value="QA">QA</option>
//               </select>
//             </div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Full Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="col-span-2 md:col-span-1 border border-gray-600 bg-gray-700 text-white py-2 px-3 rounded focus:ring-2 focus:ring-red-500 outline-none"
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="col-span-2 md:col-span-1 border border-gray-600 bg-gray-700 text-white py-2 px-3 rounded focus:ring-2 focus:ring-red-500 outline-none"
//             />
//             <div className="col-span-2">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-600 bg-gray-700 text-white py-2 px-3 rounded focus:ring-2 focus:ring-red-500 outline-none"
//               />
//             </div>
//             <div className="col-span-2">
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full border border-gray-600 bg-gray-700 text-white py-2 px-3 rounded focus:ring-2 focus:ring-red-500 outline-none"
//               />
//             </div>
//             <div className="col-span-2">
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full border border-gray-600 bg-gray-700 text-white py-2 px-3 rounded focus:ring-2 focus:ring-red-500 outline-none"
//                 rows="4"
//               ></textarea>
//             </div>
//             <div className="col-span-2">
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition duration-300"
//               >
//                 GET STARTED →
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Image Section */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-8">
//         <Image
//           src="/right.png"
//           width={500}
//           height={500}
//           className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
//           alt="Decorative image"
//         />
//       </div>
//     </div>
//   )
// }

'use client';
import { useState } from "react";
import Image from "next/image";
import HeroCareers from "./HeroCareers";
import Footer from "../components/Footer";

export default function CombinedChatInterface() {
  const questions = [
    "What is your name?",
    "Great! What's your phone number?",
    "What is your email address?",
    "Which company do you represent?",
    "Please enter your message.",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([
    {
      text: questions[0],
      sender: "system",
      timestamp: new Date(),
    },
  ]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSendMessage = async (userInput) => {
    const currentKey = Object.keys(formData)[currentQuestionIndex];

    setMessages((prev) => [
      ...prev,
      {
        text: userInput,
        sender: "user",
        timestamp: new Date(),
      },
    ]);

    setFormData((prev) => ({
      ...prev,
      [currentKey]: userInput,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setMessages((prev) => [
        ...prev,
        {
          text: questions[currentQuestionIndex + 1],
          sender: "system",
          timestamp: new Date(),
        },
      ]);
    } else {
      try {
        const response = await fetch("https://api.360xpertsolutions.com/api/careers-forms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        });

        if (response.ok) {
          setMessages((prev) => [
            ...prev,
            {
              text: "Thank you for your message! We will get back to you soon.",
              sender: "system",
              timestamp: new Date(),
            },
          ]);
        } else {
          throw new Error("Failed to submit the form data.");
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, there was an error sending your message. Please try again.",
            sender: "system",
            timestamp: new Date(),
          },
        ]);
      }
    }
  };

  const handleUserInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      handleSendMessage(e.target.value.trim());
      e.target.value = ""; // Clear input field
    }
  };

  return (
    <div>
      <HeroCareers />
      <div className="bg-[#181815] text-white min-h-screen flex flex-col md:flex-row items-start p-6 md:p-12 relative">
        {/* Main Content */}
        <div className="max-w-3xl w-full z-10">
          <h1 className="text-4xl font-light mb-2">Let&apos;s Apply</h1>
          <p className="text-gray-400 mb-6">
            Interested in joining our team? We&apos;d love to hear from you! Reach out for more details about job opportunities. Our team is here to help you every step of the way.
          </p>
          <div className="bg-[#181815] p-6 rounded-lg">
            <div className="chat-container space-y-4 mb-4 overflow-y-auto max-h-96">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } animate-slide-in`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm transition-transform transform ${
                      message.sender === "user"
                        ? "bg-red-600 text-white"
                        : "bg-[#181815] text-gray-300"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center border-t border-gray-700 pt-4">
              <input
                type="text"
                placeholder="Write Message"
                className="flex-grow bg-transparent border-none text-white outline-none placeholder-gray-500"
                onKeyDown={handleUserInput}
              />
              <button className="text-red-600 hover:text-red-700 ml-4">
                <Image src="/red.png" width={30} height={30} alt="Send" />
              </button>
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="hidden md:block flex-grow items-center justify-end p-8">
          <Image
            src="/right.png" // Place your image in the public directory or adjust the path accordingly
            width={500}
            height={700}
            className="rounded-lg transition duration-300"
            alt="Decorative image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
