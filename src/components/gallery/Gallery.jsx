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
        "imageUrl": "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/334982549_5844458675670830_1088671232560470932_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cpLKkjNqxB8AX_TyDF2&_nc_ht=scontent-mad1-1.xx&oh=00_AfAJKUAqURYA_UudxWZ1DjORjS_6a2jnk7sC6qcehxRjMQ&oe=6540440B"
      },
      {
        "id": 2,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/271017775_215010430818767_7509213701339351525_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dAHg8d0o43EAX-WyBXk&_nc_ht=scontent-mad2-1.xx&oh=00_AfDmLkoH7LGRtA0l-B28NhYDD9eiu6RcL79q_9p5pGy6Rg&oe=653EC151"
      },
      {
        "id": 3,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/247561516_170382155281595_6345521162090135475_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cxaXp48BAEsAX8vf-sN&_nc_ht=scontent-mad2-1.xx&oh=00_AfAIaJPaZifejVYL8x65IM5_OqW830PhpinGpM4iVvAkag&oe=653E71C8"
      },
      {
        "id": 5,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://scontent-mad2-1.xx.fbcdn.net/v/t1.6435-9/200589950_107654581554353_513690258328875421_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=Bhll1_0H2wIAX-yTI7q&_nc_ht=scontent-mad2-1.xx&oh=00_AfAK2zsh-FODFwhQcbciG7ocSevMw9Dm7odt49Fi5vt6nw&oe=6561BC25"
      },
      {
        "id": 6,
        "title": "Swiper Carousel Example",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        "imageUrl": "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/236469184_132886512364493_3008102794992127628_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S2HgLJdCZWQAX8fkjdp&_nc_ht=scontent-mad2-1.xx&oh=00_AfBmkgRCpSZHMfcN-THiIpnmc3ELVtcQvp9bbfeKx1N6IQ&oe=653FB12A"
      }
    ]



  return (
    <div className={styles.gallery} id='gallery'>
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