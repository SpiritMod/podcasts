// core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { episodesActions } from "./actions";

// hooks
import {usePlayer} from "../player/usePlayer";

// types
import { IEpisodesState } from "./types";
export type storeStateEpisodes = {
  episodes: IEpisodesState
}

export const useEpisodesList = () => {
  const dispatch = useDispatch();

  const { list, setPlaylist, updatePlaylist } = usePlayer();
  const { isFetching, error, data } = useSelector((state: storeStateEpisodes) => state.episodes);

  useEffect(() => {
    if (data === null) {
      dispatch(episodesActions.getData(1));
    }
  },[]);

  useEffect(() => {
    if (data) {
      const tracks = data.items.map((item: any) => {
        return {
          ...item.track,
          musicSrc: `${item.track.musicSrc}?v=${item.track.id}`
        }
      }, []);

      !list.length && setPlaylist(tracks);
    }

  },[data]);

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
