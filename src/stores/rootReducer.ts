// Core
import { combineReducers } from 'redux';

// Reducers
import {exampleReducer as example} from './example/reducer';
import {playerReducer as player} from './player/reducer';
import {podcastsReducer as podcasts} from './podcasts/reducer';
import {podcastPageReducer as podcastPage} from './podcastPage/reducer';

export const rootReducer = combineReducers({
  player,
  podcasts,
  podcastPage,
  example,
});
