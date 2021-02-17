// Types
import { types, ISocialState } from './types';
import IAction from "../../models/IAction";

const initialState: ISocialState = {
  isFetching: false,
  error: null,
  data: null,
};

export const socialReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.SOCIAL_SET_DATA:
      return { ...state, data: payload };

    case types.SOCIAL_START_FETCHING:
      return { ...state, isFetching: true };
    case types.SOCIAL_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.SOCIAL_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
