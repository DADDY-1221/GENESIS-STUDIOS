import React from 'react';

export default function FutureExpansion() {
  const customStyles = {
    section: {
      padding: '120px 24px 60px 24px',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)'
    },
    container: {
      maxWidth: '900px',
      width: '100%',
      textAlign: 'center'
    },
    tagline: {
      color: '#D4AF37',
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      fontSize: '11px',
      fontWeight: '600',
      display: 'block',
      marginBottom: '16px'
    },
    title: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '400',
      color: '#FFFFFF',
      letterSpacing: '0.05em',
      marginBottom: '24px'
    },
    description: {
      color: '#A0A0A0',
      fontSize: '1.05rem',
      lineHeight: '1.8',
      fontWeight: '300',
      letterSpacing: '0.05em',
      maxWidth: '700px',
      margin: '0 auto 48px auto'
    },
    pitchBox: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginBottom: '80px',
      textAlign: 'left'
    },
    pitchItem: {
      padding: '24px',
      backgroundColor: '#121212',
      border: '1px solid rgba(255,255,255,0.03)',
      borderRadius: '2px'
    },
    pitchTitle: {
      fontFamily: "'Cinzel', serif",
      color: '#D4AF37',
      fontSize: '1.1rem',
      fontWeight: '400',
      marginBottom: '8px',
      letterSpacing: '0.05em'
    },
    pitchText: {
      color: '#808080',
      fontSize: '0.9rem',
      lineHeight: '1.5',
      fontWeight: '300'
    },
    footerLine: {
      width: '100%',
      height: '1px',
      backgroundColor: 'rgba(255,255,255,0.05)',
      marginBottom: '40px'
    },
    copyright: {
      color: '#505050',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  };

  return (
    <section style={customStyles.section}>
      <div style={customStyles.container}>
        
        <span style={customStyles.tagline}>Scaling the Vision</span>
        <h2 style={customStyles.title}>Future Expansion</h2>
        
        <p style={customStyles.description}>
          Genesis Studios is scaling into a fully integrated creative media company and future production studio. 
          We are establishing professional partnerships for high-end travel productions and global creative campaigns.
        </p>

        <div style={customStyles.pitchBox}>
          <div style={customStyles.pitchItem}>
            <h3 style={customStyles.pitchTitle}>Documentaries</h3>
            <p style={customStyles.pitchText}>In-depth cultural storytelling and mythic historical expeditions.</p>
          </div>
          <div style={customStyles.pitchItem}>
            <h3 style={customStyles.pitchTitle}>Campaigns</h3>
            <p style={customStyles.pitchText}>Premium digital media assets designed for luxury global brands.</p>
          </div>
          <div style={customStyles.pitchItem}>
            <h3 style={customStyles.pitchTitle}>Partnerships</h3>
            <p style={customStyles.pitchText}>Co-productions and strategic alliances with international networks.</p>
          </div>
        </div>

       <div style={customStyles.footerLine} />
        
        <p style={customStyles.copyright}>
          &copy; {new Date().getFullYear()} Genesis Studios | Global Production Hub.
        </p>
      </div>
    </section>
  );
}
