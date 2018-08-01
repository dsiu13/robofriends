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
      type: type.CHANGE_SEARCH_FIELD,
      payload: 'abc'
    }).toEqual({
      searchBox:'abc'
    })
  })

})
