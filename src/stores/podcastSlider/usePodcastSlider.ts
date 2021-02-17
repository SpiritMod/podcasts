import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { podcastSliderActions } from "./actions";
import { IPodcastSliderState } from "./types";

type storeState = {
  podcastSlider: IPodcastSliderState
}

export const usePodcastSlider = () => {
  const dispatch = useDispatch();

  const { isFetching, error, data } = useSelector((state: storeState) => state.podcastSlider);

  useEffect(() => {
    if (!data) {
      dispatch(podcastSliderActions.getData());
    }
  },[dispatch]);

  return {
    isFetching,
    error,
    data,
  }
}
