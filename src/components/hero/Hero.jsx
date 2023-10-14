import React from 'react'
import styles from './hero.module.scss'
import Image from 'next/image'



const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image src='https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg' fill className={styles.heroImg}/>
      <div className={styles.heroBanner}>
        <div className={styles.cover}></div>
        <h1>
          Servicios de Pintura Profesional
        </h1>
        <h3>Llamanos ahora para un presupuesto sin compromiso</h3>
      </div>
    </div>  
  )
}

export default Hero