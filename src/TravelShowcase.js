import React from 'react';

const TravelShowcase = () => {
  const destinations = [
    { title: "THE ETHIOPIAN HIGHLANDS", location: "ETHIOPIA" },
    { title: "MYTHIC TURKISH COASTS", location: "TURKEY" }
  ];

  return (
    <section style={{ padding: '100px 50px', backgroundColor: '#050505' }}>
      <h2 style={{ color: '#FFFFFF', fontSize: '30px', letterSpacing: '0.2em', marginBottom: '50px', textAlign: 'center', textTransform: 'uppercase' }}>
        Destinations
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        {destinations.map((dest, index) => (
          <div key={index} style={{ height: '500px', border: '1px solid #333', display: 'flex', alignItems: 'flex-end', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
            <div>
              <h3 style={{ color: '#FFFFFF', fontSize: '24px', letterSpacing: '0.1em' }}>{dest.title}</h3>
              <p style={{ color: '#C5A059', fontSize: '12px', letterSpacing: '0.3em', marginTop: '10px' }}>{dest.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelShowcase;
