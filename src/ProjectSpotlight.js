import React from 'react';

const ProjectSpotlight = () => {
  const styles = {
    section: {
      padding: '100px 50px',
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      textAlign: 'center'
    },
    title: {
      fontSize: '2rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: '50px',
      fontFamily: "'Playfair Display', serif"
    },
    card: {
      border: '1px solid #333',
      padding: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      transition: '0.3s'
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Current Works</h2>
      <div style={styles.card}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>THE FALLEN</h3>
        <p style={{ color: '#C5A059', fontSize: '12px', letterSpacing: '0.2em' }}>MYTHIC THRILLER</p>
        <p style={{ marginTop: '20px', lineHeight: '1.8', color: '#A0A0A0' }}>
          An exploration of the intellectual warrior archetype set against a backdrop of celestial themes.
        </p>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
