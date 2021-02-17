//core
import { Dispatch } from 'redux';

// api
import { get } from '../../API';
import { episodePage } from '../API';

// Types
import {IEpisodeDataItem, types} from './types';

export const episodeActions = Object.freeze({

  // Sync
  setData: (payload: IEpisodeDataItem) => {
    return {
      type: types.EPISODE_SET_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.EPISODE_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.EPISODE_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.EPISODE_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async Podcast Page Data
  getData: (slug: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.EPISODE_FETCH
    });

    dispatch(episodeActions.startFetching());

    try {
      const response: any = await get(`${episodePage}${slug}`);

      if (response.status === 200) {
        const results = await response.json();

        dispatch(episodeActions.setData(results));
      } else {
        const error = {
          status: response.status
        };
        dispatch(episodeActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(episodeActions.setFetchingError(error));
    }

    dispatch(episodeActions.stopFetching());
  },
});
