// actions types
export enum types {
  // Sync
  PODCASTS_SET_DATA = 'PODCASTS_SET_DATA',
  PODCASTS_UPDATED_DATA = 'PODCASTS_UPDATED_DATA',
  PODCASTS_START_FETCHING = 'PODCASTS_START_FETCHING',
  PODCASTS_STOP_FETCHING = 'PODCASTS_STOP_FETCHING',
  PODCASTS_SET_FETCHING_ERROR = 'PODCASTS_SET_FETCHING_ERROR',
  // Async
  PODCASTS_FETCH = 'PODCASTS_FETCH',
}

// item
export interface IPodcastsDataItem {
  id: string,
}

// state
export interface IPodcastsState {
  readonly isFetching: boolean,
  readonly error: string,
  readonly data: IPodcastsDataItem[]
}


