// actions types
export enum types {
  // Sync
  EXAMPLE_FILL = 'EXAMPLE_FILL',
  EXAMPLE_START_FETCHING = 'EXAMPLE_START_FETCHING',
  EXAMPLE_STOP_FETCHING = 'EXAMPLE_STOP_FETCHING',
  EXAMPLE_SET_FETCHING_ERROR = 'EXAMPLE_SET_FETCHING_ERROR',
  // Async
  EXAMPLE_FETCH_ASYNC = 'SONG_FETCH_ASYNC',
}

// item
export interface IExampleDataItem {
  id: string,
}

// state
export interface IExampleState {
  readonly isFetching: boolean,
  readonly error: string,
  readonly data: IExampleDataItem[]
}


