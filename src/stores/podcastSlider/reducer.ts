// Types
import { types, IPodcastSliderState } from './types';
import IAction from "../../models/IAction";

const initialState: IPodcastSliderState = {
  isFetching: false,
  error: '',
  data: null,
};

export const podcastSliderReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.PODCAST_SLIDER_SET_DATA:
      return { ...state, data: payload };

    case types.PODCAST_SLIDER_START_FETCHING:
      return { ...state, isFetching: true };
    case types.PODCAST_SLIDER_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.PODCAST_SLIDER_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
