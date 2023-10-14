"use client"
import { Image } from 'antd';
import styles from "./gallery.module.scss";

const Gallery = () => {

    const items =     
    [
      {
        "id": 1,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg"
      },
      {
        "id": 2,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg"
      },
      {
        "id": 3,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg"
      }
    ]



  return (
    <div className={styles.gallery}>
        <h1>Nuestro Trabajo</h1>
        <div className={styles.galleryWrapper}>
        {items.map((item) => (
            <div className={styles.imgWrapper}>
            <Image
            width={300}
            height={300}
            src={item.imageUrl}
            className={styles.image}
            />
            </div>
        ))}
        </div>
    </div>


  )
}

export default Gallery