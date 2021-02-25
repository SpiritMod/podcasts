//core
import React, {useEffect, useState} from 'react';
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
import {IPodcastPlaylistDataItem} from "../../stores/podcastPage/types";


function sortOld(arr: IPodcastPlaylistDataItem[]) {
  //@ts-ignore
  return arr.sort((a:string, b:string) => new Date(b.created) - new Date(a.created))
}

function sortNew(arr: IPodcastPlaylistDataItem[]) {
  //@ts-ignore
  return arr.sort((a:string, b:string) => new Date(a.created) - new Date(b.created))
}

const Episodes: React.FC = () => {
  const dispatch = useDispatch();

  const { slug } = useParams<IUserPublicRouteParams>();

  const { isFetching, error, playlist } = useSelector((state: storeStatePodcast) => state.podcast);

  const [tracksList, setTracksList] = useState<IPodcastPlaylistDataItem[] | null>(null);
  const [sorting, setSorting] = useState<boolean>(true);



  useEffect(() => {
    if (!!playlist) {
      console.log('setTracksList');
      setTracksList(playlist?.items);
    }
  }, [playlist]);

  useEffect(() => {
    console.log('change sorting: ', sorting);
    if (sorting) {
      console.log('sortNew');
      !!tracksList && setTracksList(sortNew(tracksList));
      console.log('sortNew tracksList: ', tracksList);
    } else {
      console.log('sortOld');
      !!tracksList && setTracksList(sortOld(tracksList));
      console.log('sortNew sortOld: ', tracksList);
    }
  }, [sorting]);



  const errorMessage = !isFetching && error && <Error message={error.message}/>;

  const loader = isFetching && <Loader/>;

  const handleLoadMore = (): void => {
    const page = playlist ? playlist._meta.currentPage + 1 : 1;
    dispatch(podcastPageActions.getPlaylistData(slug, page));
  }

  const handleToggleSorting = (sort: boolean) => {
    setSorting(sort);
  };

  const tracks = !!tracksList && tracksList.map((item: any) => {
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
          <Sort handler={handleToggleSorting} sort={sorting}/>
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
