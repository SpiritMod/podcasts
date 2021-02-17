//core
import { Dispatch } from 'redux';
// api
import { get } from '../../API';
import {podcastSlider} from "../API";
//types
import { IPodcastSliderDataItem, types } from './types';

export const podcastSliderActions = Object.freeze({

  // Sync
  setData: (payload: IPodcastSliderDataItem[]) => {
    return {
      type: types.PODCAST_SLIDER_SET_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.PODCAST_SLIDER_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.PODCAST_SLIDER_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.PODCAST_SLIDER_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async
  getData: () => async (dispatch: Dispatch) => {
    dispatch({
      type: types.PODCAST_SLIDER_FETCH
    });

    dispatch(podcastSliderActions.startFetching());

    try {
      const response: any = await get(`${podcastSlider}`);

      if (response.status === 200) {
        const results = await response.json();

        dispatch(podcastSliderActions.setData(results));
      } else {
        const error = {
          status: response.status
        };
        dispatch(podcastSliderActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(podcastSliderActions.setFetchingError(error));
    }

    dispatch(podcastSliderActions.stopFetching());
  }
});
