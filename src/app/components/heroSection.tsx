import React from 'react';
import styles from "@/app/page.module.css";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      {/* Right - Image */}
      <div className={styles.imageContainer}>
        <Image src='/hero-image4.webp' alt='Hero Image'  width={650} height={600}className={styles.image} />
      </div>

      {/* Left - Text */}
      <div className={styles.textContainer}>
        <h1>
          <span style={{ color: '#333' }}>M</span>
          <span style={{ color: '#E04343' }}>E</span>
          <span style={{ color: '#333' }}>H</span>
          <span style={{ color: '#333' }}>A</span>
          <span style={{ color: '#333' }}>K</span>
          <br />
          <span style={{ color: '#a1a9b0' }}>N</span>
          <span style={{ color: '#ffe800' }}>O</span>
          <span style={{ color: '#a1a9b0' }}>O</span>
          <span style={{ color: '#ffe800' }}>R</span>
        </h1>
        <p className={styles.line}>Web Developer</p>
      </div>
    </div>
  );
}

export default HeroSection;
