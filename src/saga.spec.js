/* eslint-env jasmine */
/* eslint import/no-extraneous-dependencies: 0 */

import { call, put, select } from 'redux-saga/effects';
import { getLatest } from './rootSagas';
import { getInitialData } from './actions/action';
import services from './services/request';
import { performRequest } from './utils/sagasHelpers';

describe('addAlert', () => {
    const bodyRequest = 'addRequestFromBuilder';
    const action = 'action';


    it('should call addByUserId service if user is Admin', () => {

        let generator = getLatest();

        expect(generator.next().value).toEqual(
            call(performRequest, services.latest, getInitialData)
        );
    });

});
