//core
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from './styles/styles.module.scss';

// types
interface IRecommendationItem {
  data: {
    id: string,
    //url: string;
    colorFirst: string,
    colorSecond: string,
    imgUrl: string,
    album: string,
    title: string,
    description: string,
    children?: React.ReactNode,
  }
}


const RecommendationItem: React.FC<IRecommendationItem> = ({data}) => {
  const {
    id, colorFirst, colorSecond, imgUrl, album, title, description,
  } = data;

  return (
    <div className={styles.item} key={id}>
      <div className={styles.border} style={{ background: `linear-gradient(to bottom, ${colorFirst}, ${colorSecond})`}} />
      <Link to="/" className={styles.content}>
        <div className={styles.img}>
          <img src={imgUrl} alt="img"/>
          {/*<img src="public/images/podcast/img-2.png"/>*/}
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <div className={styles.album}>{album}</div>
            <div className={styles.name}>{title}</div>
            <div className={styles.description}>
              {description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendationItem;
