<<<<<<< HEAD
import React, { useState } from 'react'; // Import React and useState
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero.jsx"; 
import HotelRecommendation from './create-trip/HotelRecommendation';
import NavigationCircles from './create-trip/Navigation';
// Corrected import path for Hero component
=======
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation for route detection
import Header from "./components/custom/Header.jsx"; // Import Header component
import Hero from "./components/custom/Hero.jsx"; // Import Hero component
import "./App.css"; // Import global CSS
>>>>>>> acbd5c8604ff41467dc5848127ff4abe7516cad3

function App() {
  const location = useLocation(); // Get current location

  return (
<<<<<<< HEAD
    <>
      {/* hero */}
      <Hero />
      {/* Other components or content can go here */}
      <HotelRecommendation />
      {/* Navigation Circles */}
      <NavigationCircles />
    </>
=======
    <div>
      {/* Header is rendered at the top of every page */}
      <Header />

      {/* Show Hero section only on the homepage */}
      {location.pathname === '/' && <Hero />}

      {/* This Outlet will render the nested routes (SignIn, CreateTrip, etc.) */}
      <Outlet />
    </div>
>>>>>>> acbd5c8604ff41467dc5848127ff4abe7516cad3
  );
}

export default App;
