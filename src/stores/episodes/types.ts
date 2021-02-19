// actions types
import {IPlaylistDataItem} from "../player/types";

export enum types {
  // Sync
  EPISODES_SET_DATA = 'EPISODES_SET_DATA',
  EPISODES_UPDATE_DATA = 'EPISODES_UPDATE_DATA',
  EPISODES_START_FETCHING = 'EPISODES_START_FETCHING',
  EPISODES_STOP_FETCHING = 'EPISODES_STOP_FETCHING',
  EPISODES_SET_FETCHING_ERROR = 'EPISODES_SET_FETCHING_ERROR',
  // Async
  EPISODES_FETCH = 'EPISODES_FETCH',
}

// item
export interface IEpisodesDataItem {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  colorFirst: string,
  colorSecond: string,
  slug: string,
  podcastSlug: string,
  created: string,
  track: IPlaylistDataItem,
}

export interface IEpisodesData {
  items: IEpisodesDataItem[],
  _links: {
    self: {
      href: string
    },
    first: {
      href: string
    },
    last: {
      href: string
    },
    next: {
      href: string
    }
  }
  _meta: {
    totalCount: number,
    pageCount: number,
    currentPage: number,
    perPage: number,
  }
}

// state
export interface IEpisodesState {
  readonly isFetching: boolean,
  readonly error: any,
  readonly data: IEpisodesData | null,
}


