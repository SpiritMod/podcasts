import {useDispatch, useSelector } from "react-redux";
import { IPlaylistDataItem, IPlayerState } from "./types";
import { playerActions } from "./actions";
import {useEffect} from "react";

type playerState = {
  player: IPlayerState
}

// type usePlayerType = {
//   current: IPlaylistDataItem | null,
//   data: IPlaylistDataItem[],
//   setPlaylist: Function
// }

export const usePlayer = () => {
  const dispatch = useDispatch();

  const { volume, current, playlist } = useSelector((state: playerState) => state.player);

  const setPlaylist = (data: IPlaylistDataItem[]) => dispatch(playerActions.setPlaylistData(data));
  const updatePlaylist = (data: IPlaylistDataItem[]) => dispatch(playerActions.updatePlaylistData(data));

  const setCurrent = (data: IPlaylistDataItem) => dispatch(playerActions.setCurrent(data));
  const setVolume = (volume: number) => {
    localStorage.setItem('playerVolume', JSON.stringify(volume));
    dispatch(playerActions.setVolume(volume));
  }


  useEffect(() => {
    let volume = 1;
    if (typeof localStorage.getItem('playerVolume') === 'string') {
      volume = JSON.parse(localStorage.getItem('playerVolume') || '{}');
      setVolume(volume);
    }
  }, []);


  return {
    current,
    volume,
    playlist,
    setVolume,
    setCurrent,
    setPlaylist,
    updatePlaylist,
  } as const
};
