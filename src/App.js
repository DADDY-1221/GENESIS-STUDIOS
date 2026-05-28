import React from 'react';
import Hero from './Hero';
import BrandStory from './BrandStory'; // 1. Added the import

function App() {
  return (
    <div>
      <Hero />
      <BrandStory /> {/* 2. Placed it right below the Hero */}
    </div>
  );
}

export default App;
