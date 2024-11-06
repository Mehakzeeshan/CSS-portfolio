import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import styles from "@/app/page.module.css";
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.contactHead}>
        <h3 className={styles.contactBorder}> DROP <span style={{ color: '#E04343' }}>ME </span> A LINE</h3>
        </div>

        <div className={styles.contactBoxes}>
            <div className={styles.box}>
            <FaLocationDot />
            <h4>ADDRESS</h4>
            <p>I.I Chundrigarh Road, Karachi</p>
            </div>

            <div className={styles.box1}>
            <IoIosPhonePortrait  />
            <h4>PHONE</h4>
            <p>+92 3032438479</p>
            </div>

            <div className={styles.box}>
            <IoIosSend  />
            <h4>EMAIL</h4>
            <p>mehaknoor1001@gmail.com</p>
            </div>
        </div>

       <div className={styles.formSection}>
      
      <div>
      <Image src='/location-image.png' alt='google map' width={600} height={400} />
      </div>
        <form className={styles.form}>
          <div className={styles.nameEmail}>
          <div>
          <input
          name='name'
          type='text'
          id='name'
          required
          placeholder='Your name' 
          className={styles.formBox}/>
          </div>

          <div>
          <input
          name='email'
          type='emai'
          id='email'
          required
          placeholder='Email address' 
          className={styles.formBox1}/>
          </div>
          </div>

          <div>
          <input
          name='message'
          type='text'
          id='message'
          required
          placeholder='Write your message here...'
          className={styles.formBox2} />
          </div>
          <button className={styles.sendButton}>
          Send message
        </button>
        </form>
        </div>
        
        
        <div className={styles.linksButton}>
        <button className={styles.linkButton}>
          <a href="https://www.facebook.com/profile.php?id=100008692122997">
          <FaFacebookF className={styles.buttonText}/>
          </a>
        </button>

        <button className={styles.linkButton}>
          <a href="https://www.instagram.com/muhammadaslam5506/?hl=en">
          <FaInstagram className={styles.buttonText}/>
          </a>
        </button>

        <button className={styles.linkButton}>
          <a href="https://www.linkedin.com/in/mehak-noor-0b88862b4/">
          <FaLinkedinIn className={styles.buttonText}/>
          </a>
        </button>
        
       </div>

    </section>
  )
}

export default ContactSection;