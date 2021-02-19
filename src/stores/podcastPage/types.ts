import { IPlaylistDataItem } from "../player/types";
import {IEpisodesDataItem} from "../episodes/types";

// actions types
export enum types {
  // Sync
  PODCAST_PAGE_SET_DATA = 'PODCAST_PAGE_SET_DATA',
  PODCAST_PAGE_UPDATED_DATA = 'PODCAST_PAGE_UPDATED_DATA',
  PODCAST_PAGE_START_FETCHING = 'PODCAST_PAGE_START_FETCHING',
  PODCAST_PAGE_STOP_FETCHING = 'PODCAST_PAGE_STOP_FETCHING',
  PODCAST_PAGE_SET_FETCHING_ERROR = 'PODCAST_PAGE_SET_FETCHING_ERROR',
  PODCAST_PLAYLIST_SET_DATA = 'PODCAST_PLAYLIST_SET_DATA',
  PODCAST_PLAYLIST_UPDATE_DATA = 'PODCAST_PLAYLIST_UPDATE_DATA',

  // Async
  PODCAST_PAGE_FETCH = 'PODCAST_PAGE_FETCH',
  PODCAST_PLAYLIST_FETCH = 'PODCAST_PLAYLIST_FETCH',
}

// item
export interface IPodcastPageDataItem {
  id: string,
  title: string,
  description: string,
  bgUrl: string,
  imgUrl: string,
  slug: string,
  colorFirst: string,
  colorSecond: string,
  playlist?: IPlaylistDataItem[],
}

// Podcast Playlist Item
export interface IPodcastPlaylistDataItem {
  id: string,
  title: string,
  duration: string,
  colorFirst: string,
  colorSecond: string,
  slug: string,
  created: string,
  podcastSlug: string,
  track: IPlaylistDataItem,
}
//
export interface IItem {
  playlist: IPodcastPlaylistDataItem[]
}

export interface IPlaylistData {
  items: IPodcastPlaylistDataItem[],
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
export interface IPodcastPageState {
  readonly isFetching: boolean,
  readonly error: any,
  readonly data: IPodcastPageDataItem | null,
  readonly playlist: IPlaylistData | null,
}


