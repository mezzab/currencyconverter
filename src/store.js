/* global window: true */
import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';

export default createStore(
  combineReducers({
    reducer,
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
