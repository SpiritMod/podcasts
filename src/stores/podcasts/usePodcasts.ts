import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { podcastsActions } from "./actions";
import { IPodcastsState } from "./types";

type YourRootState = {
  podcasts: IPodcastsState
}

export const usePodcasts = () => {
  const dispatch = useDispatch();

  const { isFetching, error, data } = useSelector((state: YourRootState) => state.podcasts);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(podcastsActions.getData(1));
    }
  },[dispatch]);

  return {
    isFetching,
    error,
    data,
  }
}
