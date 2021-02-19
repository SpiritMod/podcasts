//core
import React, {PropsWithChildren} from 'react';
import {useParams} from "react-router-dom";

// styles
import styles from './styles/styles.module.scss';

// components
import Sort from "../Sort";
import LoadMoreLink from "../LoadMoreLink";
import Track from "./Track";
import {usePodcastPage} from "../../stores/podcastPage/usePodcastPage";
import {IUserPublicRouteParams} from "./index";
import Error from "../Error";
import Loader from "../Loader";
//import {IPodcastPlaylistDataItem} from "../../stores/podcastPage/types";

const Episodes: React.FC = () => {
  const { slug } = useParams<IUserPublicRouteParams>();

  const { isFetching, error, playlist, loadMorePlaylist } = usePodcastPage(slug);

  const errorMessage = !isFetching && error && <Error message={error.message}/>;

  const loader = isFetching && <Loader/>;

  const handleLoadMore = (): void => {
    const page = playlist ? playlist._meta.currentPage + 1 : 1
    loadMorePlaylist(slug, page);
  }

  const tracks = playlist && playlist.items.map((item: any) => {
    //console.log('playlist item: ', item);
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
