import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { podcastPageActions } from "./actions";
import { IPodcastPageState } from "./types";

type YourRootState = {
  podcastPage: IPodcastPageState
}

export const usePodcastPage = (slug: string) => {
  const dispatch = useDispatch();

  const { isFetching, error, data } = useSelector((state: YourRootState) => state.podcastPage);

  useEffect(() => {
    dispatch(podcastPageActions.getData(slug));
  },[dispatch]);

  return {
    isFetching,
    error,
    data,
  }
}
