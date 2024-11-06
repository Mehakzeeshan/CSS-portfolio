import React from 'react';
import styles from "@/app/page.module.css";
import { RiComputerLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";


const AboutSection = () => {
  return (
    <main>
    <div className={styles.about}>
        <h3 className={styles.aboutHeading}>A LITTLE <span style={{ color: '#ffe800' }}> ABOUT</span> ME</h3>
        <p className={styles.aboutPara}>Hello! I’m Mehak Noor Mohammad, a dedicated web developer with a passion for creating <span style={{ color: '#ffe800' }}>seamless</span>, user-friendly applications. My journey into tech began with a keen interest in web design and a drive to build interactive, functional digital spaces. Currently, I’m exploring full-stack development with a focus on Next.js, which I enjoy for its versatility and performance.</p>
    </div>

    <div>
        <div className={styles.panel}>
        <h3 className={styles.panelHeading}>I <span style={{ color: '#E04343' }}>DO </span> AMAZING THINGS FOR CLIENTS</h3>
        </div>
        <div className={styles.project}>
            <div className={styles.boxSkill}>
            <div className={styles.iconContainer}>
            <RiComputerLine  className={styles.skills}/>
            </div>
            <h3 className={styles.skillsHead}>Web Development</h3>
            <p className={styles.skillsPara}> 
            I strive to bring my clients’ visions to life while enhancing their brand identity.
            Skilled in responsive design and proficient in various design tools.
            </p>
            </div>

            <div className={styles.boxSkill}>
            <div className={styles.iconContainer}>
            <FaTools className={styles.skills}/>
            </div>
            <h3 className={styles.skillsHead}>Website Maintenance</h3>
            <p className={styles.skillsPara}> 
            I am a dedicated web maintenance specialist committed to ensuring that websites remain functional,
             secure, and up-to-date to maintain an engaging and efficient online presence. 
            </p>
            </div>


            <div className={styles.boxSkill}>
            <div className={styles.iconContainer}>
            <GrOptimize className={styles.skills}/>
            </div>
            <h3 className={styles.skillsHead}>SEO Optimization</h3>
            <p className={styles.skillsPara}>
            I am a passionate SEO optimization specialist dedicated to enhancing website visibility and driving
             organic traffic that improves rankings and attract the right audience. 
            </p>
            </div>
        </div>
    </div>
    </main>
  )
}

export default AboutSection;