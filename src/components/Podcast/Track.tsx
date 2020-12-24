// core
import React from "react";

// styles
import styles from './styles/track.module.scss';

// types
export interface ITrack {
  id: string,
  title: string,
  podcast: string,
  imgUrl: string,
}


const Track: React.FC<ITrack> = (props) => {

  const { title, podcast, imgUrl } = props;

  return (
    <div className={styles.track}>
      <div className={styles.left_side}>
        <a href="#" className={styles.img}>
          <img src={imgUrl} alt="img"/>
        </a>
        <div className={styles.text}>
          <div className={styles.name}>
            <a href="#">{title}</a>
          </div>
          {/*<div className={styles.album}>{podcast}</div>*/}
        </div>
      </div>
      <div className={styles.right_side}>
        <div className={styles.duration}>3:16</div>
        <div className={styles.controls}>
          <div className={styles.play_pause}><span className="icon-play" /></div>
          <span className={styles.play}>Play</span>
        </div>
      </div>
    </div>
  )

}

export default Track;
