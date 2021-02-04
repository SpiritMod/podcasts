import { IPlaylistDataItem } from "../player/types";

// actions types
export enum types {
  // Sync
  PODCAST_PAGE_SET_DATA = 'PODCAST_PAGE_SET_DATA',
  PODCAST_PAGE_UPDATED_DATA = 'PODCAST_PAGE_UPDATED_DATA',
  PODCAST_PAGE_START_FETCHING = 'PODCAST_PAGE_START_FETCHING',
  PODCAST_PAGE_STOP_FETCHING = 'PODCAST_PAGE_STOP_FETCHING',
  PODCAST_PAGE_SET_FETCHING_ERROR = 'PODCAST_PAGE_SET_FETCHING_ERROR',
  // Async
  PODCAST_PAGE_FETCH = 'PODCAST_PAGE_FETCH',
}

// item
export interface IPodcastPageDataItem {
  id: string,
  title: string,
  description: string,
  bgUrl: string,
  imgUrl: string,
  playlist?: IPlaylistDataItem[],
}

// state
export interface IPodcastPageState {
  readonly isFetching: boolean,
  readonly error: any,
  readonly data: IPodcastPageDataItem | null
}


