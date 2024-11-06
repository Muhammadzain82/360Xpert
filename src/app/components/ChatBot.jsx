'use client';
import React, { useState, useEffect, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import TypingIndicator from "../components/TypingIndicator";
import Image from "next/image"; // Import next/image

const ChatBot = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Message: "",
  });

  const [step, setStep] = useState(1);
  const [showChat, setShowChat] = useState(false);
  const [conversation, setConversation] = useState([]);
  const conversationBoxRef = useRef(null);
  const [validEmail, setValidEmail] = useState(true);
  const chatContainerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      setValidEmail(isValidEmail);
    }
  };

  const email = async () => {
    try {
      const response = await fetch("/api/SendChatEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, email: formData.Email }),
      });

      if (!response.ok) throw new Error("Failed to send email");

      const result = await response.json();
      toast.success("Email successfully sent!");

      setFormData({
        FullName: "",
        Email: "",
        Message: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentInput =
      step === 1
        ? formData.FullName
        : step === 2
        ? formData.Email
        : formData.Message;

    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
      const isValidEmail = emailRegex.test(formData.Email);
      if (!isValidEmail) {
        toast.error("Please enter a valid email address.");
        return;
      }
    }

    try {
      const nextStep = step + 1;

      let botResponse = "";
      switch (nextStep) {
        case 1:
          botResponse = "Enter your Full name:";
          break;
        case 2:
          botResponse = `Enter your email, ${formData.FullName}`;
          break;
        case 3:
          botResponse = `Enter any inqueries, ${formData.FullName}`;
          break;
        case 4:
          botResponse = `Thanks! Your Message Has Been Submitted, ${formData.FullName}`;
          break;
      }

      if (step <= 3) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "user",
            content: currentInput,
            time: new Date().toLocaleTimeString(),
          },
        ]);
      }

      setStep(nextStep);

      if (nextStep === 4) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "bot",
            content: botResponse,
            time: new Date().toLocaleTimeString(),
          },
        ]);

        await email();
        setIsTyping(false);
        return;
      }

      if (botResponse && nextStep < 4) {
        setIsTyping(true);

        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation,
            {
              type: "bot",
              time: new Date().toLocaleTimeString(),
            },
          ]);
        }, 1000);

        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation.slice(0, -1),
            {
              type: "bot",
              content: botResponse,
              time: new Date().toLocaleTimeString(),
            },
          ]);
          setIsTyping(false);
        }, 1500);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChatToggle = () => {
    setShowChat((prevShowChat) => !prevShowChat);

    if (!showChat && conversation.length === 0) {
      // setConversation([
      //   {
      //     type: "bot",
      //     content: "Greetings! How may I assist you today?",
      //     time: new Date().toLocaleTimeString(),
      //   },
      // ]);

      setTimeout(() => {
        setConversation([
          {
            type: "bot",
            content: "Greetings What is your name, Please?",
            time: new Date().toLocaleTimeString(),
          },
        ]);
        setStep(1);
      }, 2000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        setShowChat(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      showChat &&
      step === 3 &&
      conversation.length > 0 &&
      conversation[conversation.length - 1].content === "Enter your inqueries:"
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Message: "",
      }));
    }
  }, [showChat, step, conversation]);

  useEffect(() => {
    if (conversationBoxRef.current) {
      const conversationBoxHeight = conversationBoxRef.current.clientHeight;
      if (conversationBoxHeight) {
        const newHeight = conversationBoxHeight + 88;
        chatContainerRef.current.style.height = `${newHeight}px`;
      }
    }
  }, [conversation]);

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
        <img
          src="/chatsupport.png"
          alt="Message"
          className="w-48 h-auto md:w-[70px]"
        />
      </div>
      <div
        ref={chatContainerRef}
        className={`fixed mr-[95px] bottom-[75px] right-[60px] bg-[#1B1B19] rounded-lg z-40 overflow-y-auto p-9 shadow-lg transition-all duration-300 max-h-[400px] w-[350px] ${
          showChat ? "block" : "hidden"
        } ${isSmallScreen ? "w-90vw fixed left-0 bottom-0 mx-auto mb-[91px] rounded-none" : ""}`}
      >
        {showChat && (
          <form onSubmit={handleSubmit}>
            <button
              className="absolute top-2 left-2 text-red-500 cursor-pointer text-lg"
              onClick={() => setShowChat(false)}
            >
              ×
            </button>
            <div className="flex flex-col gap-4 pt-10" ref={conversationBoxRef}>
              {conversation.map(
                (msg, index) =>
                  msg.content && (
                    <div
                      key={index}
                      className={`p-2 my-7 rounded-lg max-w-[70%] break-words ${
                        msg.type === "user"
                          ? "bg-white text-black"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className="text-xs text-white absolute pt-3.5 ">
                        {msg.time}
                      </span>
                    </div>
                  )
              )}
              {isTyping && (
                <div className="text-sm text-gray-500 flex justify-end pr-[85%]">
                  <TypingIndicator />
                </div>
              )}
            </div>
           <div className="flex gap-2 ">
            <div className="flex items-center mt-3  ">
              <input
                aria-label="Type your message"
                type={step === 2 ? "email" : "text"}
                id={
                  step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
                }
                name={
                  step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
                }
                placeholder={
                  step === 1
                    ? "Enter Your Full Name"
                    : step === 2
                    ? "Enter Your Email"
                    : "Enter your inqueries"
                }
                value={
                  step === 1
                    ? formData.FullName
                    : step === 2
                    ? formData.Email
                    : formData.Message
                }
                onChange={handleChange}
                required
                className="w-full  p-2 bg-white border rounded-sm shadow-md text-black focus:outline-none focus:border-gray-600"
              />
            </div>

            <button
              type="submit"
              className="block w-auto mt-4 p-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition duration-200"
            >
              Submit
            </button>
            </div>
          </form>
        )}
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default ChatBot;
