import React from 'react';
import Hero from './Hero';
import BrandStory from './BrandStory';
import TravelShowcase from './TravelShowcase'; // 1. Added the import

function App() {
  return (
    <div>
      <Hero />
      <BrandStory />
      <TravelShowcase /> {/* 2. Placed it right below the Brand Story */}
    </div>
  );
}

export default App;
