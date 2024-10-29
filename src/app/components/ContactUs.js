// 'use client';
// import React, { useState } from "react";
// import { HiArrowRight } from "react-icons/hi2";
// import { toast, Toaster } from "react-hot-toast";

// const ContactModal = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         message: "",
//         company:"",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Input validation
//         const { firstName, lastName, email, phoneNumber, message , company  } = formData;
//         if (!firstName || !lastName || !email || !phoneNumber || !message || !company) {
//             toast.error("Please fill out all the input fields.");
//             return;
//         }

//         try {
//             const response = await fetch("/api/emails", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     subject: `New Contact Request from ${formData.firstName} ${formData.lastName}`,
//                     message: `
//                         <h1>360XpertSolution</h1>
//                         <h2>New Contact Request</h2>
//                         <p><strong>First Name:</strong> ${formData.firstName}</p>
//                         <p><strong>Last Name:</strong> ${formData.lastName}</p>
//                         <p><strong>Email:</strong> ${formData.email}</p>
//                         <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
//                         <p><strong>Message:</strong> ${formData.message}</p>
//                         <p><strong>Message:</strong> ${formData.company}</p>
//                     `,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 toast.success("Email sent successfully!");
//                 setFormData({
//                     firstName: "",
//                     lastName: "",
//                     email: "",
//                     phoneNumber: "",
//                     message: "",
//                     company:"",
//                 });
//             } else {
//                 throw new Error(data.message || "Failed to send email");
//             }
//         } catch (error) {
//             console.error("Error sending email:", error);
//             toast.error("Failed to send email. Please try again.");
//         }
//     };

//     return (
//         <div className="flex justify-center p-6">
//             <Toaster /> {/* Add Toaster component here */}
//             <div>
//                 <form
//                     className="bg-custom-gradient border-[#3A3A3A] border-[1px] sm:w-[60vw] md:h-[100vh] lg:w-[80vw] xl:h-[80vh] xl:w-[60vw] rounded-lg p-12 z-10 flex gap-4 flex-col mx-auto"
//                     onSubmit={handleSubmit}
//                 >
//                     <input
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         className="p-2 rounded-lg text-white bg-transparent  border-[1px] active:border-[#CB2127] focus:border-[#CB2127] border-[#3A3A3A]"
//                         placeholder="First Name"
//                         name="firstName"
//                     />
//                     <input
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         className="p-2 rounded-lg text-white bg-transparent border-[#3A3A3A] border-[1px] focus:border-[#CB2127]"
//                         placeholder="Last Name"
//                         name="lastName"
//                     />
//                     <input
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="p-2 rounded-lg text-white bg-transparent border-[#3A3A3A] border-[1px] focus:border-[#CB2127]"
//                         placeholder="Email"
//                         name="email"
//                     />
//                     <input
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                         className="p-2 rounded-lg text-white bg-transparent border-[#3A3A3A] border-[1px] focus:border-[#CB2127]"
//                         placeholder="Phone Number"
//                         name="phoneNumber"
//                     />
//                         <input
//                           value={formData.company}
//                           onChange={handleChange}
//                           className="p-2 rounded-lg text-white bg-transparent border-[#3A3A3A] border-[1px] focus:border-[#CB2127]"
//                           placeholder="Company Name"
//                           name="company"
//                       />
//                     <textarea
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="p-2 rounded-lg  bg-white border-[#3A3A3A] border-[1px] focus:border-[#CB2127] h-[40vh]"
//                         placeholder="Your Message"
//                         rows='9'
//                         name="message"
//                     />
//                     <button
//                         type="submit"
//                         className="bg-[#CB2127] p-2 flex justify-center items-center gap-4 rounded-lg"
//                     >
//                         Contact us <HiArrowRight />
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ContactModal;



'use client'
import { useState } from "react";
import Container from "./../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import Image from "next/image";

export default function Meet() {
  const [formData, setFormData] = useState({
    field: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {  // Updated route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, email: formData.email }),
      });
  
      if (!response.ok) throw new Error("Failed to jsx send email");
  
      const result = await response.json();
      toast.success(result.message);
  
      setFormData({
        field: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message);
    }
  };
  

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handle = (e) => {
    setEmail(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(toast.error("Email is required"));
    } else {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - 360XpertsSolutions</title>
      </Head>
     
      <Container>
        <Toaster />

        <div className="mt-36 flex flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm font-clash text-white">
              {/* Looking For? */}
              <label htmlFor="field" className="text-white font-normal text-lg">
                Looking For?
              </label>
              <select
               id="field"
               name="field"
               value={formData.field}
               onChange={handleChange}
               className="border-b border-gray-600 bg-black text-white p-2 outline-none"
               >
               <option value="AI">AI</option>
               <option value="ML">ML</option>
               <option value="App Development">App Development</option>
               <option value="Web Development">Web Development</option>
              </select>

              {/* First Name and Last Name */}
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="lg:w-1/2">
                  <label htmlFor="firstName" className="text-white font-normal text-lg">
                    First name
                  </label>
                  <input
                   type="text"
                   id="firstName"
                   name="firstName"
                   value={formData.firstName}
                   onChange={handleChange}
                    className="border-b border-gray-600 bg-black text-white p-2 outline-none w-full"
                  />
                </div>
                <div className="lg:w-1/2">
                  <label htmlFor="lastName" className="text-white font-normal text-lg">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-b border-gray-600 bg-black text-white p-2 outline-none w-full"
                  />
                </div>
              </div>

              {/* Phone Number and Email */}
              <div className="flex flex-col lg:flex-row gap-5">
                <div className="lg:w-1/2">
                  <label htmlFor="phoneNumber" className="text-white font-normal text-lg">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border-b border-gray-600 bg-black text-white p-2 outline-none w-full"
                    required
                  />
                </div>
                <div className="lg:w-1/2">
                  <label htmlFor="email" className="text-white font-normal text-lg">
                    Email
                  </label>
                  <input
                   type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                   className="border-b border-gray-600 bg-black text-white p-2 outline-none w-full"
                   required
                  />
                </div>
              </div>

              {/* Company and Message */}
              <label htmlFor="company" className="font-normal text-lg">
                Company
              </label>
              <input
               type="text"
               id="company"
               name="company"
               value={formData.company}
               onChange={handleChange}
               className="border-b border-gray-600 bg-black text-white p-2 outline-none"
              />

              <label htmlFor="message" className="text-white font-normal text-lg">
                Message
              </label>
              <textarea
               id="message"
               name="message"
               value={formData.message}
               onChange={handleChange}
               className="border-b border-gray-600 bg-black text-white p-2 outline-none"
              />

             {/* Submit Button */}
              <button
               type="submit"
               onClick={submit}
               className="mt-5 bg-red-600 text-white font-normal text-lg py-2 px-4 rounded hover:bg-white hover:text-red-600 border border-red-600 uppercase">
               Get Started →
              </button>
            </form>
          </div>
      </div>
      </Container>
    </>
  );
}
