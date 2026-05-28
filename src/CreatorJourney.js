import React from 'react';

export default function CreatorJourney() {
  // Timeline milestones tracking the "from zero" brand evolution
  const milestones = [
    {
      id: 1,
      phase: "Phase 01",
      title: "The Genesis Vision",
      description: "Laying down the structural architecture for a global storytelling platform and mapping out the mythic landscape narratives."
    },
    {
      id: 2,
      phase: "Phase 02",
      title: "Digital Foundation",
      description: "Launching the flagship network hub and deploying production-ready modern web frameworks to scale with our global content."
    },
    {
      id: 3,
      phase: "Phase 03",
      title: "Global Exploration & Productions",
      description: "Commencing intentional international travel to capture ancient history, landmarks, and high-end cultural documentaries."
    }
  ];

  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTop: '1px solid rgba(212, 175, 55, 0.1)'
    },
    container: {
      maxWidth: '900px',
      width: '100%',
    },
    headerRow: {
      textAlign: 'center',
      marginBottom: '80px',
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
    timeline: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '60px'
    },
    // The vertical line connecting the nodes
    verticalLine: {
      position: 'absolute',
      left: '15px',
      top: '10px',
      bottom: '10px',
      width: '1px',
      background: 'linear-gradient(to bottom, #D4AF37, rgba(212, 175, 55, 0.1))',
      zIndex: 1
    },
    item: {
      position: 'relative',
      display: 'flex',
      gap: '40px',
      paddingLeft: '50px',
      zIndex: 2
    },
    node: {
      position: 'absolute',
      left: '10px',
      top: '6px',
      width: '11px',
      height: '11px',
      backgroundColor: '#0A0A0A',
      border: '2px solid #D4AF37',
      borderRadius: '50%',
    },
    phaseLabel: {
      color: '#D4AF37',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontWeight: '600',
      minWidth: '80px',
      paddingTop: '4px'
    },
    contentBlock: {
      maxWidth: '650px'
    },
    itemTitle: {
      fontFamily: "'Cinzel', serif",
      color: '#FFFFFF',
      fontSize: '1.4rem',
      fontWeight: '400',
      letterSpacing: '0.05em',
      marginBottom: '12px'
    },
    itemDescription: {
      color: '#A0A0A0',
      fontSize: '1rem',
      lineHeight: '1.7',
      fontWeight: '300',
      letterSpacing: '0.03em'
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        <div style={styles.headerRow}>
          <span style={styles.tagline}>Behind the Scenes</span>
          <h2 style={styles.title}>The Creator Journey</h2>
        </div>

        <div style={styles.timeline}>
          <div style={styles.verticalLine} />
          
          {milestones.map((milestone) => (
            <div key={milestone.id} style={styles.item}>
              <div style={styles.node} />
              <div style={styles.phaseLabel}>{milestone.phase}</div>
              <div style={styles.contentBlock}>
                <h3 style={styles.itemTitle}>{milestone.title}</h3>
                <p style={styles.itemDescription}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
