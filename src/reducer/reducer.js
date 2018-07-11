import { CHANGE_SEARCHFIELD } from '../constants.js';

const initialState = {
  searchBox: ''
}

export const searchBots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchBox:action.payload }
    default:
      return state;
  }
}
