// Core
import { combineReducers } from 'redux';

// Reducers
import {playerReducer as player} from './player/reducer';
import {podcastPageReducer as podcast} from './podcastPage/reducer';
import {podcastSliderReducer as podcastSlider} from './podcastSlider/reducer';
import {episodeReducer as episode} from './episode/reducer';
import {episodesReducer as episodes} from './episodes/reducer';
import {recommendedReducer as recommended} from './recommended/reducer';
import {socialReducer as social} from './social/reducer';

export const rootReducer = combineReducers({
  player,
  episodes,
  episode,
  podcast,
  podcastSlider,
  recommended,
  social,
});
