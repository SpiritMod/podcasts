import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { episodeActions } from "./actions";
import { IEpisodeState } from "./types";
import {usePlayer} from "../player/usePlayer";

type storeState = {
  episode: IEpisodeState
}

export const useEpisode = (slug: string) => {
  const dispatch = useDispatch();

  const { list, setPlaylist } = usePlayer();

  const { isFetching, error, data } = useSelector((state: storeState) => state.episode);

  useEffect(() => {
    dispatch(episodeActions.getData(slug));
  },[dispatch, slug]);

  useEffect(() => {
    if (!!data) {
      const tracks = [{...data.track}]

      //  set playlist to player
      !list.length && setPlaylist(tracks);
    }
  },[data]);


  return {
    isFetching,
    error,
    data,
  }
}
