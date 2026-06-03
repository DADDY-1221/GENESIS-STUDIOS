import React from 'react';

export default function Hero() {
  const styles = {
    section: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    bgOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "linear-gradient(to top, #0A0A0A, transparent, rgba(10,10,10,0.7)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.35,
      zIndex: 1
    },
    content: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '800px',
      padding: '0 20px',
    },
    tagline: {
      color: '#D4AF37',
      textTransform: 'uppercase',
      letterSpacing: '0.4em',
      fontSize: '13px',
      fontWeight: '600',
      marginBottom: '20px',
      display: 'block'
    },
    title: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: '400',
      letterSpacing: '0.1em',
      marginBottom: '24px',
      color: '#FFFFFF'
    },
    goldText: {
      color: '#D4AF37'
    },
    description: {
      color: '#A0A0A0',
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
      letterSpacing: '0.08em',
      lineHeight: '1.8',
      fontWeight: '300',
      marginBottom: '40px'
    },
    btnContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      padding: '12px 32px',
      backgroundColor: '#D4AF37',
      color: '#0A0A0A',
      border: 'none',
      fontWeight: '600',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontSize: '11px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    secondaryBtn: {
      padding: '12px 32px',
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      border: '1px solid rgba(255,255,255,0.2)',
      fontWeight: '500',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      fontSize: '11px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.bgOverlay} />
      <div style={styles.content}>
        <span style={styles.tagline}>The Digital Headquarters</span>
        <h1 style={styles.title}>
          GENESIS <span style={styles.goldText}>STUDIOS</span>
        </h1>
        <p style={styles.description}>
          A global media ecosystem built around cinematic travel, luxury exploration, and profound creative storytelling.
        </p>
        <div style={styles.btnContainer}>
          <button style={styles.primaryBtn}>Explore Content</button>
          <button style={styles.secondaryBtn}>The Creator Journey</button>
        </div>
      </div>
    </section>
  );
}
