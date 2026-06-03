import React from 'react';

const Navbar = () => {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '30px 50px',
      zIndex: 100,
      color: '#FFFFFF'
    },
    logo: {
      fontSize: '18px',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      fontWeight: '300'
    },
    links: {
      display: 'flex',
      gap: '40px',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Genesis</div>
      <div style={styles.links}>
        <span>Destinations</span>
        <span>Story</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
