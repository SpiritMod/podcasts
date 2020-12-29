// Types
import { types, IExampleState } from './types';
import IAction from "../../models/IAction";

const initialState: IExampleState = {
  isFetching: false,
  error: '',
  data: [],
};

// type action = {
//   type: string,
//   payload?: any
// }

export const exampleReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.EXAMPLE_START_FETCHING:
      return { ...state, isFetching: true };
    case types.EXAMPLE_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.EXAMPLE_SET_FETCHING_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
