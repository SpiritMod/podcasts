// Types
import { types, IPlayerState } from './types';
import IAction from "../../models/IAction";


const initialState: IPlayerState = {
  current: null,
  volume: 1,
  list: [],
  instancePlayer: null,
  play: false
};

// type action = {
//   type: string,
//   payload?: any
// }

export const playerReducer = (state = initialState, {type, payload}: IAction<object>) => {
  switch (type) {
    case types.PLAYER_SET_PLAYLIST:
      return { ...state, list: payload };
    case types.PLAYER_SET_INSTANCE:
      return { ...state, instancePlayer: payload };
    case types.PLAYER_UPDATE_PLAYLIST:
      return { ...state, list: [ ...state.list, ...payload ] };

    case types.PLAYER_SET_PLAY:
      return { ...state, play: payload };
    case types.PLAYER_SET_CURRENT:
      return { ...state, current: payload };
    case types.PLAYER_SET_VOLUME:
      return { ...state, volume: payload };

    default:
      return state;
  }
};
