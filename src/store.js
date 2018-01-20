/* global window: true */
/* eslint-disable no-underscore-dangle */

// import { createStore, combineReducers } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware, thunk)));
sagaMiddleware.run(rootSagas);

export default store;
