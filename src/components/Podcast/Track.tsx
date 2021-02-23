// core
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

// styles
import styles from './styles/track.module.scss';

// types
import { IPodcastPlaylistDataItem } from "../../stores/podcastPage/types";

// hooks
import {usePlayer} from "../../stores/player/usePlayer";
import {storeStatePodcast, usePodcastPage} from "../../stores/podcastPage/usePodcastPage";
import {IUserPublicRouteParams} from "./index";
import {useSelector} from "react-redux";
import {podcastPageReducer as podcast} from "../../stores/podcastPage/reducer";



const Track: React.FC<IPodcastPlaylistDataItem> = (props) => {
  //const params = useParams<IUserPublicRouteParams>();

  const { title, duration, slug, podcastSlug, track } = props;

  //const { playlist } = usePodcastPage(params.slug);
  const { playlist } = useSelector((state: storeStatePodcast) => state.podcast)

  const { play, list, current, instancePlayer, setCurrent, setPlaylist, updatePlaylist } = usePlayer();

  const [isPlay, setIsPlay] = useState<boolean>(track.id === current?.id);

  useEffect(() => {
    if (track.id === current?.id && play) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  }, [track, current, play]);

  const handlerClick = (playlist: any) => {
    document.documentElement.style.setProperty('--color-player-a', document.documentElement.style.getPropertyValue('--color-playlist-b'));
    document.documentElement.style.setProperty('--color-player-b', document.documentElement.style.getPropertyValue('--color-playlist-a'));

    //console.log('playlist new: ', playlist.items);

    const newPlaylist = playlist.map((item: IPodcastPlaylistDataItem) => {
      return {
        ...item.track,
        musicSrc: `${item.track.musicSrc}?v=${item.track.id}`
      }
    }, []);

    //const hasInPlaylist = !!newPlaylist.find((item:any) => item.id === track.id);

    const needUpdatePlaylist = list.length == newPlaylist.length && list.every((v,i)=>v === newPlaylist[i]);
    //console.log('test: ', needUpdatePlaylist);

    if (!needUpdatePlaylist) {
      //console.log('setNewPlaylist');
      setPlaylist(newPlaylist);
    }

    // console.log('handlerClick track:', track);
    // console.log('handlerClick newPlaylist:', newPlaylist);
    // console.log('hasInPlaylist: ', hasInPlaylist);





    //setPlaylist(newPlaylist);
    setCurrent(track);

    if (play) {
      isPlay && instancePlayer.pause();
    } else {
      instancePlayer.play();
    }
  };


  const trackItem = playlist && (
    <>
      <div className={styles.track} data-id={track.id} data-url={track.musicSrc}>
        <div className={styles.left_side}>
          <Link to={`/podcast/${podcastSlug}/episode/${slug}`} className={styles.img}>
            <img src={track.cover} alt="img"/>
          </Link>
          <div className={styles.text}>
            <div className={styles.name}>
              <Link to={`/podcast/${podcastSlug}/episode/${slug}`}>{title}</Link>
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <div className={styles.duration}>{duration}</div>
          <div className={styles.controls} onClick={() => handlerClick(playlist.items)}>
            <div className={styles.play_pause}>{isPlay ? <span className="icon-pause"/> : <span className="icon-play"/>}</div>
            <span className={styles.play}>{isPlay ? 'Pause' : 'Play'}</span>
          </div>
        </div>
      </div>
    </>
  );


  return (
    <>
      {trackItem}
    </>
  )

};

export default Track;
