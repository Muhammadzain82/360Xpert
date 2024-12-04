// 'use client';
// import React, { useState, useEffect, useRef } from "react";
// import { toast, Toaster } from "react-hot-toast";
// import TypingIndicator from "../components/TypingIndicator";
// import Image from "next/image"; // Import next/image

// const ChatBot = () => {
//   const [formData, setFormData] = useState({
//     FullName: "",
//     Email: "",
//     Message: "",
//   });

//   const [step, setStep] = useState(1);
//   const [showChat, setShowChat] = useState(false);
//   const [conversation, setConversation] = useState([]);
//   const conversationBoxRef = useRef(null);
//   const [validEmail, setValidEmail] = useState(true);
//   const chatContainerRef = useRef(null);
//   const [isTyping, setIsTyping] = useState(false);

//   const [isSmallScreen, setIsSmallScreen] = useState(false);

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

//     if (name === "Email") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       const isValidEmail = emailRegex.test(value);
//       setValidEmail(isValidEmail);
//     }
//   };

//   const email = async () => {
//     try {
//       const response = await fetch("/api/SendChatEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...formData, email: formData.Email }),
//       });
//       debugger
//       if (!response.ok) throw new Error("Failed to send email");

//       const result = await response.json();
//       toast.success("Email successfully sent!");

//       setFormData({
//         FullName: "",
//         Email: "",
//         Message: "",
//       });
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const currentInput =
//       step === 1
//         ? formData.FullName
//         : step === 2
//         ? formData.Email
//         : formData.Message;

//     if (step === 2) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
//       const isValidEmail = emailRegex.test(formData.Email);
//       if (!isValidEmail) {
//         toast.error("Please enter a valid email address.");
//         return;
//       }
//     }

//     try {
//       const nextStep = step + 1;

//       let botResponse = "";
//       switch (nextStep) {
//         case 1:
//           botResponse = "Enter your Full name:";
//           break;
//         case 2:
//           botResponse = `Enter your email, ${formData.FullName}`;
//           break;
//         case 3:
//           botResponse = `Enter any inquiries, ${formData.FullName}`;
//           break;
//         case 4:
//           botResponse = `Thanks! Your Message Has Been Submitted, ${formData.FullName}`;
//           break;
//       }

//       if (step <= 3) {
//         setConversation((prevConversation) => [
//           ...prevConversation,
//           {
//             type: "user",
//             content: currentInput,
//             time: new Date().toLocaleTimeString(),
//           },
//         ]);
//       }

//       setStep(nextStep);

//       if (nextStep === 4) {
//         setConversation((prevConversation) => [
//           ...prevConversation,
//           {
//             type: "bot",
//             content: botResponse,
//             time: new Date().toLocaleTimeString(),
//           },
//         ]);

//         await email();
//         setIsTyping(false);
//         return;
//       }

//       if (botResponse && nextStep < 4) {
//         setIsTyping(true);

//         setTimeout(() => {
//           setConversation((prevConversation) => [
//             ...prevConversation,
//             {
//               type: "bot",
//               time: new Date().toLocaleTimeString(),
//             },
//           ]);
//         }, 1000);

//         setTimeout(() => {
//           setConversation((prevConversation) => [
//             ...prevConversation.slice(0, -1),
//             {
//               type: "bot",
//               content: botResponse,
//               time: new Date().toLocaleTimeString(),
//             },
//           ]);
//           setIsTyping(false);
//         }, 1500);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleChatToggle = () => {
//     setShowChat((prevShowChat) => !prevShowChat);

//     if (!showChat && conversation.length === 0) {
//       setTimeout(() => {
//         setConversation([
//           {
//             type: "bot",
//             content: "Greetings What is your name, Please?",
//             time: new Date().toLocaleTimeString(),
//           },
//         ]);
//         setStep(1);
//       }, 2000);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         chatContainerRef.current &&
//         !chatContainerRef.current.contains(event.target)
//       ) {
//         setShowChat(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (
//       showChat &&
//       step === 3 &&
//       conversation.length > 0 &&
//       conversation[conversation.length - 1].content === "Enter your inqueries:"
//     ) {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         Message: "",
//       }));
//     }
//   }, [showChat, step, conversation]);

//   useEffect(() => {
//     if (conversationBoxRef.current) {
//       const conversationBoxHeight = conversationBoxRef.current.clientHeight;
//       if (conversationBoxHeight) {
//         const newHeight = conversationBoxHeight + 88;
//         chatContainerRef.current.style.height = `${newHeight}px`;
//       }
//     }
//   }, [conversation]);

//   return (
//     <>
//       <div 
//         className="fixed z-50 bottom-7 right-16 text-right cursor-pointer"
//         onClick={handleChatToggle}
//         style={{
//           bottom: isSmallScreen ? "20px" : "100px",
//           right: isSmallScreen ? "20px" : "80px",
//         }}
//       >
//         <Image
//           src="/chatsupport.png"
//           alt="Message"
//           width={70}
//           height={70}
//           className="w-48 h-auto md:w-[70px]"
//         />
//       </div>
//       <div
//         ref={chatContainerRef}
//         className={`scrollbar-hide fixed mr-[95px] bottom-[75px] right-[60px] bg-[#1B1B19] rounded-lg z-40 overflow-y-auto p-9 shadow-lg transition-all duration-300 max-h-[400px] w-[350px] ${
//           showChat ? "block" : "hidden"
//         } ${isSmallScreen ? "w-90vw fixed left-0 bottom-0 mx-auto mb-[91px] rounded-none" : ""}`}
//       >
//         {showChat && (
//           <form onSubmit={handleSubmit}>
//             <button
//               className="absolute top-2 left-2 text-red-500 cursor-pointer text-lg"
//               onClick={() => setShowChat(false)}
//             >
//               ×
//             </button>
//             <div className="flex flex-col gap-4 pt-10" ref={conversationBoxRef}>
//               {conversation.map(
//                 (msg, index) =>
//                   msg.content && (
//                     <div
//                       key={index}
//                       className={`p-2 my-7 rounded-lg max-w-[70%] break-words ${
//                         msg.type === "user"
//                           ? "bg-white text-black"
//                           : "bg-red-600 text-white"
//                       }`}
//                     >
//                       <p>{msg.content}</p>
//                       <span className="text-xs text-white absolute pt-3.5 ">
//                         {msg.time}
//                       </span>
//                     </div>
//                   )
//               )}
//               {isTyping && (
//                 <div className="text-sm text-gray-500 flex justify-end pr-[85%]">
//                   <TypingIndicator />
//                 </div>
//               )}
//             </div>
//            <div className="flex gap-2 ">
//             <div className="flex items-center   ">
//               <input
//                 aria-label="Type your message"
//                 type={step === 2 ? "email" : "text"}
//                 id={
//                   step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
//                 }
//                 name={
//                   step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
//                 }
//                 placeholder={
//                   step === 1
//                     ? "Enter Your Full Name"
//                     : step === 2
//                     ? "Enter Your Email"
//                     : "Enter your inqueries"
//                 }
//                 value={
//                   step === 1
//                     ? formData.FullName
//                     : step === 2
//                     ? formData.Email
//                     : formData.Message
//                 }
//                 onChange={handleChange}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' && !e.shiftKey) {
//                     e.preventDefault();
//                     handleSubmit(e);
//                   }
//                 }}
//                 required
//                 className="w-full  p-2 bg-white border rounded-sm shadow-md text-black focus:outline-none focus:border-gray-600"
//               />
//             </div>

//             <button
//               type="submit"
//               className="block w-auto mt-1 p-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition duration-200"
//             >
//               Submit
//             </button>
//             </div>
//           </form>
//         )}
//       </div>
//       <Toaster position="bottom-center" reverseOrder={false} />
//     </>
//   );
// };

// export default ChatBot;

'use client'
import React, { useState, useEffect, useRef } from "react"
import { toast, Toaster } from "react-hot-toast"
import TypingIndicator from "../components/TypingIndicator"
import Image from "next/image"
import { Smile, Send } from 'lucide-react'
import dynamic from 'next/dynamic'

const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false })

const ChatBot = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Message: "",
  })

  const [step, setStep] = useState(1)
  const [showChat, setShowChat] = useState(false)
  const [conversation, setConversation] = useState([])
  const conversationBoxRef = useRef(null)
  const [validEmail, setValidEmail] = useState(true)
  const chatContainerRef = useRef(null)
  const [isTyping, setIsTyping] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isValidEmail = emailRegex.test(value)
      setValidEmail(isValidEmail)
    }
  }

  const handleEmojiClick = (emojiObject) => {
    const currentField =
      step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
    setFormData((prevState) => ({
      ...prevState,
      [currentField]: prevState[currentField] + emojiObject.emoji,
    }))
    setEmojiPickerVisible(false)
  }

  const email = async () => {
    try {
      const response = await fetch("/api/SendChatEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, email: formData.Email }),
      })
      if (!response.ok) throw new Error("Failed to send email")

      const result = await response.json()
      toast.success("Email successfully sent!")

      setFormData({
        FullName: "",
        Email: "",
        Message: "",
      })
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const currentInput =
      step === 1
        ? formData.FullName
        : step === 2
        ? formData.Email
        : formData.Message

    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/
      const isValidEmail = emailRegex.test(formData.Email)
      if (!isValidEmail) {
        toast.error("Please enter a valid email address.")
        return
      }
    }

    try {
      const nextStep = step + 1

      let botResponse = ""
      switch (nextStep) {
        case 1:
          botResponse = "Enter your Full name:"
          break
        case 2:
          botResponse = `Hope everything's going well! Please enter your email address. ${formData.FullName}`
          break
        case 3:
          botResponse = `Have something to share or ask? Drop it here! ${formData.FullName}`
          break
        case 4:
          botResponse = `We’ve got your message, ${formData.FullName}! Thanks for reaching out.,`
          break
      }

      if (step <= 3) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "user",
            content: currentInput,
            time: new Date().toLocaleTimeString(),
          },
        ])
      }

      setStep(nextStep)

      if (nextStep === 4) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "bot",
            content: botResponse,
            time: new Date().toLocaleTimeString(),
          },
        ])

        await email()
        setIsTyping(false)
        return
      }

      if (botResponse && nextStep < 4) {
        setIsTyping(true)

        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation,
            {
              type: "bot",
              time: new Date().toLocaleTimeString(),
            },
          ])
        }, 1000)

        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation.slice(0, -1),
            {
              type: "bot",
              content: botResponse,
              time: new Date().toLocaleTimeString(),
            },
          ])
          setIsTyping(false)
        }, 1500)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleChatToggle = () => {
    setShowChat((prevShowChat) => !prevShowChat)

    if (!showChat && conversation.length === 0) {
      setTimeout(() => {
        setConversation([
          {
            type: "bot",
            content: "Greetings! Your name, please?",
            time: new Date().toLocaleTimeString(),
          },
        ])
        setStep(1)
      }, 2000)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        setShowChat(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.style.height = isSmallScreen
        ? `${window.innerHeight * 0.9}px`
        : `${window.innerHeight * 0.8}px`
    }
  }, [isSmallScreen])

  return (
    <>
      <div
        className="fixed z-50 bottom-7 right-16 text-right cursor-pointer"
        onClick={handleChatToggle}
        style={{
          bottom: isSmallScreen ? "20px" : "100px",
          right: isSmallScreen ? "20px" : "80px",
        }}
      >
        <Image
          src="/chatsupport.png"
          alt="Message"
          width={70}
          height={70}
          // className="w-12 md:w-[70px] transition-all"
          className={`w-12 md:w-[70px] transition-all ${showChat ? "hidden":'block'}`}
        />
      </div>
      <div
        ref={chatContainerRef}
        className={`fixed bg-[#1B1B19] rounded-lg z-40 shadow-lg transition-all duration-300 overflow-y-auto ${
          showChat ? "block" : "hidden"
        } ${isSmallScreen ? "w-[90%] left-0 bottom-0 mx-auto rounded-none" : "w-[400px] bottom-[75px] right-[60px]"}`}
      >
        {showChat && (
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-800">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <div>
                <h2 className="text-white text-lg font-medium">Lytica AI Agent</h2>
                <p className="text-gray-400 text-sm">Ready to help</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto" ref={conversationBoxRef}>
              {conversation.map(
                (msg, index) =>
                  msg.content && (
                    <div
                      key={index}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} mb-4`}
                    >
                      {msg.type === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white mr-2">
                          AI
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl max-w-[70%] ${
                          msg.type === "user"
                            ? "bg-red-600 text-white"
                            : "bg-[#2A2A2A] text-gray-200"
                        }`}
                      >
                        <p className="break-words">{msg.content}</p>
                        <span className="text-xs text-gray-400 mt-1 block">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  )
              )}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-400">
                  <TypingIndicator />
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type={step === 2 ? "email" : "text"}
                    id={step === 1 ? "FullName" : step === 2 ? "Email" : "Message"}
                    name={step === 1 ? "FullName" : step === 2 ? "Email" : "Message"}
                    placeholder="Write Message"
                    value={
                      step === 1
                        ? formData.FullName
                        : step === 2
                        ? formData.Email
                        : formData.Message
                    }
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit(e)
                      }
                    }}
                    required
                    className="w-full p-3 bg-[#2A2A2A] text-white rounded-full focus:outline-none focus:ring-1 focus:ring-gray-600 placeholder-gray-500"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {/* <button type="button" className="text-gray-400 hover:text-gray-300">
                      <Paperclip className="w-5 h-5" />
                    </button> */}
                    <button 
                      type="button"
                      onClick={() => setEmojiPickerVisible(!emojiPickerVisible)} 
                      className="text-gray-400 hover:text-gray-300">
                      <Smile className="w-5 h-5" />
                    </button>
                  </div>  
                  {emojiPickerVisible && (
                    <div className="absolute right-0 bottom-12 z-50">
                      <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-200"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* <button
        onClick={() => setShowChat(false)}
        className={`fixed bottom-[75px] right-[60px] z-50 p-4 rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300 ${
          showChat ? "block" : "hidden"
        }`}
      >
        <X className="w-6 h-6 text-white" />
      </button> */}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  )
}

export default ChatBot





