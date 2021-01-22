// Types
import { types, IPodcastsState } from './types';
import IAction from "../../models/IAction";

const initialState: IPodcastsState = {
  isFetching: false,
  error: '',
  data: [],
};

export const podcastsReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.PODCASTS_SET_DATA:
      return { ...state, data: payload };
    case types.PODCASTS_UPDATED_DATA:
      return { ...state, data: [...state.data, payload] };

    case types.PODCASTS_START_FETCHING:
      return { ...state, isFetching: true };
    case types.PODCASTS_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.PODCASTS_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
