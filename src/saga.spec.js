/* eslint-env jasmine */
/* eslint import/no-extraneous-dependencies: 0 */

import { call } from 'redux-saga/effects';
import { getLatest } from './rootSagas';
import { getInitialData } from './actions/action';
import services from './services/request';
import { performRequest } from './utils/sagasHelpers';

describe('addAlert', () => {
  it('should call addByUserId service if user is Admin', () => {
    const generator = getLatest();
    expect(generator.next().value).toEqual(call(performRequest, services.latest, getInitialData));
  });
});
