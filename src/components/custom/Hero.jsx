import React from "react";
import { Link } from 'react-router-dom'; // Import Link

function Hero() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto gap-9"> {/* Changed width */}
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your New Adventure with AI:
        </span>
        <div> {/* This div will create a line break */}
          Where Every Journey is Customized for You.
        </div>
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Unleash your new adventure with AI. TripEase uses advanced technology to
        craft unique travel experiences tailored to you, guiding you to
        unforgettable destinations.
      </p>
      <Link to="/get-started"> {/* Change '/get-started' to your desired route */}
        <button className="bg-[#f56551] text-white px-4 py-2 rounded">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Hero;
