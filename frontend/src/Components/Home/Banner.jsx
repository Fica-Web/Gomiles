import React from "react";
import img1 from "../../assets/Images/banner.png";

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

      {/* Center paragraph */}
      <div className="absolute  inset-0 flex items-center justify-center z-10">
        <div className=" text-center text-white space-y-4 max-w-xl mx-4 xl:max-w-2xl">
          <button 
            // style={{background: '#1bc4ab'}}
            className="text-sm md:text-base text-gray-900 font-bold py-2 px-2 lg:py-2 lg:px-4 rounded-full shadow-lg  hover:bg-gray-700 hover:text-white transition duration-300"
          >
            The Best Place To Start Your Trip
          </button>
          <p className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-Poppins-SemiBoldItalic ">
            Journey through <span className='font-against-regular text-2xl md:text-4xl xl:text-5xl'>Turkey,</span>  where every  <span className='font-against-regular text-2xl md:text-4xl xl:text-5xl'>path</span>  tells a <span className='font-against-regular text-2xl md:text-4xl xl:text-5xl'>story</span>
          </p>
        </div>
      </div>

      {/* Quote and Button */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 z-10">
        {/* Quote on the left */}
        <h2 className="text-white text-sm md:text-lg lg:text-xl font-Aceh-Light max-w-xs md:max-w-sm lg:max-w-md">
          "Explore the heart of Turkey, where every journey is a blend of rich history, vibrant culture, and unforgettable stories."
        </h2>

        {/* Button below the quote in mobile view */}
        <button
          className="text-white font-bold py-2 px-2 lg:py-4 lg:px-4 rounded-xl shadow-lg hover:bg-gray-700 hover:text-white transition duration-300"
          onClick={() => window.open("https://gomiles.netlify.app/", "_blank")}
        >
          Book Now
        </button>

      </div>
    </div>
  );
};

export default Banner;