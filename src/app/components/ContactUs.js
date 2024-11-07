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

  const handleSubmit = (e) => {
    e.preventDefault()
    
    emailjs.sendForm(
      'service_j6csyxd', 
      'template_9d2y9k3', 
      e.target, 
      'cmO2drZIAuccL7NnJ'
    )
    .then((result) => {
      console.log('Email sent:', result.text)
      alert('Message sent successfully!')
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
          <Image src="/x.png" width={600} height={600}/>
        </div>
      </div>
    </div>
  )
}


// 'use client'
// import { useState } from "react";
// import Container from "./../components/Container";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
// import Head from "next/head";
// import Image from "next/image";

// export default function Meet() {
//   const [formData, setFormData] = useState({
//     field: "",
//     firstName: "",
//     lastName: "",
//     phoneNumber: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/sendEmail", {  // Updated route
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...formData, email: formData.email }),
//       });
  
//       if (!response.ok) throw new Error("Failed to jsx send email");
  
//       const result = await response.json();
//       toast.success(result.message);
  
//       setFormData({
//         field: "",
//         firstName: "",
//         lastName: "",
//         phoneNumber: "",
//         email: "",
//         company: "",
//         message: "",
//       });
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
  

//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const handle = (e) => {
//     setEmail(e.target.value);
//   };

//   const submit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setEmailError(toast.error("Email is required"));
//     } else {
//       handleSubmit(e);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Contact Us - 360XpertsSolutions</title>
//       </Head>
     
//       <Container>
//         <Toaster />

//         <div className="mt-36 flex flex-col lg:flex-row">
//           <div className="lg:w-2/3">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm font-clash text-white">
//               {/* Looking For? */}
//               <label htmlFor="field" className="text-white font-normal text-lg">
//                 Looking For?
//               </label>
//               <select
//                id="field"
//                name="field"
//                value={formData.field}
//                onChange={handleChange}
//                className="border-b border-gray-600 bg-black text-white p-2 outline-none"
//                >
//                <option value="AI">AI</option>
//                <option value="ML">ML</option>
//                <option value="App Development">App Development</option>
//                <option value="Web Development">Web Development</option>
//               </select>

//               {/* First Name and Last Name */}
//               <div className="flex flex-col lg:flex-row gap-5">
//                 <div className="lg:w-1/2">
//                   <label htmlFor="firstName" className="text-white font-normal text-lg">
//                     First name
//                   </label>
//                   <input
//                    type="text"
//                    id="firstName"
//                    name="firstName"
//                    value={formData.firstName}
//                    onChange={handleChange}
//                     className="border-b border-gray-600 bg-transparent text-white p-2 outline-none w-full"
//                   />
//                 </div>
//                 <div className="lg:w-1/2">
//                   <label htmlFor="lastName" className="text-white font-normal text-lg">
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="border-b border-gray-600 bg-transparent text-white p-2 outline-none w-full"
//                   />
//                 </div>
//               </div>

//               {/* Phone Number and Email */}
//               <div className="flex flex-col lg:flex-row gap-5">
//                 <div className="lg:w-1/2">
//                   <label htmlFor="phoneNumber" className="text-white font-normal text-lg">
//                     Phone Number
//                   </label>
//                   <input
//                     type="number"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className="border-b border-gray-600 bg-transparent text-white p-2 outline-none w-full"
//                     required
//                   />
//                 </div>
//                 <div className="lg:w-1/2">
//                   <label htmlFor="email" className="text-white font-normal text-lg">
//                     Email
//                   </label>
//                   <input
//                    type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                    className="border-b border-gray-600 bg-transparent text-white p-2 outline-none w-full"
//                    required
//                   />
//                 </div>
//               </div>

//               {/* Company and Message */}
//               <label htmlFor="company" className="font-normal text-lg">
//                 Company
//               </label>
//               <input
//                type="text"
//                id="company"
//                name="company"
//                value={formData.company}
//                onChange={handleChange}
//                className="border-b border-gray-600 bg-transparent text-white p-2 outline-none"
//               />

//               <label htmlFor="message" className="text-white font-normal text-lg">
//                 Message
//               </label>
//               <textarea
//                id="message"
//                name="message"
//                value={formData.message}
//                onChange={handleChange}
//                className="border-b border-gray-600 bg-transparent text-white p-2 outline-none"
//               />

//              {/* Submit Button */}
//              <div className="col-span-2">
//               <button
//                 type="submit"
//                 className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300"
//               >
//                 GET STARTED →
//               </button>
//             </div>
//             <div className="absolute left-60">
//              <Image src="/x.png" width={600} height={600}/>
//             </div>
//             </form>
//           </div>
//       </div>
//       </Container>
//     </>
//   );
// }
