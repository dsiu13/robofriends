import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants'

import * as reducers from './reducers'

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '';
  }
  it('return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchBox:''});
  })

  it('handle search field change', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({
      searchBox:'abc'
    })
  })
})

describe('requestRobots', () => {
  initialStateRobots = {
    robots: [],
    isPending: true
  }

  it('expect to return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({searchBox: ''})
  })

  it('handle req robots pending action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
      payload: [{
        id: '123',
        name:'test',
        email:'test@gmail.com'
      }]
    })).toEqual({
      robots:[{
        id: '123',
        name:'test',
        email:'test@gmail.com'
      }],
      isPending: true
    })
  })

  it('handle req robots pending failed action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: ':('
    })).toEqual({
      err:[{
        ':('
      }],
      isPending: false
    })
  })

})
