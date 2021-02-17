import React from 'react';
import { Link } from "react-router-dom";

//hooks
import {usePlayer} from "../../stores/player/usePlayer";

//styles
import styles from './styles/styles.module.scss';

//types
import {IEpisodesDataItem} from "../../stores/episodes/types";
import {useEpisodesList} from "../../stores/episodes/useEpisodesList";

interface ItemSong {
    data: IEpisodesDataItem,
    className: any,
    dataKey: any,
}

const ItemSong: React.FC<ItemSong> = (props) => {

    const { setCurrent, setPlaylist } = usePlayer();

    const { data } = useEpisodesList();

    const tracks = data && data.items.map((item) => {
        return item.track
    }, []);

    const { className, dataKey } = props;
    const { title, subtitle, description, colorFirst, colorSecond, slug, podcastSlug, track } = props.data;

    const podcastUrl = `/podcast/${podcastSlug}`;
    const epizodeUrl = `/podcast/${podcastSlug}/episode/${slug}`;


    const handlerClick = (playlist: any) => {
        document.documentElement.style.setProperty('--color-player-a', colorFirst);
        document.documentElement.style.setProperty('--color-player-b', colorSecond);

        setPlaylist(playlist);
        setCurrent(track);
    }

    const songItem = data && tracks && (
      <>
          <div className={`${styles.song} ${className}`} data-key={dataKey}>
              <div className={styles.border} style={{background: `linear-gradient(to bottom, ${colorFirst}, ${colorSecond})`}} />
              <div className={styles.content}>
                  <Link to={podcastUrl} className={styles.img}>
                      <img src={track.cover} alt={title}/>
                  </Link>
                  <div className={styles.info}>
                      <div className={styles.header}>
                          <Link to={podcastUrl} className={styles.subtitle} title={subtitle}>
                              <span>{subtitle}</span>
                          </Link>
                          <Link to={epizodeUrl} className={styles.title} title={title}>
                              <span>{title}</span>
                          </Link>
                          <Link to={epizodeUrl} className={styles.description} title={description}>
                              <span>{description}</span>
                          </Link>
                      </div>
                      <div className={styles.controls} onClick={() => handlerClick(tracks)}>
                          <span>Слушать</span>
                          <div className={styles.play} style={{background: `linear-gradient(140deg, ${colorFirst}, ${colorSecond})`}}>
                              <span className="icon-play" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );

    return (
        <>
            {songItem}
        </>
    )
}

export default ItemSong;
