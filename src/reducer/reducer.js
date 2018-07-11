import { CHANGE_SEARCH_FIELD } from '../constants.js';

const initialState = {
  searchBox: ''
}

export const searchBots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchBox:action.payload }
    default:
      return state;
  }
}
