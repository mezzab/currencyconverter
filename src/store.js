import { createStore } from 'redux';
import { combineReducers } from 'redux';
import reducer from './reducers/reducer';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  combineReducers({
    reducer
  }),
  reduxDevTools
);
