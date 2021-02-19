// actions types
import {IPlaylistDataItem} from "../player/types";

export enum types {
  // Sync
  EPISODE_SET_DATA = 'EPISODE_SET_DATA',
  EPISODE_START_FETCHING = 'EPISODE_START_FETCHING',
  EPISODE_STOP_FETCHING = 'EPISODE_STOP_FETCHING',
  EPISODE_SET_FETCHING_ERROR = 'EPISODE_SET_FETCHING_ERROR',
  // Async
  EPISODE_FETCH = 'EPISODE_FETCH',
}

// item
export interface IEpisodeDataItem {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  details: string,
  transcript: string,
  colorFirst: string,
  colorSecond: string,
  slug: string;
  podcastSlug: string,
  created: string,
  track: IPlaylistDataItem,
}

// state
export interface IEpisodeState {
  readonly isFetching: boolean,
  readonly error: any,
  readonly data: IEpisodeDataItem | null,
}


