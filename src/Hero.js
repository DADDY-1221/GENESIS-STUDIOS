import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Keeping your styles for structure, but animating via Framer
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } }
  };

  return (
    <section style={/* ...your styles object from above... */}>
      <div style={styles.bgOverlay} />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={styles.content}
      >
        <span style={styles.tagline}>The Digital Headquarters</span>
        
        <h1 style={styles.title}>
          GENESIS <span style={styles.goldText}>STUDIOS</span>
        </h1>
        
        <p style={styles.description}>
          A global media ecosystem built around cinematic travel, luxury exploration, and profound creative storytelling.
        </p>
        
        <div style={styles.btnContainer}>
          <button style={styles.primaryBtn} onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
            Explore Content
          </button>
          <button style={styles.secondaryBtn}>The Creator Journey</button>
        </div>
      </motion.div>
    </section>
  );
}
