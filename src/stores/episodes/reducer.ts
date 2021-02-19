// Types
import { types, IEpisodesState } from './types';
import IAction from "../../models/IAction";

const initialState: IEpisodesState = {
  isFetching: false,
  error: null,
  data: null,
};

export const episodesReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.EPISODES_SET_DATA:
      return { ...state, data: payload };

    case types.EPISODES_UPDATE_DATA:
      return {
        ...state,
        data: {
          items: state.data?.items.concat(payload.items),
          _links: payload._links,
          _meta: payload._meta,
        }
      }

    case types.EPISODES_START_FETCHING:
      return { ...state, isFetching: true };
    case types.EPISODES_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.EPISODES_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
