import {constants} from './index'
import {fromJS} from 'immutable'
const initialState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = initialState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOUCSED:
      return state.set('focused', true)
    case constants.SEARCH_BLURED:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}