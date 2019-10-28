import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { PeopleList } from './components/peoplelist/view/peoplelist.container'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { peopleListReducer } from './components/peoplelist/state/peopleListReducer';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  peopleListReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
