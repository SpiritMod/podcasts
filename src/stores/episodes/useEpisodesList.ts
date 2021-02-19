// core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { episodesActions } from "./actions";

// hooks
import {usePlayer} from "../player/usePlayer";

// types
import { IEpisodesState } from "./types";
type storeState = {
  episodes: IEpisodesState
}

export const useEpisodesList = () => {
  const dispatch = useDispatch();

  const { list, setPlaylist, updatePlaylist } = usePlayer();
  const { isFetching, error, data } = useSelector((state: storeState) => state.episodes);

  useEffect(() => {
    if (data === null) {
      dispatch(episodesActions.getData(1));
    }
  },[]);

  // useEffect(() => {
  //   if (!!data) {
  //     const tracks = data.items.map((item) => {
  //       return item.track
  //     }, []);
  //
  //     //  set playlist to player
  //     console.log('list.length: ', list.length);
  //     console.log('new tracks: ', tracks);
  //
  //     if (list.length === 0) {
  //       setPlaylist(tracks);
  //     } else  {
  //       updatePlaylist(tracks);
  //     }
  //   }
  // },[data]);

  const loadMore = (page: number) => {
    dispatch(episodesActions.getData(page));
  };

  return {
    isFetching,
    error,
    data,
    loadMore,
  }
}
