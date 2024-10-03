import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation for route detection
import Header from "./components/custom/Header.jsx"; // Import Header component
import Hero from "./components/custom/Hero.jsx"; // Import Hero component
import "./App.css"; // Import global CSS

function App() {
  const location = useLocation(); // Get current location

  return (
    <div>
      {/* Header is rendered at the top of every page */}
      <Header />

      {/* Show Hero section only on the homepage */}
      {location.pathname === '/' && <Hero />}

      {/* This Outlet will render the nested routes (SignIn, CreateTrip, etc.) */}
      <Outlet />
    </div>
  );
}

export default App;
