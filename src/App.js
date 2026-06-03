import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import TravelShowcase from './TravelShowcase';
import BrandStory from './BrandStory';
import ProjectSpotlight from './ProjectSpotlight'; // Import the new file
import Footer from './Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <TravelShowcase />
      <BrandStory />
      <ProjectSpotlight /> {/* Add it here before the footer */}
      <Footer />
    </div>
  );
}

export default App;
