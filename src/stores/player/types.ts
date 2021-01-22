// actions types
export enum types {
  // Sync
  PLAYER_SET_PLAYLIST = 'PLAYER_SET_PLAYLIST',
  PLAYER_UPDATE_PLAYLIST = 'PLAYER_UPDATE_PLAYLIST',
  PLAYER_SET_CURRENT = 'PLAYER_SET_CURRENT',
  PLAYER_SET_VOLUME = 'PLAYER_SET_VOLUME',
}

// item
export interface IPlaylistDataItem {
  id: string,
  name: string,
  singer:  string,
  cover: string,
  musicSrc: string,
  timestamp: string,
}

// state
export interface IPlayerState {
  readonly current: IPlaylistDataItem | null,
  readonly volume: number,
  readonly playlist: IPlaylistDataItem[] | [],
}


