import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants.js'

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// Usually in a setup test file
const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const text = "Hello";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles req robots api', () => {
  const store = mockStore()
  store.dispatch(actions.requestRobots())
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  }
})
