import {constants} from './index'
const initialState = {
  focused: false
}

export default (state = initialState, action) => {
  if (action.type === constants.SEARCH_FOUCSED) {
    return {
      focused: true
    }
  }

  if (action.type === constants.SEARCH_BLURED) {
    return {
      focused: false
    }
  }
  return state
}