//core
import { Dispatch } from 'redux';

// api
import { get } from '../../API';
import { episodesList } from '../API';

// Types
import {IEpisodesData, types} from './types';

export const episodesActions = Object.freeze({

  // Sync
  setData: (payload: IEpisodesData) => {
    return {
      type: types.EPISODES_SET_DATA,
      payload
    }
  },

  updateData: (payload: IEpisodesData) => {
    return {
      type: types.EPISODES_UPDATE_DATA,
      payload
    }
  },

  startFetching: () => {
    return {
      type: types.EPISODES_START_FETCHING
    }
  },

  stopFetching: () => {
    return {
      type: types.EPISODES_STOP_FETCHING,
    }
  },

  setFetchingError: (error: any) => {
    return {
      type: types.EPISODES_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    }
  },

  // Async Episodes Page Data
  getData: (page: number) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.EPISODES_FETCH
    });

    dispatch(episodesActions.startFetching());

    try {
      const response: any = await get(`${episodesList}${page || 1}`);


      if (response.status === 200) {
        const results = await response.json();

        if (results._meta.currentPage > 1) {
          dispatch(episodesActions.updateData(results));
        } else {
          dispatch(episodesActions.setData(results));
        }
      } else {
        const error = {
          status: response.status
        };
        dispatch(episodesActions.setFetchingError(error));
      }
    } catch (error) {
      dispatch(episodesActions.setFetchingError(error));
    }

    dispatch(episodesActions.stopFetching());
  }
});
