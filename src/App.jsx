import React, { useState } from 'react'; // Import React and useState
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero.jsx"; // Corrected import path for Hero component

function App() {
  const [count, setCount] = useState(0); // Now this will work

  return (
    <>
      {/* hero */}
      <Hero />
      {/* Other components or content can go here */}
    </>
  );
}

export default App;

