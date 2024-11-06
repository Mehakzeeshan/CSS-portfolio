import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import styles from "@/app/page.module.css";

const Footer = () => {
  return (
    <section>
        <div className={styles.footer}>
            <p className={styles.textFooter}>All rights reserved.</p>
            <p className={styles.textFooter}> <FaRegCopyright  className={styles.footerIcon}/> 2024</p>
            <h5 className={styles.headFooter}>My Portfolio</h5>
        </div>
    </section>
  )
}

export default Footer;