import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import historyReducer from '../reducers/history';
import paginationReducer from '../reducers/pagination';
import payloadsReducer from '../reducers/payload';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      histories: historyReducer,
      pagination: paginationReducer,
      payloads: payloadsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
