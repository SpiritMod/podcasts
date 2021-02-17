//core
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from './styles/styles.module.scss';

import {IRecommendedDataItem} from "../../stores/recommended/types";

// types
interface IRecommendationItem {
  data: IRecommendedDataItem,
}


const RecommendationItem: React.FC<IRecommendationItem> = ({data}) => {
  const {
    id, colorFirst, colorSecond, imgUrl, subtitle, title, description, podcastSlug, slug
  } = data;

  return (
    <div className={styles.item} key={id}>
      <div className={styles.border} style={{ background: `linear-gradient(to bottom, ${colorFirst}, ${colorSecond})`}} />
      <Link to={`/podcast/${podcastSlug}/episode/${slug}`} className={styles.content}>
        <div className={styles.img}>
          <img src={imgUrl} alt={title}/>
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <div className={styles.album}>{subtitle}</div>
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
