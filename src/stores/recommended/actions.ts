//core
import { Dispatch } from 'redux';

// api
import { get } from '../../API';
import { recommended } from '../API';

// Types
import {IRecommendedDataItem, types} from './types';

export const recommendedActions = Object.freeze({

  // Sync
  setData: (payload: IRecommendedDataItem) => {
    return {
      type: types.RECOMMENDED_SET_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.RECOMMENDED_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.RECOMMENDED_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.RECOMMENDED_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async Podcast Page Data
  getData: () => async (dispatch: Dispatch) => {
    dispatch({
      type: types.RECOMMENDED_FETCH
    });

    dispatch(recommendedActions.startFetching());

    try {
      const response: any = await get(`${recommended}`);

      if (response.status === 200) {
        const results = await response.json();

        dispatch(recommendedActions.setData(results));
      } else {
        const error = {
          status: response.status
        };
        dispatch(recommendedActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(recommendedActions.setFetchingError(error));
    }

    dispatch(recommendedActions.stopFetching());
  },
});
