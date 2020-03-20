import {constants} from './index'
import {fromJS} from 'immutable'
const initialState = fromJS({
  focused: false,
  list: []
})

export default (state = initialState, action) => {
  if (action.type === constants.SEARCH_FOUCSED) {
    return state.set('focused', true)
  }

  if (action.type === constants.SEARCH_BLURED) {
    return state.set('focused', false)
  }

  if (action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data)
  }
  return state
}