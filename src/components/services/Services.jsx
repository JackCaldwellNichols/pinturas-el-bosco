import React from 'react'
import styles from './services.module.scss'
import Image from 'next/image'

const Services = () => {
  return (
    <div className={styles.services}>
        <div className={styles.top}>
            <div className={styles.topLeft}>
                <h1>Servicios Residenciales</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque pariatur est. Error molestias perspiciatis corporis maxime eos labore incidunt illum commodi officia sequi odit, omnis, hic non cum porro?</h3>
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
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque pariatur est. Error molestias perspiciatis corporis maxime eos labore incidunt illum commodi officia sequi odit, omnis, hic non cum porro?</h3>
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