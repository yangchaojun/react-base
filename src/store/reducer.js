const initialState = {
  inputValue: 'hello world',
  list: []
}

export default (state = initialState, action) => {
  if (action.type === 'CHANGE_INPUT_VALUE') {
    const newState = { ...state }
    newState.inputValue = action.value 
    return newState
  }
  return state
}