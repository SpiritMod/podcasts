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

  const { volume, current, list, play, instancePlayer } = useSelector((state: playerState) => state.player);

  const setPlaylist = (data: IPlaylistDataItem[]) => dispatch(playerActions.setPlaylistData(data));
  const setPlay = (data: boolean) => dispatch(playerActions.setPlay(data));
  const updatePlaylist = (data: IPlaylistDataItem[]) => dispatch(playerActions.updatePlaylistData(data));
  const setPlayerInstance = (data: any) => dispatch(playerActions.setPlayerInstance(data));

  const setCurrent = (data: IPlaylistDataItem) => dispatch(playerActions.setCurrent(data));
  const setVolume = (volume: number) => {
    localStorage.setItem('playerVolume', JSON.stringify(volume));
    dispatch(playerActions.setVolume(volume));
  }


  //const localVolume = JSON.parse(localStorage.getItem('playerVolume') || '{}');
  useEffect(() => {
    let volume = 1;
    if (typeof localStorage.getItem('playerVolume') === 'string') {
      volume = JSON.parse(localStorage.getItem('playerVolume') || '{}');
      setVolume(volume);
    }
  }, [volume]);

  useEffect(() => {
    //console.log('usePlayer current: ', current);
  }, [current]);


  return {
    current,
    volume,
    list,
    instancePlayer,
    play,
    setVolume,
    setCurrent,
    setPlaylist,
    setPlayerInstance,
    updatePlaylist,
    setPlay,
  } as const
};
