// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import emailjs from 'emailjs-com';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     experience: '',
//     skills: '',
//     salaryBudget: '',
//     aboutYourself: '',
//   });
//   const [file, setFile] = useState(null);
//   const [fieldErrors, setFieldErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (fieldErrors[name]) {
//       setFieldErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };
//  console.log(formData,"kia data arha ha ");
//   const handleFileChange = (e) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);
//       if (fieldErrors.file) {
//         setFieldErrors((prev) => ({ ...prev, file: '' }));
//       }
//     }
//   };

//   const formReset = () => {
//     setFormData({
//       name: '',
//       email: '',
//       experience: '',
//       skills: '',
//       salaryBudget: '',
//       aboutYourself: '',
//     });
//     setFile(null);
//     setFieldErrors({});
//     setSuccess(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccess(false);

//     const errors = {};
//     if (!formData.name) errors.name = 'Name is required.';
//     if (!formData.email) errors.email = 'Email is required.';
//     if (!formData.experience) errors.experience = 'Experience is required.';
//     if (!formData.skills) errors.skills = 'Skills are required.';
//     if (!formData.salaryBudget) errors.salaryBudget = 'Salary Budget is required.';
//     if (!formData.aboutYourself) errors.aboutYourself = 'This field is required.';
//     if (!file) errors.file = 'Please upload your CV.';

//     setFieldErrors(errors);

//     if (Object.keys(errors).length > 0) {
//       return;
//     }

//     try {
//       // Upload the CV to the API
//       const formDataCV = new FormData();
//       formDataCV.append('file', file);

//       const response = await fetch('https://api.360xpertsolutions.com/api/cvs', {
//         method: 'POST',
//         body: formDataCV,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload CV');
//       }

//       const data = await response.json();
//       const cvUrl = data?.url; // Assuming the response returns the URL of the uploaded CV

//       if (!cvUrl) {
//         throw new Error('No CV URL returned from the API');
//       }

//       // Now send the form data along with the CV URL via email
//       await emailjs.sendForm(
//         'service_j6csyxd',
//         'template_9d2y9k3',
//         e.target,
//         'cmO2drZIAuccL7NnJ'
//       );

//       console.log('Form submitted:', { ...formData, cv: cvUrl });

//       setSuccess(true);
//       formReset();
//     } catch (err) {
//       console.error('Failed to send email or upload CV:', err);
//     }
//   };

//   return (
//     <div className="flex items-start justify-center px-4 lg:px-8 py-8">
//       <div className="w-full max-w-5xl p-8 relative flex flex-col lg:flex-row gap-8">
//         {/* Form Section */}
//         <form
//           onSubmit={handleSubmit}
//           className="relative z-10 w-full lg:w-2/3 space-y-6"
//         >
//           <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
//             Contact Us
//           </h2>

//           {success ? (
//             <div className="text-green-600 mb-4 text-center lg:text-left">
//               Thank you for your submission!
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Name Field */}
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`bg-[#181914] border-b text-white py-2 outline-none ${
//                       fieldErrors.name ? 'border-red-500' : 'border-gray-600'
//                     }`}
//                   />
//                   {fieldErrors.name && (
//                     <div className="text-red-500 text-sm">{fieldErrors.name}</div>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`bg-[#181914] border-b text-white py-2 outline-none ${
//                       fieldErrors.email ? 'border-red-500' : 'border-gray-600'
//                     }`}
//                   />
//                   {fieldErrors.email && (
//                     <div className="text-red-500 text-sm">{fieldErrors.email}</div>
//                   )}
//                 </div>

//                 {/* Experience Field */}
//                 <div>
//                   <input
//                     type="text"
//                     name="experience"
//                     placeholder="Years of experience"
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className={`bg-[#181914] border-b text-white py-2 outline-none ${
//                       fieldErrors.experience ? 'border-red-500' : 'border-gray-600'
//                     }`}
//                   />
//                   {fieldErrors.experience && (
//                     <div className="text-red-500 text-sm">{fieldErrors.experience}</div>
//                   )}
//                 </div>

//                 {/* Skills Field */}
//                 <div>
//                   <input
//                     type="text"
//                     name="skills"
//                     placeholder="Your key skills"
//                     value={formData.skills}
//                     onChange={handleChange}
//                     className={`bg-[#181914] border-b text-white py-2 outline-none ${
//                       fieldErrors.skills ? 'border-red-500' : 'border-gray-600'
//                     }`}
//                   />
//                   {fieldErrors.skills && (
//                     <div className="text-red-500 text-sm">{fieldErrors.skills}</div>
//                   )}
//                 </div>

//                 {/* Salary Budget Field */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <input
//                     type="text"
//                     name="salaryBudget"
//                     placeholder="Expected salary range"
//                     value={formData.salaryBudget}
//                     onChange={handleChange}
//                     className={`bg-[#181914] border-b text-white py-2 outline-none ${
//                       fieldErrors.salaryBudget ? 'border-red-500' : 'border-gray-600'
//                     }`}
//                   />
//                   {fieldErrors.salaryBudget && (
//                     <div className="text-red-500 text-sm">
//                       {fieldErrors.salaryBudget}
//                     </div>
//                   )}
//                 </div>

//                 {/* About Yourself Field */}
//                 <div className="col-span-1 sm:col-span-2">
//                   <input
//                     type="text"
//                     name="aboutYourself"
//                     placeholder="Tell us about yourself"
//                     value={formData.aboutYourself}
//                     onChange={handleChange}
//                     className={`bg-[#181914] border-b text-white py-2 outline-none ${
//                       fieldErrors.aboutYourself ? 'border-red-500' : 'border-gray-600'
//                     }`}
//                     rows={4}
//                   />
//                   {fieldErrors.aboutYourself && (
//                     <div className="text-red-500 text-sm">
//                       {fieldErrors.aboutYourself}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* File Upload and Submit Button */}
//               <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
//                 <div className="w-full sm:w-auto">
//                   <input
//                     type="file"
//                     id="cv"
//                     name="cv"
//                     onChange={handleFileChange}
//                     className="text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
//                   />
//                   {fieldErrors.file && (
//                     <div className="text-red-500 text-sm">{fieldErrors.file}</div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300 sm:self-stretch"
//                 >
//                   Submit →
//                 </button>
//               </div>
//             </>
//           )}
//         </form>

//         {/* Decorative Image Section */}
//         <div className="hidden lg:block relative w-full lg:w-1/2">
//           <Image src="/right.png" width={600} height={600} alt="Decorative image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Experience: '',
    Skills: '',
    SalaryBudget: '',
    AboutYourself: '',
  });
  const [file, setFile] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState(false);

// /*************  ✨ Codeium Command ⭐  *************/
// /******  998f8201-b1c0-4120-93dc-184e7c145eb2  *******/
//    * Handles input change event.
//    * 
//    * Updates the form data state with the new input value.
//    * If there was an error for the field, it also clears the error.
//    * 
//    * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
//    */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      if (fieldErrors.file) {
        setFieldErrors((prev) => ({ ...prev, file: '' }));
      }
    }
  };

  const formReset = () => {
    setFormData({
      Name: '',
      Email: '',
      Experience: '',
      Skills: '',
      SalaryBudget: '',
      AboutYourself: '',
    });
    setFile(null);
    setFieldErrors({});
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    const errors = {};
    if (!formData.Name) errors.Name = 'Name is required.';
    if (!formData.Email) errors.Email = 'Email is required.';
    if (!formData.Experience) errors.Experience = 'Experience is required.';
    if (!formData.Skills) errors.Skills = 'Skills are required.';
    if (!formData.SalaryBudget) errors.SalaryBudget = 'Salary Budget is required.';
    if (!formData.AboutYourself) errors.AboutYourself = 'This field is required.';
    if (!file) errors.file = 'Please upload your CV.';

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      // Prepare FormData for Strapi
      const formDataCV = new FormData();
      formDataCV.append('files.CV', file); // The key name should match Strapi's field name for the file
      formDataCV.append('data', JSON.stringify(formData));

      // Send data to Strapi API
      const response = await fetch('https://api.360xpertsolutions.com/api/cvs', {
        method: 'POST',
        body: formDataCV,
      });

      if (!response.ok) {
        throw new Error('Failed to upload data to Strapi');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);

      setSuccess(true);
      formReset();
    } catch (err) {
      console.error('Failed to submit form to Strapi:', err);
    }
  };

  return (
    <div className="flex items-start justify-center px-4 lg:px-8 py-8">
      <div className="w-full max-w-5xl p-8 relative flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full lg:w-2/3 space-y-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
            Contact Us
          </h2>

          {success ? (
            <div className="text-green-600 mb-4 text-center lg:text-left">
              Thank you for your submission!
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Full Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className={`bg-[#181914] border-b text-white py-2 outline-none ${
                      fieldErrors.Name ? 'border-red-500' : 'border-gray-600'
                    }`}
                  />
                  {fieldErrors.Name && (
                    <div className="text-red-500 text-sm">{fieldErrors.Name}</div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="Email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className={`bg-[#181914] border-b text-white py-2 outline-none ${
                      fieldErrors.Email ? 'border-red-500' : 'border-gray-600'
                    }`}
                  />
                  {fieldErrors.Email && (
                    <div className="text-red-500 text-sm">{fieldErrors.Email}</div>
                  )}
                </div>

                {/* Experience Field */}
                <div>
                  <input
                    type="text"
                    name="Experience"
                    placeholder="Years of experience"
                    value={formData.Experience}
                    onChange={handleChange}
                    className={`bg-[#181914] border-b text-white py-2 outline-none ${
                      fieldErrors.Experience ? 'border-red-500' : 'border-gray-600'
                    }`}
                  />
                  {fieldErrors.Experience && (
                    <div className="text-red-500 text-sm">{fieldErrors.Experience}</div>
                  )}
                </div>

                {/* Skills Field */}
                <div>
                  <input
                    type="text"
                    name="Skills"
                    placeholder="Your key skills"
                    value={formData.Skills}
                    onChange={handleChange}
                    className={`bg-[#181914] border-b text-white py-2 outline-none ${
                      fieldErrors.Skills ? 'border-red-500' : 'border-gray-600'
                    }`}
                  />
                  {fieldErrors.Skills && (
                    <div className="text-red-500 text-sm">{fieldErrors.Skills}</div>
                  )}
                </div>

                {/* Salary Budget Field */}
                <div className="col-span-1 sm:col-span-2">
                  <input
                    type="text"
                    name="SalaryBudget"
                    placeholder="Expected salary range"
                    value={formData.SalaryBudget}
                    onChange={handleChange}
                    className={`bg-[#181914] border-b text-white py-2 outline-none ${
                      fieldErrors.SalaryBudget ? 'border-red-500' : 'border-gray-600'
                    }`}
                  />
                  {fieldErrors.SalaryBudget && (
                    <div className="text-red-500 text-sm">
                      {fieldErrors.SalaryBudget}
                    </div>
                  )}
                </div>

                {/* About Yourself Field */}
                <div className="col-span-1 sm:col-span-2">
                  <input
                    type="text"
                    name="AboutYourself"
                    placeholder="Tell us about yourself"
                    value={formData.AboutYourself}
                    onChange={handleChange}
                    className={`bg-[#181914] border-b text-white py-2 outline-none ${
                      fieldErrors.AboutYourself ? 'border-red-500' : 'border-gray-600'
                    }`}
                    rows={4}
                  />
                  {fieldErrors.AboutYourself && (
                    <div className="text-red-500 text-sm">
                      {fieldErrors.AboutYourself}
                    </div>
                  )}
                </div>
              </div>

              {/* File Upload and Submit Button */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                <div className="w-full sm:w-auto">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    className="text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700"
                  />
                  {fieldErrors.file && (
                    <div className="text-red-500 text-sm">{fieldErrors.file}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition duration-300 sm:self-stretch"
                >
                  Submit →
                </button>
              </div>
            </>
          )}
        </form>

        {/* Decorative Image Section */}
        <div className="hidden lg:block relative w-full lg:w-1/2">
          <Image src="/right.png" width={600} height={600} alt="Decorative image" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
