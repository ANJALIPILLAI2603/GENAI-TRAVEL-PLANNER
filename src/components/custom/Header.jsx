import React from "react";
import { Link } from "react-router-dom";
import { Button } from '../ui/button'; // Assuming this is correct

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 w-full bg-[#3490f2]">
      <div className="flex items-center">
        <img 
          src="/Trip Ease.png" // Ensure the correct path for the image
          alt="Trip Ease Logo" 
          style={{ width: '70px', height: 'auto' }}
          loading="lazy"
        />
        <h5 className="font-bold font-serif text-[30px] ml-3" style={{ color: "white" }}>
          Trip Ease
        </h5>
      </div>

      {/* Sign In button */}
      <div>
        <Link to="/SignIn">
          <Button 
            className="bg-[#3490f2] text-white px-6 py-2 rounded"
            style={{ fontSize: "1.5rem", borderRadius: "8px", padding: "10px 20px" }}
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
