import React, { useState } from 'react'; // Import React and useState
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero.jsx"; 
import HotelRecommendation from './create-trip/HotelRecommendation';
import NavigationCircles from './create-trip/Navigation';
// Corrected import path for Hero component

function App() {
  const [count, setCount] = useState(0); // Now this will work

  return (
    <>
      {/* hero */}
      <Hero />
      {/* Other components or content can go here */}
      <HotelRecommendation />
      {/* Navigation Circles */}
      <NavigationCircles />
    </>
  );
}

export default App;

