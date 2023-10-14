import React from 'react'
import styles from './about.module.scss'
import {FaThumbsUp} from 'react-icons/fa'

const About = () => {



  return (
    <div className={styles.about}>
      <div className={styles.bottom}>
      <h1>¿Pensando en un cambio? </h1>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3>Presupuesto sin compromiso</h3>
              <FaThumbsUp className={styles.cardIcon}/>
              <span>¡Llama ahora para un presupuesto sin compromiso!</span>
            </div>
            <div className={styles.card}>
              <h3>Nuestro Trabajo</h3>
              <FaThumbsUp className={styles.cardIcon}/>
              <span>Echa un vistazo a nuestro trabajo.</span>
            </div>
            <div className={styles.card}>
              <h3>Servicios Residenciales</h3>
              <FaThumbsUp className={styles.cardIcon}/>
              <span>Ofrecemos servios tanto interior com exterior para tu vivienda.</span>
            </div>
            <div className={styles.card}>
              <h3>Servicios Comerciales</h3>
              <FaThumbsUp className={styles.cardIcon}/>
              <span>Ofrecemos servicios de alta-calidad para tu negocio.</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About