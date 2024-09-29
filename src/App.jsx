import React, { useState } from 'react'; // Import React and useState
import "./App.css";
import { Button } from "./components/ui/button";
import Hero from "./components/custom/Hero.jsx"; // Use forward slashes for path

function App() {
  const [count, setCount] = useState(0); // This will work now

  return (
    <>
      {/* hero */}
      <Hero />
      {/* Other components or content can go here */}
    </>
  );
}

export default App;
