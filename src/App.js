import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar'; // Import the new file

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add it here */}
      <Hero />
    </div>
  );
}

export default App;
