import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

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

  const {list, current, play, instancePlayer, setCurrent, setPlaylist} = usePlayer();
  const {data} = useEpisodesList();

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [tracks, setTracks] = useState<any>(data?.items.map((item) => item.track, []));



  // const tracks = data && data.items.map((item) => {
  //   return item.track
  // }, []);

  const {className, dataKey} = props;
  const {title, subtitle, description, colorFirst, colorSecond, slug, podcastSlug, track} = props.data;

  const podcastUrl = `/podcast/${podcastSlug}`;
  const epizodeUrl = `/podcast/${podcastSlug}/episode/${slug}`;

  const handlerClick = () => {
    document.documentElement.style.setProperty('--color-player-a', colorFirst);
    document.documentElement.style.setProperty('--color-player-b', colorSecond);

    // set new current track
    setCurrent(track);

    data && !list.length && setPlaylist(tracks);

    if (play) {
      isPlay && instancePlayer.pause();
    } else {
      instancePlayer.play();
    }
  }

  useEffect(() => {
    if (current?.id === track.id && play) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  }, [current, play]);

  useEffect(() => {
    setTracks(data?.items.map((item) => item.track, []));
  }, [data]);

  const songItem = data && (
    <>
      <div className={`${styles.song} ${className}`} data-key={dataKey} data-id={track.id}>
        <div className={styles.border} style={{background: `linear-gradient(to bottom, ${colorFirst}, ${colorSecond})`}}/>
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
            <div className={styles.controls} onClick={() => handlerClick()}>
              <span>{((current?.id === track.id) && isPlay) ? 'Пауза' : 'Слушать'}</span>
              <div className={styles.play} style={{background: `linear-gradient(140deg, ${colorFirst}, ${colorSecond})`}}>
                {
                  ((current?.id === track.id) && isPlay) ? <span className="icon-pause"/> : <span className="icon-play"/>
                }
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
