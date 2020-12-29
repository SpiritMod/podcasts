//core
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// Instruments
import { store } from "./stores/store";

// Routes
import {history} from './navigation/history';
import {Routes} from './navigation';

// styles
import './styles/app.scss';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Routes/>
        </Router>
      </Provider>
    </>
  );
};

export default App;
