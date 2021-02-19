// Types
import {IPlaylistDataItem, types} from './types';

export const playerActions = Object.freeze({
  setVolume: (payload: number) => {
    return {
      type: types.PLAYER_SET_VOLUME,
      payload
    }
  },
  setPlay: (payload: boolean) => {
    return {
      type: types.PLAYER_SET_PLAY,
      payload
    }
  },
  setPlayerInstance: (payload: any) => {
    return {
      type: types.PLAYER_SET_INSTANCE,
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
