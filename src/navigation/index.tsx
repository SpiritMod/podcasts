// Core
import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

// Routes
import {book} from './book';

// Pages
import { HomePage, PodcastPage, EpisodePage, PageNotFound } from '../Pages';

// Components
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

        <Route status={'404'}>
          <PageNotFound />
        </Route>
      </Switch>

      <Player />
    </>
  )
};
