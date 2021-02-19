// actions types
export enum types {
  // Sync
  PLAYER_SET_PLAYLIST = 'PLAYER_SET_PLAYLIST',
  PLAYER_UPDATE_PLAYLIST = 'PLAYER_UPDATE_PLAYLIST',
  PLAYER_SET_CURRENT = 'PLAYER_SET_CURRENT',
  PLAYER_SET_INSTANCE = 'PLAYER_SET_INSTANCE',
  PLAYER_SET_VOLUME = 'PLAYER_SET_VOLUME',
  PLAYER_SET_PLAY = 'PLAYER_SET_PLAY',
}

// item
export interface IPlaylistDataItem {
  id: string,
  name: string,
  singer:  string,
  cover: string,
  musicSrc: string,
}

// state
export interface IPlayerState {
  readonly current: IPlaylistDataItem | null,
  readonly volume: number,
  readonly instancePlayer: any,
  readonly list: IPlaylistDataItem[] | [],
  readonly play: boolean
}


