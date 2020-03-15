import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST
} from '../store/actionTypes'

export const getInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
}) 

export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initTodoList = (data) => ({
  type: INIT_TODO_LIST,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    fetch('/list')
      .then(res => res.json())
      .then(res => {
        const action = initTodoList(res)
        dispatch(action)
      })
  }
}