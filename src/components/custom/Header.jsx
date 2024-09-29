import React from "react";
import { Button } from '../ui/button'; // Adjust the path if necessary

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 w-full">
      {/* Flex container to hold the logo and title */}
      <div className="flex items-center">
        <img 
          src="public\Trip Ease.png" // Ensure the correct path for the image
          alt="Trip Ease Logo" 
          style={{ width: '10%', height: 'auto' }} // Adjust percentage for responsive sizing
          loading="lazy" // Lazy load for performance
        />
        {/* Title next to the logo */}
        <h5 className="font-bold text-[30px] ml-4">Trip Ease</h5> {/* Add margin-left for spacing */}
      </div>

      {/* Sign In button */}
      <div>
        <Button className="bg-[#0097b2] text-white px-4 py-2 rounded">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Header;
