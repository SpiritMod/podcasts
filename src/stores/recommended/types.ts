// actions types

export enum types {
  // Sync
  RECOMMENDED_SET_DATA = 'RECOMMENDED_SET_DATA',
  RECOMMENDED_START_FETCHING = 'RECOMMENDED_START_FETCHING',
  RECOMMENDED_STOP_FETCHING = 'RECOMMENDED_STOP_FETCHING',
  RECOMMENDED_SET_FETCHING_ERROR = 'RECOMMENDED_SET_FETCHING_ERROR',
  // Async
  RECOMMENDED_FETCH = 'RECOMMENDED_FETCH',
}

// item
export interface IRecommendedDataItem {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  colorFirst: string,
  colorSecond: string,
  imgUrl: string,
  slug: string,
  podcastSlug: string,
}

// state
export interface IRecommendedState {
  readonly isFetching: boolean,
  readonly error: any,
  readonly data: IRecommendedDataItem[] | null,
}


