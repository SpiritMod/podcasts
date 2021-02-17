// Types
import { types, IPodcastPageState } from './types';
import IAction from "../../models/IAction";

const initialState: IPodcastPageState = {
  isFetching: false,
  error: null,
  data: null,
  playlist: null,
};

export const podcastPageReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.PODCAST_PAGE_SET_DATA:
      return { ...state, data: payload };
    case types.PODCAST_PLAYLIST_SET_DATA:
      return { ...state, playlist: payload };

    case types.PODCAST_PAGE_START_FETCHING:
      return { ...state, isFetching: true };
    case types.PODCAST_PAGE_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.PODCAST_PAGE_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
