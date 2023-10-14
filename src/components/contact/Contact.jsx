import React from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className={styles.contact} id='contact'>
      <h1>Contacta con nosotros</h1>
      <div className={styles.wrapper}>
      <div className={styles.contactLeft}>
          <form className={styles.contactForm}>
            <input type='email'placeholder='Correo Electrónico'/>
            <input type="text" placeholder='Número de contacto'/>
            <input type='text' placeholder='Titulo del mensaje' />
            <textarea cols={10} rows={10} />
            <button>Enviar</button>
          </form>
      </div>
      <div className={styles.contactRight}>
          <Image src='https://cdn.pixabay.com/photo/2017/03/27/13/00/hands-2178566_1280.jpg' fill/>
      </div>
      </div>
    </div>
  )
}

export default Contact