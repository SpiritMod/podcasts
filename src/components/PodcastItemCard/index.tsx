//core
import React from 'react';

//styles
import styles from './styles/styles.module.scss';


// types
interface IPodcastItemCard {
  data: {
    id: string,
    //url: string;
    colorFirst: string,
    colorSecond: string,
    imgUrl: string,
    title: string,
    description: string,
    children?: React.ReactNode,
  }
}

const PodcastItemCard: React.FC<IPodcastItemCard> = ({data}) => {
  return (
    <div className={styles.card}>
      <a href="/podcast" className={styles.content} style={{ background: `linear-gradient(to bottom, ${data.colorFirst}, ${data.colorSecond})`}}>
        <div className={styles.img}>
          <img src={data.imgUrl} alt="img"/>
        </div>
        <div className={styles.header}>
          <span className="icon-arrow-longer-right" />
          <div className={styles.title}>{data.title}</div>
          <div className={styles.description}>{data.description}</div>
        </div>
      </a>
    </div>
  )
};

export default PodcastItemCard;
