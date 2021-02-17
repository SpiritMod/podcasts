// actions types

export enum types {
  // Sync
  SOCIAL_SET_DATA = 'SOCIAL_SET_DATA',
  SOCIAL_START_FETCHING = 'SOCIAL_START_FETCHING',
  SOCIAL_STOP_FETCHING = 'SOCIAL_STOP_FETCHING',
  SOCIAL_SET_FETCHING_ERROR = 'SOCIAL_SET_FETCHING_ERROR',
  // Async
  SOCIAL_FETCH = 'SOCIAL_FETCH',
}

// item
export interface ISocialDataItem {
  id: string,
  url: string,
  img: string,
}

// state
export interface ISocialState {
  readonly isFetching: boolean,
  readonly error: any,
  readonly data: ISocialDataItem[] | null,
}


