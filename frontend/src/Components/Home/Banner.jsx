import React from "react";
import img1 from "../../assets/Images/banner03.png";

import NavBar from "../NavBar/NavBar";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Image container with full width and height */}
      <img src={img1} alt="Banner" className="w-full h-full object-cover" />

      {/* NavBar positioned inside the image */}
      <div className="absolute top-0 left-0 w-full z-20">
        <NavBar />
      </div>

      {/* Quote and Button */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 z-10">
        {/* Quote on the left */}
        <h2 className="text-white text-sm md:text-lg lg:text-4xl font-Poppins-SemiBoldItalic max-w-xs md:max-w-sm lg:max-w-md">
          "A small inspirational quote that fits perfectly at the bottom left of the banner."
        </h2>

        {/* Button below the quote in mobile view */}
        <button className=" text-gray-900 font-bold py-2 px-2 lg:py-4 lg:px-4 rounded-xl shadow-lg hover:bg-gray-700 hover:text-white transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;




