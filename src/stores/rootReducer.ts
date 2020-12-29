// Core
import { combineReducers } from 'redux';

// Reducers
import {exampleReducer as example} from './example/reducer';

export const rootReducer = combineReducers({
  example,
});
