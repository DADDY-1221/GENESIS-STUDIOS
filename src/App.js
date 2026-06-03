import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import TravelShowcase from './TravelShowcase';
import BrandStory from './BrandStory';
import Footer from './Footer'; // Add this

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TravelShowcase />
      <BrandStory />
      <Footer /> {/* Add the footer here */}
    </div>
  );
}

export default App;
