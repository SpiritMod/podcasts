// Core
import { combineReducers } from 'redux';

// Reducers
import {exampleReducer as example} from './example/reducer';
import {playerReducer as player} from './player/reducer';

export const rootReducer = combineReducers({
  player,
  example,
});
