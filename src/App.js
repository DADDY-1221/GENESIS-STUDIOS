import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import TravelShowcase from './TravelShowcase'; // Import the new file

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TravelShowcase /> {/* Add the showcase below the Hero */}
    </div>
  );
}

export default App;
