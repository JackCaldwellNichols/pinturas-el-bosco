

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './nav.module.scss'
import {AiTwotonePhone} from 'react-icons/ai'


const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <a href="" className={styles.navLinkLogo}>
          <Image height={300} width={300} src='/peblogo.png' className={styles.logo}/>
        </a>
      </div>
      <div className={styles.navCentre}>
      <a href="#about" className={styles.navLink}>
          Sobre Nosotros
        </a>
        <a href="#services" className={styles.navLink}>
          Residencial
        </a>
        <a href="#services" className={styles.navLink}>
          Comercial
        </a>
        <a href="#gallery" className={styles.navLink}>
          Nuestro Trabajo
        </a>
        <a href="#contact" className={styles.navLink}>
          Contacto
        </a>
      </div>
      <div className={styles.navRight}>
          <AiTwotonePhone className={styles.navIcon}/>
          <span className={styles.phone}>612 456 123</span>
      </div>
    </div>
  )
}

export default Navbar