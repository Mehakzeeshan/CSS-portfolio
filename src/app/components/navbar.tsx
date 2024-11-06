"use client";

import React, { useState } from 'react';
import styles from "@/app/page.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdPerson3 } from "react-icons/md";

const Navbar = () => {
  // State to control menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      {/* Hamburger Menu Icon */}
      <div className={styles.menu} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      {/* Menu Items */}
      <ul className={`${styles.text} ${isMenuOpen ? styles.show : ""}`}>
        <li className={styles.navItem}>
          <p className={styles.icons}><FaHome /></p>
          <a href="/" className={styles.link}>Home</a>
        </li>
        <li className={styles.navItem}>
          <p className={styles.icons}><MdPerson3 /></p>
          <a href="/about" className={styles.link}>About</a>
        </li>
        <li className={styles.navItem}>
          <p className={styles.icons}><FaPhoneAlt /></p>
          <a href="/contact" className={styles.link}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
