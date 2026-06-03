import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import TravelShowcase from './TravelShowcase';
import BrandStory from './BrandStory'; // Add this

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TravelShowcase />
      <BrandStory /> {/* Add the story here */}
    </div>
  );
}

export default App;
