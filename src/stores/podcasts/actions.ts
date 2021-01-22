// Types
import { Dispatch } from 'redux';
import { get } from '../../API';
import {IPodcastsDataItem, types} from './types';

export const podcastsActions = Object.freeze({

  // Sync
  setData: (payload: IPodcastsDataItem[]) => {
    return {
      type: types.PODCASTS_SET_DATA,
      payload
    }
  },

  updateData: (payload: IPodcastsDataItem[]) => {
    return {
      type: types.PODCASTS_UPDATED_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.PODCASTS_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.PODCASTS_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.PODCASTS_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async
  getData: (page: number) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.PODCASTS_FETCH
    });

    dispatch(podcastsActions.startFetching());

    try {
      const response: any = await get('/podcasts', page || 1);

      if (response.status === 200) {
        const { results } = response.data;

        dispatch(podcastsActions.setData(results));
      } else {
        const error = {
          status: response.status
        };
        dispatch(podcastsActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(podcastsActions.setFetchingError(error));
    }

    dispatch(podcastsActions.stopFetching());
  }
});
