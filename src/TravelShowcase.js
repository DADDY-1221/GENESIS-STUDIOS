import React from 'react';

export default function TravelShowcase() {
  const projects = [
    {
      id: 1,
      title: "Ancient Highlands",
      category: "Cinematic Travel",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Mythic Landscapes",
      category: "Documentary Project",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Global Culture Series",
      category: "Travel Production",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const styles = {
    section: {
      padding: '100px 24px',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
    },
    headerRow: {
      marginBottom: '48px',
    },
    tagline: {
      color: '#D4AF37',
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      fontSize: '11px',
      fontWeight: '600',
      display: 'block',
      marginBottom: '12px'
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
      gap: '30px'
    },
    card: {
      position: 'relative',
      height: '450px',
      backgroundColor: '#121212',
      overflow: 'hidden',
      cursor: 'pointer',
      borderRadius: '2px',
      border: '1px solid rgba(255,255,255,0.05)'
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      inset: 0,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.6,
      transition: 'transform 0.5s ease, opacity 0.5s ease'
    },
    cardOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(10,10,10,0.95) 10%, rgba(10,10,10,0.4) 50%, transparent 100%)',
      zIndex: 2
    },
    cardContent: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      padding: '30px',
      zIndex: 3
    },
    cardCategory: {
      color: '#D4AF37',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontWeight: '600',
      display: 'block',
      marginBottom: '8px'
    },
    cardTitle: {
      fontFamily: "'Cinzel', serif",
      color: '#FFFFFF',
      fontSize: '1.5rem',
      fontWeight: '400',
      letterSpacing: '0.05em'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        <div style={styles.headerRow}>
          <span style={styles.tagline}>Visual Portfolio</span>
          <h2 style={styles.title}>Cinematic Travel Showcase</h2>
        </div>

        <div style={styles.grid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={styles.card}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.transform = 'scale(1.05)';
                  img.style.opacity = '0.8';
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.style.transform = 'scale(1)';
                  img.style.opacity = '0.6';
                }
              }}
            >
              <div style={styles.imageContainer}>
                <img src={project.image} alt={project.title} style={styles.image} />
              </div>
              <div style={styles.cardOverlay} />
              <div style={styles.cardContent}>
                <span style={styles.cardCategory}>{project.category}</span>
                <h3 style={styles.cardTitle}>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
