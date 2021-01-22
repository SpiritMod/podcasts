// Types
import {IPlaylistDataItem, types} from './types';

export const playerActions = Object.freeze({
  setVolume: (payload: number) => {
    return {
      type: types.PLAYER_SET_VOLUME,
      payload
    }
  },
  setCurrent: (payload: IPlaylistDataItem) => {
    return {
      type: types.PLAYER_SET_CURRENT,
      payload
    }
  },
  setPlaylistData: (payload: IPlaylistDataItem[]) => {
    return {
      type: types.PLAYER_SET_PLAYLIST,
      payload
    }
  },
  updatePlaylistData: (payload: IPlaylistDataItem[]) => {
    return {
      type: types.PLAYER_UPDATE_PLAYLIST,
      payload
    }
  },
});
