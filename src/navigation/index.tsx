// Core
import React from 'react';
import {Switch, Route} from 'react-router-dom';


// Routes
import {book} from './book';

// Pages
import { HomePage, PodcastPage } from '../Pages';

export const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path={book.root}>
          <HomePage />
        </Route>
        <Route exact path={book.podcast}>
          <PodcastPage />
        </Route>

        <Route>
          <h1>PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </>
  )
};
