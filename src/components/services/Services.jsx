import React from 'react'
import styles from './services.module.scss'
import Image from 'next/image'

const Services = () => {
  return (
    <div className={styles.services} id='services'>
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <h1>Servicios Residenciales</h1>
                <h3>En Pinturas el Bosco, ofrecemos más que simplemente pintura; proporcionamos una experiencia transformadora. Nuestro equipo destaca en la finalización eficiente de proyectos, atención al detalle y personalización para satisfacer sus preferencias únicas. Permítanos dar vida a su visión y hacer que su espacio sea verdaderamente excepcional.</h3>
                <ul>
                    <li>Pintura interior</li>
                    <li>Pintura exterior</li>
                    <li>Lacada de puertas y muebles</li>
                    <li>Barnizar maderas interior y exterior</li>
                    <li>Reparación de humedades</li>
                    <li>Piscinas</li>
                    <li>Microcemento</li>
                </ul>
                <button>Presupuesto sin compromiso</button>
            </div>
           <div className={styles.topRight}>
                <Image src='https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg' className='house' fill/>
            </div>
        </div>
        <div className={styles.bottom}>
        <div className={styles.btmLeft}>
                <h1>Servicios Comerciales</h1>
                <h3>En Pinturas el Bosco, nos especializamos en servicios de pintura y decoración personalizados diseñados exclusivamente para empresas locales. Nuestros servicios incluyen pintura experta de interiores y exteriores, acabados decorativos distintivos, servicios profesionales de papel tapiz, consulta corporativa de colores y gestión eficiente de proyectos. Eleva el entorno de tu empresa con el toque personalizado de Pinturas el Bosco. Contáctanos para una consulta y una cotización a medida.</h3>
                <ul>
                    <li>Comercios Locales</li>
                    <li>Centros de deporte</li>
                    <li>Centros de ocios</li>
                    <li>Alojamientos</li>
                </ul>
                <button>Presupuesto sin compromiso</button>
            </div>
           <div className={styles.btmRight}>
                <Image src='https://cdn.pixabay.com/photo/2014/07/15/13/36/coffee-shop-393954_1280.jpg' className='staff' fill/>
            </div>
        </div>
    </div>
  )
}

export default Services