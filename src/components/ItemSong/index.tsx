import React from 'react';

//styles
import styles from './styles/styles.module.scss';


// types
interface ItemSong {

    data: {
        id: string,
        colorFirst: string,
        colorSecond: string,
        imgUrl: string,
        epizode: string,
        podcast: string,
        epizodeUrl: string,
        podcastUrl: string,
        description: string,
        children?: React.ReactNode,
    },

    className: any,
    dataKey: any,
}

const ItemSong: React.FC<ItemSong> = (props) => {

    const { colorFirst, colorSecond, imgUrl, epizode, podcast, epizodeUrl, podcastUrl, description} = props.data;
    const className = props.className;
    const dataKey = props.dataKey;

    const handlerClick = () => {
        document.documentElement.style.setProperty('--color-player-a', colorFirst);
        document.documentElement.style.setProperty('--color-player-b', colorSecond);
    }

    return (
        <div className={`${styles.song} ${className}`} data-key={dataKey}>
            <div className={styles.border} style={{background: `linear-gradient(to bottom, ${colorFirst}, ${colorSecond})`}} />
            <div className={styles.content}>
                <a href={podcastUrl} target="_blank" className={styles.img}>
                    <img src={imgUrl} />
                </a>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <a href={podcastUrl} className={styles.album}> {podcast}</a>
                        <a href={epizodeUrl} className={styles.name}>{epizode}</a>
                        <a href={epizodeUrl} className={styles.description}>{description}</a>
                    </div>
                    <div className={styles.controls} onClick={handlerClick}>
                        <span>Слушать</span>
                        <div className={styles.play} style={{background: `linear-gradient(140deg, ${colorFirst}, ${colorSecond})`}}>
                            <span className="icon-play" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemSong;
