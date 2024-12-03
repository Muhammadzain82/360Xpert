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

//   const formreset = (e) => {
//     e.preventDefault()  
//     setFormData({
//       lookingFor: '',
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       email: '',
//       company: '',
//       message: ''
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     emailjs.sendForm(
//       'service_j6csyxd', 
//       'template_9d2y9k3', 
//       e.target, 
//       'cmO2drZIAuccL7NnJ',
//     )
//     .then((result) => {
//       console.log('Email sent:', result.text)
//       alert('Message sent successfully!')
//       formreset(e)
//     }, (error) => {
//       console.error('Failed to send email:', error.text)
//       alert('Failed to send message. Please try again.')
//     })
//   }

//   return (
//     <div className="flex items-left justify-left p-4">
//       <div className="w-full max-w-5xl p-8 relative flex">
//         <form onSubmit={handleSubmit} className="relative z-10 w-5/6">
//           <h2 className="text-white text-lg mb-4">Looking For?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="col-span-2">
//               <select
//                 name="lookingFor"
//                 value={formData?.lookingFor?.length > 0 ? "" : formData.lookingFor}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-600 text-white bg-[#181914] py-2 outline-none hover:border-red-500"
//                 aria-label="Looking For"
//               >
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
//               className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//               aria-label="Full Name"
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//               aria-label="Phone Number"
//             />
//             <div className="col-span-2">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//               aria-label="Email"
//             />
//             </div>
//             <div className="col-span-2">
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Company"
//               />
//             </div>
//             <div className="col-span-2">
//               <input
//                 type="text"
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 rows="3"
//                 aria-label="Message"
//               />
//             </div>
//             <div className="col-span-2">
//               <button
//                 type="submit"
//                 className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300"
//               >
//                 GET STARTED →
//               </button>
//             </div>
//           </div>
//         </form>
//         <div className="relative left-52">
//           <Image 
//             src="/right.png" 
//             width={600} 
//             height={600}  
//             alt="Decorative image" // Added alt text here
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster, toast } from 'react-hot-toast'

const formFields = [
  { name: 'firstName', label: "What's your full name?", type: 'text' },
  { name: 'phoneNumber', label: "What's your phone number?", type: 'tel' },
  { name: 'email', label: "What's your email address?", type: 'email' },
  { name: 'company', label: "What company are you from?", type: 'text' },
  { name: 'message', label: "Do you have any specific message or requirements?", type: 'text' },
]

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
}

const messageVariants = {
  initial: { 
    opacity: 0,
    y: 10,
    scale: 0.95
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
}

const formVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut"
    }
  }
}

export default function CompactChatbotForm() {
  const [messages, setMessages] = useState([])
  const [currentField, setCurrentField] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    company: '',
    message: ''
  })
  const [userInput, setUserInput] = useState('')
  const [isWaiting, setIsWaiting] = useState(false)
  
  useEffect(() => {
    if (currentField === 0) {
      setMessages([{ type: 'bot', content: formFields[0].label }])
    }
  }, [])

  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (userInput.trim() === '') {
      toast.error('Please fill in the field before submitting.')
      return
    }
    
    if (currentField < formFields.length) {
      const field = formFields[currentField]
      setFormData(prev => ({ ...prev, [field.name]: userInput }))
      setMessages(prev => [...prev, { type: 'user', content: userInput }])
      setUserInput('')
      setIsWaiting(true)

      setTimeout(() => {
        setMessages(prev => [...prev, 
          { type: 'bot', content: currentField === formFields.length - 1 ? "Thank you! I'll submit your information now." : formFields[currentField + 1].label }
        ])
        setCurrentField(prev => prev + 1)
        setIsWaiting(false)
      }, 1000) // 1 second delay
    }

    if (currentField === formFields.length - 1) {
      const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '')
      if (!allFieldsFilled) {
        toast.error('Please fill in all fields before submitting.')
        return
      }

      emailjs.send(
        'service_j6csyxd', 
        'template_9d2y9k3', 
        formData, 
        'cmO2drZIAuccL7NnJ'
      )
      .then((result) => {
        console.log('Email sent:', result.text)
        setMessages(prev => [...prev, { type: 'bot', content: 'Message sent successfully!' }])
        toast.success('Form submitted successfully!')
        setFormData({
          firstName: '',
          phoneNumber: '',
          email: '',
          company: '',
          message: ''
        })
        setCurrentField(0)
      }, (error) => {
        console.error('Failed to send email:', error.text)
        setMessages(prev => [...prev, { type: 'bot', content: 'Failed to send message. Please try again.' }])
        toast.error('Failed to send message. Please try again.')
      })
    }
  }

  return (
    <motion.div 
      className="mx-auto flex flex-col h-[500px] w-[600px] bg-[#181914] text-white p-4 rounded-lg shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <div className="flex-grow overflow-auto mb-4 space-y-2">
        <AnimatePresence initial={false}>
          {messages.map((message, index) => (
            <motion.div 
              key={index} 
              className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}
              variants={messageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
            >
              <motion.span 
                className={`inline-block p-2 rounded-lg text-sm ${
                  message.type === 'user' ? 'bg-red-600' : 'bg-gray-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {message.content}
              </motion.span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {currentField < formFields.length && !isWaiting && (
        <motion.form 
          onSubmit={handleSubmit} 
          className="flex gap-2"
          variants={formVariants}
          initial="initial"
          animate="animate"
        >
          <motion.input
            type={formFields[currentField]?.type || 'text'}
            value={userInput}
            onChange={handleInputChange}
            className="flex-grow bg-[#181914] border border-gray-600 text-white p-2 text-sm rounded-l outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
            placeholder={formFields[currentField]?.label || ''}
            whileFocus={{ scale: 1.01 }}
          />
          <motion.button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
      )}
      {isWaiting && (
        <div className="flex justify-center items-center">
          <motion.div
            className="w-4 h-4 bg-red-600 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
    </motion.div>
  )
}



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

//   const formreset = (e) => {
//     e.preventDefault()
//     setFormData({
//       lookingFor: '',
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       email: '',
//       company: '',
//       message: ''
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
    
//     emailjs.sendForm(
//       'service_j6csyxd', 
//       'template_9d2y9k3', 
//       e.target, 
//       'cmO2drZIAuccL7NnJ',
//     )
//     .then((result) => {
//       console.log('Email sent:', result.text)
//       alert('Message sent successfully!')
//       formreset(e)
//     }, (error) => {
//       console.error('Failed to send email:', error.text)
//       alert('Failed to send message. Please try again.')
//     })
//   }

//   return (
//     <div className="flex flex-col h-screen bg-black text-white">
//       {/* Header */}
//       <div className="p-4 flex items-center justify-between border-b border-gray-700">
//         <h1 className="text-lg">Lytica AI Agent</h1>
//         <div className="flex items-center space-x-2">
//           <div className="h-3 w-3 bg-green-500 rounded-full"></div>
//           <span className="text-sm text-gray-400">Ready to help</span>
//         </div>
//       </div>

//       {/* Chat Body */}
//       <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//         {/* AI Message */}
//         <div className="flex items-start space-x-3">
//           <div className="flex-shrink-0 bg-red-600 text-white h-8 w-8 rounded-full flex items-center justify-center">
//             AI
//           </div>
//           <div className="bg-gray-800 text-white p-3 rounded-lg max-w-xs">
//             Welcome to our site, if you need help simply reply to this message, we are online and ready to help.
//           </div>
//         </div>

//         {/* User Message */}
//         <div className="flex items-end justify-end space-x-3">
//           <div className="bg-red-600 text-white p-3 rounded-lg max-w-xs text-right">
//             I need to know the privacy policy of your business in a very short summary.
//           </div>
//         </div>
//       </div>

//       {/* Input Section */}
//       <form onSubmit={handleSubmit} className="p-4 bg-gray-900 flex items-center space-x-4 border-t border-gray-700">
//         <input
//           type="text"
//           name="message"
//           placeholder="Write Message"
//           value={formData.message}
//           onChange={handleChange}
//           className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg outline-none placeholder-gray-500"
//           aria-label="Message"
//         />
//         <button type="submit" className="bg-red-600 text-white p-3 rounded-full">
//           ⬆
//         </button>
//         <button
//           type="button"
//           onClick={formreset}
//           className="bg-red-600 text-white p-3 rounded-full"
//         >
//           ✖
//         </button>
//       </form>
//     </div>
//   )
// }


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

//   const [visibleFields, setVisibleFields] = useState(1) // Tracks how many fields are visible

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))

//     // Reveal the next field if current field is filled
//     if (name === 'lookingFor' && value) setVisibleFields(2)
//     if (name === 'firstName' && value) setVisibleFields(3)
//     if (name === 'phoneNumber' && value) setVisibleFields(4)
//     if (name === 'email' && value) setVisibleFields(5)
//     if (name === 'company' && value) setVisibleFields(6)
//     if (name === 'message' && value) setVisibleFields(7)
//   }

//   const formreset = (e) => {
//     e.preventDefault()
//     setFormData({
//       lookingFor: '',
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       email: '',
//       company: '',
//       message: ''
//     })
//     setVisibleFields(1) // Reset visibility
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     emailjs.sendForm(
//       'service_j6csyxd', 
//       'template_9d2y9k3', 
//       e.target, 
//       'cmO2drZIAuccL7NnJ',
//     )
//     .then((result) => {
//       console.log('Email sent:', result.text)
//       alert('Message sent successfully!')
//       formreset(e)
//     }, (error) => {
//       console.error('Failed to send email:', error.text)
//       alert('Failed to send message. Please try again.')
//     })
//   }

//   return (
//     <div className="flex items-left justify-left p-4">
//       <div className="w-full max-w-5xl p-8 relative flex">
//         <form onSubmit={handleSubmit} className="relative z-10 w-5/6">
//           <h2 className="text-white text-lg mb-4">Looking For?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className={`col-span-2 transition-opacity duration-500 ${visibleFields >= 1 ? 'opacity-100' : 'opacity-0'}`}>
//               <input
//                 name="lookingFor"
//                 value={formData.lookingFor}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-600 text-white bg-[#181914] py-2 outline-none hover:border-red-500"
//                 aria-label="Looking For"
//               />
//                 {/* <option value="">Select a category</option>
//                 <option value="AI">AI</option>
//                 <option value="ML">ML</option>
//                 <option value="App Development">App Development</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="DevOps">DevOps</option>
//                 <option value="UI/UX">UI/UX</option>
//                 <option value="Project Manager">Project Manager</option>
//                 <option value="Full Stack Development">Full Stack Development</option>
//                 <option value="QA">QA</option> */}
//               {/* </input> */}
//             </div>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Full Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className={`bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500 transition-opacity duration-500 ${
//                 visibleFields >= 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
//               }`}
//               aria-label="Full Name"
//             />
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className={`bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500 transition-opacity duration-500 ${
//                 visibleFields >= 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
//               }`}
//               aria-label="Phone Number"
//             />
//             <div className={`col-span-2 transition-opacity duration-500 ${visibleFields >= 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Email"
//               />
//             </div>
//             <div className={`col-span-2 transition-opacity duration-500 ${visibleFields >= 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Company"
//               />
//             </div>
//             <div className={`col-span-2 transition-opacity duration-500 ${visibleFields >= 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//               <input
//                 type="text"
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 rows="3"
//                 aria-label="Message"
//               />
//             </div>
//             <div className={`col-span-2 transition-opacity duration-500 ${visibleFields >= 7 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//               <button
//                 type="submit"
//                 className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300"
//               >
//                 GET STARTED →
//               </button>
//             </div>
//           </div>
//         </form>
//         <div className="relative left-52">
//           <Image 
//             src="/right.png" 
//             width={600} 
//             height={600} 
//             alt="Decorative image"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

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

//   const [currentField, setCurrentField] = useState(0) // Tracks the current field index

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }))
//   }

//   const formreset = (e) => {
//     e.preventDefault()
//     setFormData({
//       lookingFor: '',
//       firstName: '',
//       lastName: '',
//       phoneNumber: '',
//       email: '',
//       company: '',
//       message: ''
//     })
//     setCurrentField(0) // Reset field visibility to the first field
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     emailjs.sendForm(
//       'service_j6csyxd', 
//       'template_9d2y9k3', 
//       e.target, 
//       'cmO2drZIAuccL7NnJ',
//     )
//     .then((result) => {
//       console.log('Email sent:', result.text)
//       alert('Message sent successfully!')
//       formreset(e)
//     }, (error) => {
//       console.error('Failed to send email:', error.text)
//       alert('Failed to send message. Please try again.')
//     })
//   }

//   const handleNext = () => {
//     if (currentField < 6) {
//       setCurrentField(prev => prev + 1) // Show next field
//     }
//   }

//   const handleBack = () => {
//     if (currentField > 0) {
//       setCurrentField(prev => prev - 1) // Show previous field
//     }
//   }

//   return (
//     <div className="flex items-left justify-left p-4">
//       <div className="w-full max-w-5xl p-8 relative flex">
//         <form onSubmit={handleSubmit} className="relative z-10 w-5/6">
//           <h2 className="text-white text-lg mb-4">Looking For?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//             {/* Field 1 - Looking For */}
//             <div className={`col-span-2 transition-all duration-700 transform ${currentField >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <input
//                 name="lookingFor"
//                 value={formData.lookingFor}
//                 onChange={handleChange}
//                 className="w-full border-b border-gray-600 text-white bg-[#181914] py-2 outline-none hover:border-red-500"
//                 aria-label="Looking For"
//               />
//             </div>

//             {/* Field 2 - Full Name */}
//             <div className={`transition-all duration-700 transform ${currentField >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Full Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Full Name"
//               />
//             </div>

//             {/* Field 3 - Phone Number */}
//             <div className={`transition-all duration-700 transform ${currentField >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Phone Number"
//               />
//             </div>

//             {/* Field 4 - Email */}
//             <div className={`col-span-2 transition-all duration-700 transform ${currentField >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Email"
//               />
//             </div>

//             {/* Field 5 - Company */}
//             <div className={`col-span-2 transition-all duration-700 transform ${currentField >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 aria-label="Company"
//               />
//             </div>

//             {/* Field 6 - Message */}
//             <div className={`col-span-2 transition-all duration-700 transform ${currentField >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <input
//                 type="text"
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full bg-[#181914] border-b border-gray-600 text-white py-2 outline-none hover:border-red-500"
//                 rows="3"
//                 aria-label="Message"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className={`col-span-2 transition-all duration-700 transform ${currentField >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
//               <button
//                 type="submit"
//                 className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300"
//               >
//                 GET STARTED →
//               </button>
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-between mt-4">
//             {currentField > 0 && (
//               <button type="button" onClick={handleBack} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
//                 Back
//               </button>
//             )}
//             {currentField < 6 && (
//               <button type="button" onClick={handleNext} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">
//                 Next
//               </button>
//             )}
//           </div>
//         </form>

//         {/* Decorative Image */}
//         <div className="relative left-52">
//           <Image
//             src="/right.png"
//             width={600}
//             height={600}
//             alt="Decorative image"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
