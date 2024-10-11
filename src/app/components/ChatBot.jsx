import React, { useState, useEffect, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import TypingIndicator from "../components/TypingIndicator";
import Image from "next/image";

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
  const chatContainerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      if (!isValidEmail && value.trim() !== "") {
        toast.error("Please enter a valid email address");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation and send email logic

    setStep(step + 1);
    // Example conversation flow for bot responses
    let botResponse = "";
    switch (step) {
      case 1:
        botResponse = "Enter your Full name:";
        break;
      case 2:
        botResponse = `Enter your email, ${formData.FullName}`;
        break;
      case 3:
        botResponse = `Enter your message, ${formData.FullName}`;
        break;
      case 4:
        botResponse = `Thanks! Your message has been submitted, ${formData.FullName}`;
        break;
      default:
        break;
    }

    setConversation((prevConversation) => [
      ...prevConversation,
      { type: "user", content: formData.FullName || formData.Email || formData.Message, time: new Date().toLocaleTimeString() },
    ]);

    if (step < 4) {
      setTimeout(() => {
        setConversation((prevConversation) => [
          ...prevConversation,
          { type: "bot", content: botResponse, time: new Date().toLocaleTimeString() },
        ]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleChatToggle = () => {
    setShowChat(!showChat);
    if (!showChat && conversation.length === 0) {
      setConversation([{ type: "bot", content: "Hi! How can I help you?", time: new Date().toLocaleTimeString() }]);
    }
  };

  return (
    <>
      <div className={`fixed z-50 ${isSmallScreen ? "bottom-4 right-4" : "bottom-20 right-16"}`}>
        <Image
          src={'/chatbotSV.svg'}
          alt="Chatbot"
          width={55}
          height={55}
          className="cursor-pointer"
          onClick={handleChatToggle}
        />
      </div>

      {showChat && (
        <div
          ref={chatContainerRef}
          className={`fixed ${isSmallScreen ? "bottom-20 left-4 right-4 w-full" : "bottom-20 right-16 w-80"} bg-gray-900 text-white rounded-lg shadow-lg p-6 z-50`}
        >
          <button
            className="absolute top-2 left-2 text-red-500 text-lg cursor-pointer"
            onClick={() => setShowChat(false)}
          >
            ×
          </button>
          <div className="flex flex-col gap-4 overflow-auto max-h-96" ref={conversationBoxRef}>
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-3/4 ${msg.type === "user" ? "bg-white text-black self-end" : "bg-red-500 text-white self-start"}`}
              >
                <p>{msg.content}</p>
                <p className="text-xs text-gray-500">{msg.time}</p>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-end">
                <TypingIndicator />
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="mt-4 flex">
            <textarea
              className="w-full h-12 resize-none bg-gray-800 text-white p-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={step === 1 ? "Enter your Full Name" : step === 2 ? "Enter your Email" : "Enter your Message"}
              name={step === 1 ? "FullName" : step === 2 ? "Email" : "Message"}
              value={step === 1 ? formData.FullName : step === 2 ? formData.Email : formData.Message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="ml-2">
              <Image
                src={'/Frame5847.png'}
                width={50}
                height={50}
                alt="Send"
                className="cursor-pointer"
              />
            </button>
          </form>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default ChatBot;
