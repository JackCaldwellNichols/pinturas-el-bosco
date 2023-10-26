import React from 'react'
import styles from './sobre.module.scss'
import {FaThumbsUp, FaCashRegister, FaHourglass} from 'react-icons/fa'
import {AiOutlineSafety} from 'react-icons/ai'

const Sobre = () => {
  return (
    <div className={styles.sobre} id='about'>
    <div className={styles.top}>
        <h1>¿Pensando en un cambio?</h1>
        <h3>
Bienvenido a Pinturas el Bosco, donde la experiencia se encuentra con la artesanía. Ofrecemos una experiencia transformadora en pintura y decoración:

En Pinturas el Bosco, puede esperar una meticulosa artesanía, diseño personalizado y materiales de primera calidad para resultados duraderos y impresionantes. Nuestra dedicación a la profesionalidad garantiza una entrega puntual y dentro del presupuesto, superando consistentemente las expectativas.

Con una tarificación transparente y servicios versátiles adaptables a proyectos residenciales, comerciales o especializados, damos vida a tu visión única. Priorizamos prácticas respetuosas con el medio ambiente, ofreciendo belleza con una conciencia clara.

Tu visión es nuestro enfoque, abrazada a través de una comunicación abierta y un historial probado que se muestra en nuestro portafolio. En Pinturas el Bosco, cada proyecto es una pasión por la perfección, transformando tu espacio en una obra maestra. Elijanos para una experiencia concisa, centrada en los detalles, donde tu satisfacción es nuestra prioridad.
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