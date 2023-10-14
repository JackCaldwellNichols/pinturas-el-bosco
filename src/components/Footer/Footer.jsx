import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'
import { BsPhone } from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {IoMdPin} from 'react-icons/io'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerLeft}>
          <div className={styles.footerImgCont}>
            <Image src='/peblogo.png' fill className={styles.footerLogo}/>
          </div>
          <div className={styles.contact}>
            <BsPhone className={styles.navIcon}/>
            <span className={styles.phone}>692 33 33 41</span>
          </div>
          <div className={styles.contact}>
            <AiOutlineMail className={styles.navIcon}/>
            <span className={styles.phone}>pinturaselbosco@gmail.com</span>
          </div>
          <div className={styles.contact}>
            <IoMdPin className={styles.navIcon}/>
            <span className={styles.phone}>Aranjuez, Madrid</span>
          </div>
        </div>
        <ul className={styles.footerRight}>
          <a>Servicios Residenciales</a>
          <a>Servicios Comerciales</a>
          <a>Por Qué nosotros</a>
          <a>Nuestro Trabajo</a>
          <a>Contacto</a>
        </ul>
      </div>  
    </div>
  )
}

export default Footer