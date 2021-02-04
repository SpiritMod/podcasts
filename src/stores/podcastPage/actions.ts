// Types
import { Dispatch } from 'redux';
import { get } from '../../API';
import { podcastPage } from '../API';
import {IPodcastPageDataItem, types} from './types';

export const podcastPageActions = Object.freeze({

  // Sync
  setData: (payload: IPodcastPageDataItem) => {
    return {
      type: types.PODCAST_PAGE_SET_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.PODCAST_PAGE_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.PODCAST_PAGE_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.PODCAST_PAGE_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async
  getData: (slug: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.PODCAST_PAGE_FETCH
    });

    dispatch(podcastPageActions.startFetching());

    try {
      const response: any = await get(`${podcastPage}${slug}`);

      if (response.status === 200) {
        const { results } = response.data;

        dispatch(podcastPageActions.setData(results));
      } else {
        const error = {
          status: response.status
        };
        dispatch(podcastPageActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(podcastPageActions.setFetchingError(error));
    }

    dispatch(podcastPageActions.stopFetching());
  }
});
