//core
import React from 'react';
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// styles
import styles from './styles/styles.module.scss';

// components
import Sort from "../Sort";
import LoadMoreLink from "../LoadMoreLink";
import Track from "./Track";
import {storeStatePodcast} from "../../stores/podcastPage/usePodcastPage";
import {IUserPublicRouteParams} from "./index";
import Error from "../Error";
import Loader from "../Loader";
import {podcastPageActions} from "../../stores/podcastPage/actions";

const Episodes: React.FC = () => {
  const dispatch = useDispatch();

  const { slug } = useParams<IUserPublicRouteParams>();

  const { isFetching, error, playlist } = useSelector((state: storeStatePodcast) => state.podcast);

  const errorMessage = !isFetching && error && <Error message={error.message}/>;

  const loader = isFetching && <Loader/>;

  const handleLoadMore = (): void => {
    const page = playlist ? playlist._meta.currentPage + 1 : 1;
    dispatch(podcastPageActions.getPlaylistData(slug, page));
  }

  const tracks = playlist && playlist.items.map((item: any) => {
    return <Track key={item.id} {...item} />
  });


  const loadMoreBtn = (
    <>
      {
        !(playlist?._meta.currentPage === playlist?._meta.pageCount) && <div className={styles.playlist_footer}>
          <LoadMoreLink action={handleLoadMore} label={'Предыдущие выпуски'} />
        </div>
      }
    </>
  );

  const section = (
    <section className={styles.section}>
      <div className={styles.playlist}>
        <div className={styles.playlist_header}>
          <div className={styles.playlist_title}>Эпизоды</div>
          <Sort/>
        </div>
        <div className={styles.playlist_content}>
          {tracks}
        </div>
        {loadMoreBtn}
      </div>
    </section>
  );

  return (
    <>
      { errorMessage }
      { section }
      { loader }
    </>
  )
}

export default Episodes;
