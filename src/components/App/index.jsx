import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import AppView from './AppView';

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppView />
      </Provider>
    );
  }
}
