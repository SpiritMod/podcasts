// Types
import { types, IRecommendedState } from './types';
import IAction from "../../models/IAction";

const initialState: IRecommendedState = {
  isFetching: false,
  error: null,
  data: null,
};

export const recommendedReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.RECOMMENDED_SET_DATA:
      return { ...state, data: payload };

    case types.RECOMMENDED_START_FETCHING:
      return { ...state, isFetching: true };
    case types.RECOMMENDED_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.RECOMMENDED_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
