// "use client"; 
// // Indicates this component should be rendered on the client side (in a Next.js application).

// import React, { useState, useEffect } from "react";
// // Importing React and hooks: useState for managing state and useEffect for side effects like fetching data.

// import Image from "next/image";
// // Importing Next.js's Image component for optimized image rendering.

// import Link from "next/link";
// // Importing Next.js's Link component for client-side navigation.

// import slugify from "slugify";
// // Importing slugify library to create URL-friendly slugs from blog titles.

// interface Blog {
//   id: string;
//   attributes: {
//     title: string;
//     content: Array<{
//       type: string;
//       image?: {
//         url: string;
//         alternativeText: string;
//       };
//     }>;
//   };
// }
// // Defining the TypeScript interface for a Blog object to ensure type safety.

// export default function BlogList() {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   // State to store the list of blogs fetched from the API.

//   const [isInView, setIsInView] = useState<Record<string, boolean>>({});
//   // State to track if a blog's container is in the viewport. Each blog ID maps to a boolean value.

//   useEffect(() => {
//     // useEffect to fetch blogs data when the component mounts.
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
//         // Fetching blogs from the API. The API URL is stored in an environment variable.

//         const data = await response.json();
//         // Parsing the JSON response.

//         setBlogs(data?.data || []);
//         // Updating the blogs state with the fetched data or an empty array if no data exists.
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         // Logging any errors that occur during the fetch operation.
//       }
//     };
//     fetchBlogs();
//   }, []);
//   // Empty dependency array ensures this effect runs only once when the component mounts.

//   useEffect(() => {
//     // useEffect for setting up an IntersectionObserver to track visibility of blog containers.
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Callback for when the observed element enters or leaves the viewport.
//         setIsInView((prev) => ({
//           ...prev,
//           [entry.target.id]: entry.isIntersecting,
//         }));
//         // Updating the isInView state based on whether the blog container is in the viewport.
//       },
//       { threshold: 0.5 }
//       // The blog is considered "in view" when 50% of its container is visible.
//     );

//     blogs.forEach((blog) => {
//       // Observing each blog's container by its ID.
//       const container = document.getElementById(blog.id);
//       if (container) observer.observe(container);
//     });

//     return () => {
//       // Cleanup function to unobserve blog containers when they are removed or when the component unmounts.
//       blogs.forEach((blog) => {
//         const container = document.getElementById(blog.id);
//         if (container) observer.unobserve(container);
//       });
//     };
//   }, [blogs]);
//   // Re-run this effect whenever the blogs array changes.

//   return (
//     <div className="mt-16">
//       {/* Main container for the blog list */}
//       {blogs.length > 0 ? (
//         // Check if there are blogs to display
//         blogs.map((blog) => {
//           const contentImages = blog.attributes.content.filter((content) => content.type === "image");
//           // Extracting image content from the blog's content array.

//           const leftImage = contentImages[0]?.image;
//           // The first image to be displayed on the left side.

//           const rightImage = contentImages[1]?.image || contentImages[0]?.image;
//           // The second image to be displayed on the right side. If unavailable, reuse the first image.

//           return (
//             <div
//               key={blog.id}
//               id={blog.id}
//               // Assigning a unique ID to each blog's container.
//               className={`flex justify-center items-center h-[350px] bg-[#181815] overflow-hidden mt-16 transition-opacity duration-700 ${
//                 isInView[blog.id] ? "opacity-100" : "opacity-0"
//               }`}
//               // Dynamic classes for smooth fade-in effect when the blog enters the viewport.
//             >
//               <div className="relative w-[90%] sm:w-[500px] h-[250px] sm:h-[300px]">
//                 {/* Wrapper for the blog content */}
//                 {leftImage && (
//                   <div
//                     className={`absolute left-0 top-0 w-[80%] sm:w-[300px] h-full bg-white bg-opacity-10 border border-white/10 shadow-xl rounded-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 ease-in-out ${
//                       isInView[blog.id] ? "-translate-x-[90%] rotate-12" : "translate-x-0"
//                     }`}
//                     // Left image container with animation based on isInView state.
//                   >
//                     <Image
//                       src={leftImage.url}
//                       alt={leftImage.alternativeText}
//                       layout="fill"
//                       objectFit="cover"
//                       quality={100}
//                       // Rendering the left image.
//                     />
//                   </div>
//                 )}

//                 {rightImage && (
//                   <div
//                     className={`absolute right-0 top-0 w-[80%] sm:w-[300px] h-full bg-white bg-opacity-10 border border-white/10 shadow-xl rounded-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 ease-in-out ${
//                       isInView[blog.id] ? "translate-x-[90%] -rotate-12" : "translate-x-0"
//                     }`}
//                     // Right image container with animation based on isInView state.
//                   >
//                     <Image
//                       src={rightImage.url}
//                       alt={rightImage.alternativeText}
//                       layout="fill"
//                       objectFit="cover"
//                       quality={100}
//                       // Rendering the right image.
//                     />
//                   </div>
//                 )}

//                 <div
//                   className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-0 transition-opacity duration-500 ease-in-out"
//                   style={{ opacity: isInView[blog.id] ? 1 : 0 }}
//                   // Title container with fade-in effect.
//                 >
//                   <Link
//                     href={`/engineering/${blog.id}/${slugify(blog.attributes.title, { lower: true, strict: true })}`}
//                     // Link to the detailed blog page with a slugified title.
//                   >
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display']">
//                       {blog.attributes.title}
//                     </h1>
//                     {/* Blog title with gradient text */}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       ) : (
//         <div className="text-center text-white">No blogs available or data is loading...</div>
//         // Fallback message when no blogs are available.
//       )}
//     </div>
//   );
// }




"use client";
// Indicates this component should be rendered on the client side (in a Next.js application).

import React, { useState, useEffect } from "react";
// Importing React and hooks: useState for managing state and useEffect for side effects like fetching data.

import Image from "next/image";
// Importing Next.js's Image component for optimized image rendering.

import Link from "next/link";
// Importing Next.js's Link component for client-side navigation.

import slugify from "slugify";
// Importing slugify library to create URL-friendly slugs from blog titles.

interface Blog {
  id: string;
  attributes: {
    title: string;
    content: Array<{
      type: string;
      image?: {
        url: string;
        alternativeText: string;
      };
    }>;
  };
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isInView, setIsInView] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        console.log("afksjgkvaus",response);
        const data = await response.json();
        console.log("afksjgkvaus",data.data);
        setBlogs(data?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));
      },
      { threshold: 0.5 }
    );

    blogs.forEach((blog) => {
      const container = document.getElementById(blog.id);
      if (container) observer.observe(container);
    });

    return () => {
      blogs.forEach((blog) => {
        const container = document.getElementById(blog.id);
        if (container) observer.unobserve(container);
      });
    };
  }, [blogs]);

  return (
    <div className="mt-16">
      {blogs.length > 0 ? (
        blogs.map((blog) => {
          const contentImages = blog.attributes.content.filter((content) => content.type === "image");
          const leftImage = contentImages[0]?.image;
          const rightImage = contentImages[1]?.image || contentImages[0]?.image;

          return (
            <div
              key={blog.id}
              id={blog.id}
              className={`flex justify-center items-center h-[350px] bg-[#181815] overflow-hidden mt-16 transition-opacity duration-700 ${
                isInView[blog.id] ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-[90%] sm:w-[500px] h-[250px] sm:h-[300px]">
                {leftImage && (
                  <div
                    className={`absolute left-0 top-0 w-[80%] sm:w-[300px] h-full bg-white bg-opacity-10 border border-white/10 shadow-xl rounded-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 ease-in-out ${
                      isInView[blog.id] ? "-translate-x-[90%] rotate-12" : "translate-x-0"
                    }`}
                  >
                    <Image
                      src={leftImage.url}
                      alt={leftImage.alternativeText}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                )}

                {rightImage && (
                  <div
                    className={`absolute right-0 top-0 w-[80%] sm:w-[300px] h-full bg-white bg-opacity-10 border border-white/10 shadow-xl rounded-lg backdrop-blur-lg overflow-hidden transition-transform duration-700 ease-in-out ${
                      isInView[blog.id] ? "translate-x-[90%] -rotate-12" : "translate-x-0"
                    }`}
                  >
                    <Image
                      src={rightImage.url}
                      alt={rightImage.alternativeText}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </div>
                )}

                <div
                  className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: isInView[blog.id] ? 1 : 0 }}
                >
                  <Link
                    // href={`/engineering/${blog.id}/${slugify(blog.attributes.title, { lower: true, strict: true })}`}
                    href={`/BlogDetail/${blog.id}`}
                    className="text-center"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] font-['Clash_Display']">
                      {blog.attributes.title}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-white">No blogs available or data is loading...</div>
      )}
    </div>
  );
}
