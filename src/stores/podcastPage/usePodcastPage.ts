import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// hooks
import {usePlayer} from "../player/usePlayer";

// actions
import { podcastPageActions } from "./actions";

// types
import { IPodcastPageState } from "./types";
type storeState = {
  podcast: IPodcastPageState
}

export const usePodcastPage = (slug: string) => {
  const dispatch = useDispatch();

  const { list, setPlaylist } = usePlayer();

  const { isFetching, error, data, playlist } = useSelector((state: storeState) => state.podcast);

  useEffect(() => {
    dispatch(podcastPageActions.getData(slug));
    dispatch(podcastPageActions.getPlaylistData(slug));
  },[dispatch]);

  useEffect(() => {
    if (!!playlist) {
      const tracks = playlist.items[0].playlist.map((item) => {
        return item.track
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

  return {
    isFetching,
    error,
    data,
    playlist,
  }
}
