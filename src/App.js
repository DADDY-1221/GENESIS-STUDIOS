import React from 'react';
import Hero from './Hero';
import BrandStory from './BrandStory';
import TravelShowcase from './TravelShowcase';
import CreatorJourney from './CreatorJourney'; // 1. Added the import

function App() {
  return (
    <div>
      <Hero />
      <BrandStory />
      <TravelShowcase />
      <CreatorJourney /> {/* 2. Placed it right below the Showcase */}
    </div>
  );
}

export default App;
