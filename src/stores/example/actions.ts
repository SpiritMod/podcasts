// Types
import { types } from './types';

export const exampleActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.EXAMPLE_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.EXAMPLE_STOP_FETCHING,
    }
  },
  setFetchingError: (error: any) => {
    return {
      type: types.EXAMPLE_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },
});
