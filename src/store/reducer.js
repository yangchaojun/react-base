import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST
} from '../store/actionTypes'

const initialState = {
  inputValue: '',
  list: []
}

export default (state = initialState, action) => {
  
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = { ...state, inputValue: action.value }
    return newState
  }

  if (action.type === INIT_TODO_LIST) {
    const newState = { ...state }
    newState.list = action.data
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = { ...state }
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = { ...state }
    newState.list.splice(action.index, 1)
    return newState
  }

  return state
}