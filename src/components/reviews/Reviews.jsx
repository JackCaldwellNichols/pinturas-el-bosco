import React from 'react'
import styles from './reviews.module.scss'
import {AiFillStar} from 'react-icons/ai'

const Reviews = () => {
  return (
    <div className={styles.reviews}>
        <h1>
            Lo que dicen nuestros clientes
        </h1>
        <div className={styles.reviewsWrapper}>
           <div className={styles.review}>
                <div className={styles.starDiv}>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                </div>
                <p>
                Son un equipo de trabajo muy profesional, han dejado mi casa como nueva, muy *recomendado* contar con su servicio, son muy amables y atentos, buscan soluciones para todo.
                </p>
                <h3>Ismael</h3>
           </div>
           <div className={styles.review}>
                <div className={styles.starDiv}>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                </div>
                <p>
                profesionales, limpios y bien de precio.
                </p>
                <h3>Maica</h3>
           </div>
           <div className={styles.review}>
                <div className={styles.starDiv}>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                    <AiFillStar className={styles.star}/>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate culpa architecto quasi quidem, corporis illo aliquam vero, necessitatibus at alias. Optio ea enim mollitia quasi facilis odio iusto expedita.
                </p>
                <h3>Jack</h3>
           </div>
        </div>
    </div>
  )
}

export default Reviews