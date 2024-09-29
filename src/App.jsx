import React, { useState } from 'react'; // Import useState
import './App.css';
import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>WELCOME TO TRIP EASE</h2>
      <Button>START NOW</Button>
    </>
  );
}

export default App;
