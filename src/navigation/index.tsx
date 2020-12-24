// Core
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Routes
import {book} from './book';

// Pages
import { HomePage, PodcastPage, EpisodePage } from '../Pages';
import ScrollToTop from './ScrollToTop';
import Player from "../components/Player";

export const Routes: React.FC = () => {
  return (
    <>
      <ScrollToTop />

      <Switch>
        <Route exact path={book.root}>
          <HomePage />
        </Route>
        <Route exact path={book.podcast}>
          <PodcastPage />
        </Route>
        <Route exact path={book.episode}>
          <EpisodePage />
        </Route>

        <Route>
          <h1>PAGE NOT FOUND</h1>
        </Route>
      </Switch>

      <Player />
    </>
  )
};
