//core
import { Dispatch } from 'redux';

// api
import { get } from '../../API';
import { social } from '../API';

// Types
import {ISocialState, types} from './types';

export const socialActions = Object.freeze({

  // Sync
  setData: (payload: ISocialState) => {
    return {
      type: types.SOCIAL_SET_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.SOCIAL_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.SOCIAL_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.SOCIAL_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async Podcast Page Data
  getData: () => async (dispatch: Dispatch) => {
    dispatch({
      type: types.SOCIAL_FETCH
    });

    dispatch(socialActions.startFetching());

    try {
      const response: any = await get(`${social}`);

      if (response.status === 200) {
        const results = await response.json();

        dispatch(socialActions.setData(results));
      } else {
        const error = {
          status: response.status
        };
        dispatch(socialActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(socialActions.setFetchingError(error));
    }

    dispatch(socialActions.stopFetching());
  },
});
