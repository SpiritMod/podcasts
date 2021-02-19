//core
import React from 'react';
import {useSelector} from "react-redux";
import {Link, useParams} from 'react-router-dom';

// routes
import { book } from '../../navigation/book';

// styles
import styles from './styles/styles.module.scss';

// hooks
import { storeStatePodcast } from '../../stores/podcastPage/usePodcastPage';
import { storeStateEpisode } from "../../stores/episode/useEpisode";

// types
interface IUserPublicRouteParams {
  slug: string,
  id: string
}

const Breadcrumb: React.FC = () => {
  const routeParams = useParams<IUserPublicRouteParams>();

  const hasPodcast = routeParams.hasOwnProperty('slug');
  const hasEpisode = routeParams.hasOwnProperty('id');

  let podcast = useSelector((state: storeStatePodcast) => state.podcast);
  let episode = useSelector((state: storeStateEpisode) => state.episode);

  const podcastItem = (
    <>
      {
        hasEpisode ?
          (
            podcast.data && (
              <li className={styles.item}>
                <Link to={`/podcast/${podcast.data.slug}`}>{podcast.data.title}</Link>
              </li>
            )
          )
          :
          podcast.data && (<li className={`${styles.item} ${styles.active}`} aria-current="page">{podcast.data.title}</li>)
      }
    </>
  );

  const episodeItem = (
    <>
      { hasPodcast && hasEpisode && episode.data && (
          <>
            {
              !podcast.data && <li className={styles.item}>
                <Link to={`/podcast/${episode.data.podcastSlug}`}>{episode.data.subtitle}</Link>
              </li>
            }
            <li className={`${styles.item} ${styles.active}`} aria-current="page">{episode.data.title}</li>
          </>
        )
      }
    </>
  );

  const breadcrumbs = (podcast.data || episode.data) && (
    <>
      <nav className={styles.breadcrumb} aria-label="breadcrumb">
        <ol className={styles.list}>
          <li className={styles.item}>
            <Link to={book.root}>Главная</Link>
          </li>
          { podcastItem }
          { episodeItem }
        </ol>
      </nav>
    </>
  );

  return (
    <>
      { breadcrumbs }
    </>
  );
};

export default Breadcrumb;
