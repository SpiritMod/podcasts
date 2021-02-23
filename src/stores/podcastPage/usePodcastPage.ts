import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// hooks
import {usePlayer} from "../player/usePlayer";

// actions
import { podcastPageActions } from "./actions";

// types
import { IPodcastPageState } from "./types";
export type storeStatePodcast = {
  podcast: IPodcastPageState
}

export const usePodcastPage = (slug: string) => {
  const dispatch = useDispatch();

  const { list, setPlaylist } = usePlayer();

  const { isFetching, error, data, playlist } = useSelector((state: storeStatePodcast) => state.podcast);

  useEffect(() => {
    dispatch(podcastPageActions.getData(slug));
    dispatch(podcastPageActions.getPlaylistData(slug));
  },[dispatch]);

  useEffect(() => {
    if (!!playlist) {
      const tracks = playlist.items.map((item: any) => {
        return {
          ...item.track,
          musicSrc: `${item.track.musicSrc}?v=${item.track.id}`
        }
      }, []);
      //  set playlist to player
      !list.length && setPlaylist(tracks);

      if (!!data) {
        document.documentElement.style.setProperty('--color-player-a', data.colorFirst);
        document.documentElement.style.setProperty('--color-player-b', data.colorSecond);
      }
    }
  },[playlist, data]);

  useEffect(() => {
    if (!!data) {
      document.documentElement.style.setProperty('--color-playlist-a', data.colorFirst);
      document.documentElement.style.setProperty('--color-playlist-b', data.colorSecond);
    }
  }, [data]);

  const loadMorePlaylist = (slug: string, page: number) => {
    dispatch(podcastPageActions.getPlaylistData(slug, page));
  };

  return {
    isFetching,
    error,
    data,
    playlist,
    loadMorePlaylist,
  }
}
