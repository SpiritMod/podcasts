// core
import React from "react";
import {Link, useParams} from "react-router-dom";

// styles
import styles from './styles/track.module.scss';

// types
import { IPodcastPlaylistDataItem } from "../../stores/podcastPage/types";

// hooks
import {usePlayer} from "../../stores/player/usePlayer";
import {usePodcastPage} from "../../stores/podcastPage/usePodcastPage";
import {IUserPublicRouteParams} from "./index";



const Track: React.FC<IPodcastPlaylistDataItem> = (props) => {
  const params = useParams<IUserPublicRouteParams>();

  const { title, duration, slug, podcastSlug, track } = props;

  const { playlist } = usePodcastPage(params.slug);

  const { setCurrent, setPlaylist } = usePlayer();

  const handlerClick = (playlist: any) => {
    document.documentElement.style.setProperty('--color-player-a', document.documentElement.style.getPropertyValue('--color-playlist-b'));
    document.documentElement.style.setProperty('--color-player-b', document.documentElement.style.getPropertyValue('--color-playlist-a'));

    console.log('playlist new: ', playlist);

    const newPlaylist = playlist.map((item: IPodcastPlaylistDataItem) => {
      return item.track
    }, [])

    setPlaylist(newPlaylist);
    setCurrent(track);
  };


  const trackItem = playlist && (
    <>
      <div className={styles.track}>
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
          <div className={styles.controls} onClick={() => handlerClick(playlist.items[0].playlist)}>
            <div className={styles.play_pause}><span className="icon-play" /></div>
            <span className={styles.play}>Play</span>
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
