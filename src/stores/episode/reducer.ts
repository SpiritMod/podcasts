// Types
import { types, IEpisodeState } from './types';
import IAction from "../../models/IAction";

const initialState: IEpisodeState = {
  isFetching: false,
  error: null,
  data: null,
};

export const episodeReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.EPISODE_SET_DATA:
      return { ...state, data: payload };

    case types.EPISODE_START_FETCHING:
      return { ...state, isFetching: true };
    case types.EPISODE_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.EPISODE_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
