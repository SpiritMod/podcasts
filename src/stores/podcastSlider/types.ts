// actions types
export enum types {
  // Sync
  PODCAST_SLIDER_SET_DATA = 'PODCAST_SLIDER_SET_DATA',
  PODCAST_SLIDER_START_FETCHING = 'PODCAST_SLIDER_START_FETCHING',
  PODCAST_SLIDER_STOP_FETCHING = 'PODCAST_SLIDER_STOP_FETCHING',
  PODCAST_SLIDER_SET_FETCHING_ERROR = 'PODCAST_SLIDER_SET_FETCHING_ERROR',
  // Async
  PODCAST_SLIDER_FETCH = 'PODCAST_SLIDER_FETCH',
}

// item
export interface IPodcastSliderDataItem {
  id: string,
  slug: string;
  colorFirst: string,
  colorSecond: string,
  imgUrl: string,
  title: string,
  description: string,
}

// state
export interface IPodcastSliderState {
  readonly isFetching: boolean,
  readonly error: string,
  readonly data: IPodcastSliderDataItem[] | null,
}


