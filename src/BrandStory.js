import React from 'react';

const BrandStory = () => {
  const styles = {
    section: {
      padding: '150px 10%',
      backgroundColor: '#0A0A0A',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    heading: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '200',
      letterSpacing: '0.15em',
      marginBottom: '40px',
      textTransform: 'uppercase',
    },
    text: {
      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
      lineHeight: '2',
      color: '#A0A0A0',
      maxWidth: '800px',
      margin: '0 auto',
      letterSpacing: '0.05em',
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>The Genesis Philosophy</h2>
      <p style={styles.text}>
        We believe that travel is not just about geography; it is about the stories we harvest along the way. 
        Genesis Studios is a collective dedicated to capturing the intersection of history, mythology, 
        and the human experience. Through a cinematic lens, we elevate the ordinary into the extraordinary.
      </p>
    </section>
  );
};

export default BrandStory;
