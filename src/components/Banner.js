import React from "react";
import bannerBg from "../assets/capsule.jpeg";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-white border-b-2 border-gray-300 px-4 py-3">
        <img src={logo} alt="Logo" className="w-22 h-12" />
      </nav>
      <div className="flex flex-wrap items-center justify-center lg:justify-between p-8">
      {/* Left side: Banner with heading and description */}
      <div className="w-full lg:w-1/2 px-4">
        <div className="700 text-black px-4 py-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">DRAGON</h1>
          <p className="text-lg">SENDING PEOPLE AND CARGO INTO SPACE</p>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <img
          src={bannerBg}
          alt="Your Alt Text"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
    </div>
  );
};

export default Banner;
