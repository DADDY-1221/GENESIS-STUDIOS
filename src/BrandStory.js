import React from 'react';

export default function BrandStory() {
  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#0A0A0A', // Staying dark & cinematic
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '1px solid rgba(212, 175, 55, 0.15)' // Subtle gold divider line
    },
    container: {
      maxWidth: '900px',
      width: '100%',
    },
    headerRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '48px'
    },
    tagline: {
      color: '#D4AF37',
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      fontSize: '11px',
      fontWeight: '600'
    },
    title: {
      fontFamily: "'Cinzel', serif",
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      fontWeight: '400',
      color: '#FFFFFF',
      letterSpacing: '0.05em'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginTop: '20px'
    },
    bodyText: {
      color: '#A0A0A0',
      fontSize: '1.05rem',
      lineHeight: '1.8',
      fontWeight: '300',
      letterSpacing: '0.05em'
    },
    highlightText: {
      color: '#FFFFFF',
      borderLeft: '2px solid #D4AF37',
      paddingLeft: '20px',
      fontSize: '1.2rem',
      lineHeight: '1.7',
      fontStyle: 'italic',
      fontWeight: '300'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        <div style={styles.headerRow}>
          <span style={styles.tagline}>The Vision & Soul</span>
          <h2 style={styles.title}>Our Brand Story</h2>
        </div>

        <div style={styles.grid}>
          <div>
            <p style={styles.bodyText}>
              Genesis Studios represents the intersection of luxury exploration and modern digital filmmaking. 
              We don't just capture landscapes; we seek the emotional narratives rooted in global culture, 
              ancient history, and the profound human experiences that bind us together across the map[cite: 1].
            </p>
          </div>
          <div>
            <p style={styles.highlightText}>
              "More than a media presence—this is the foundation of a global cinematic travel ecosystem built around creativity and relentless exploration[cite: 1]."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
