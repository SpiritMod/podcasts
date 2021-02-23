import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

//hooks
import {usePlayer} from "../../stores/player/usePlayer";

//styles
import styles from './styles/styles.module.scss';

//types
import {IEpisodesDataItem} from "../../stores/episodes/types";
import {storeStateEpisodes} from "../../stores/episodes/useEpisodesList";
import { useSelector } from 'react-redux';

interface ItemSong {
  data: IEpisodesDataItem,
  className: any,
  dataKey: any,
}

const ItemSong: React.FC<ItemSong> = (props) => {

  const {list, current, play, instancePlayer, setCurrent, setPlaylist} = usePlayer();
  let { data } = useSelector((state: storeStateEpisodes) => state.episodes);

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

    const newPlaylist = data?.items.map((item: IEpisodesDataItem) => {
      return {
        ...item.track,
        musicSrc: `${item.track.musicSrc}?v=${item.track.id}`
      }
    }, []);

    const needUpdatePlaylist = list.length == newPlaylist?.length && list.every((v,i)=>v === newPlaylist[i]);

    if (!needUpdatePlaylist) {
      newPlaylist && setPlaylist(newPlaylist);
    }

    // set new current track
    setCurrent(track);

    console.log('Track current: ', current);

    //data && !list.length && setPlaylist(tracks);

    if (play) {
      isPlay && instancePlayer.pause();
    } else {
      //instancePlayer.updatePlayIndex(playIndex);
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

  // useEffect(() => {
  //   setTracks(data?.items.map((item) => item.track, []));
  // }, [data]);

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
