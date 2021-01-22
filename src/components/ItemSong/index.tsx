import React from 'react';

//styles
import styles from './styles/styles.module.scss';
import {usePlayer} from "../../stores/player/usePlayer";


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

    const { setPlaylist } = usePlayer();

    const { colorFirst, colorSecond, imgUrl, epizode, podcast, epizodeUrl, podcastUrl, description} = props.data;
    const className = props.className;
    const dataKey = props.dataKey;

    const handlerClick = () => {
        document.documentElement.style.setProperty('--color-player-a', colorFirst);
        document.documentElement.style.setProperty('--color-player-b', colorSecond);

        setPlaylist([
            {
                id: '2',
                name: 'Dorost Nemisham',
                singer: 'Sirvan Khosravi',
                cover: 'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
                musicSrc: 'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
                timestamp: 'as',
            },
            {
                id: '1',
                name: 'Despacito',
                singer: 'Luis Fonsi',
                cover: 'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
                musicSrc: 'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
                timestamp: 'as',
            },
            {
                id: '3',
                name: 'Последний эпизод первого сезона',
                singer: 'На дистанции',
                cover: 'https://image.simplecastcdn.com/images/e3d73a18-670b-42b0-a65a-d23a964e2250/00760a71-9f0d-4e90-bca0-c9a747484700/300x300/na-distancii-podcast-cover-v5@2x.jpg',
                musicSrc: 'https://cdn.simplecast.com/audio/69e304f5-e80d-42bb-8f15-6343695e96be/episodes/1d005bd7-dcbf-41c0-bf8c-6f016439b92e/audio/2675a868-c257-457b-9b4a-baa0ee686ddd/default_tc.mp3',
                timestamp: 'as',
            },
        ]);
    }

    return (
        <div className={`${styles.song} ${className}`} data-key={dataKey}>
            <div className={styles.border} style={{background: `linear-gradient(to bottom, ${colorFirst}, ${colorSecond})`}} />
            <div className={styles.content}>
                <a href={podcastUrl} className={styles.img}>
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
