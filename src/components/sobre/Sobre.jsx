import React from 'react'
import styles from './sobre.module.scss'
import {FaThumbsUp, FaCashRegister, FaHourglass} from 'react-icons/fa'
import {AiOutlineSafety} from 'react-icons/ai'

const Sobre = () => {
  return (
    <div className={styles.sobre}>
    <div className={styles.top}>
        <h1>¿Por Qué Nosotros?</h1>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Tenetur, ipsa mollitia id facere laboriosam officia doloremque veniam sed. 
          Placeat deserunt consectetur sequi, ex harum debitis architecto aperiam vitae incidunt, 
          suscipit quis voluptate iusto reiciendis corrupti libero fugiat voluptates, quidem culpa voluptatem nam. Atque quasi, 
          incidunt voluptatem, eos inventore quidem, maiores dignissimos aspernatur placeat consequuntur aliquid ducimus veniam saepe. Quisquam, delectus. Neque explicabo placeat cumque adipisci quidem rem blanditiis eos, culpa ducimus vel quod esse sit totam accusamus veritatis iure suscipit repellendus laborum, expedita quos similique modi voluptate. 
          Excepturi unde libero officiis amet soluta eaque molestias natus harum, est deleniti laboriosam.
        </h3>
      </div> 
      <div className={styles.bottom}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3>Experiencia</h3>
              <FaHourglass className={styles.cardIcon}/>
              <span>¡Llama ahora para un presupuesto sin compromiso!</span>
            </div>
            <div className={styles.card}>
              <h3>Calidad</h3>
              <FaThumbsUp className={styles.cardIcon}/>
              <span>Echa un vistazo a nuestro trabajo.</span>
            </div>
            <div className={styles.card}>
              <h3>Económico</h3>
              <FaCashRegister className={styles.cardIcon}/>
              <span>Ofrecemos servios tanto interior com exterior para tu vivienda.</span>
            </div>
            <div className={styles.card}>
              <h3>Profesionalidad</h3>
              <AiOutlineSafety className={styles.cardIcon}/>
              <span>Ofrecemos servicios de alta-calidad para tu negocio.</span>
            </div>
          </div>
        </div>
 </div>
  )
}

export default Sobre