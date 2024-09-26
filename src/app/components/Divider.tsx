import React from "react";

const Divider = () => {
  return (
    <div className="h-screen dark:bg-black w-full py-6 lg:py-16">
      <div className="w-full h-px max-w-6xl mx-auto my-20">
        <div
          className="h-px"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
      </div>

      <div className="w-full h-px max-w-6xl mx-auto my-20">
        <div
          className="h-px"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
      </div>
      <div className="w-full h-px max-w-6xl mx-auto py-1">
        <div
          className="h-px"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Divider;
