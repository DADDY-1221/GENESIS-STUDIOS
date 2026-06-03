import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      padding: '80px 50px',
      backgroundColor: '#050505',
      borderTop: '1px solid #1a1a1a',
      textAlign: 'center',
      color: '#A0A0A0',
      fontSize: '12px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase'
    },
    cta: {
      marginBottom: '40px',
      fontSize: '1.5rem',
      color: '#FFFFFF',
      fontFamily: "'Playfair Display', serif"
    },
    links: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginBottom: '30px'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.cta}>Let's Create Together</div>
      <div style={styles.links}>
        <span>Instagram</span>
        <span>YouTube</span>
        <span>Email</span>
      </div>
      <p>© 2026 GENESIS STUDIOS. ALL RIGHTS RESERVED.</p>
    </footer>
  );
};

export default Footer;
