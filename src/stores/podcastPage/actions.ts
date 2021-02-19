//core
import { Dispatch } from 'redux';

// api
import { get } from '../../API';
import { podcastPage, podcastPlaylist } from '../API';

// Types
import {IPodcastPageDataItem, IPodcastPlaylistDataItem, types} from './types';
import {playerActions} from "../player/actions";

export const podcastPageActions = Object.freeze({

  // Sync
  setData: (payload: IPodcastPlaylistDataItem) => {
    return {
      type: types.PODCAST_PAGE_SET_DATA,
      payload
    }
  },

  setPlaylistData: (payload: IPodcastPageDataItem[]) => {
    return {
      type: types.PODCAST_PLAYLIST_SET_DATA,
      payload
    }
  },

  updatePlaylistData: (payload: IPodcastPageDataItem[]) => {
    return {
      type: types.PODCAST_PLAYLIST_UPDATE_DATA,
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

  // Async Podcast Page Data
  getData: (slug: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.PODCAST_PAGE_FETCH
    });

    dispatch(podcastPageActions.startFetching());

    try {
      const response: any = await get(`${podcastPage}${slug}`);

      if (response.status === 200) {
        const results = await response.json();

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
  },

  // Async Podcast Playlist Data
  getPlaylistData: (slug: string, page?: number) => async (dispatch: Dispatch) => {
    dispatch({
      type: types.PODCAST_PLAYLIST_FETCH
    });

    dispatch(podcastPageActions.startFetching());

    try {
      const response: any = await get(`${podcastPlaylist}${slug}?page=${page || 1}`);

      if (response.status === 200) {
        const results = await response.json();

        if (results._meta.currentPage > 1) {
          dispatch(podcastPageActions.updatePlaylistData(results));

          const tracks = results.items.map((item: any) => {
            return {
              ...item.track,
              musicSrc: `${item.track.musicSrc}?v=${Math.floor(Math.random() * 62)}`
            }
          }, []);

          dispatch(playerActions.updatePlaylistData(tracks));
        } else {
          dispatch(podcastPageActions.setPlaylistData(results));
        }

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
  },
});
