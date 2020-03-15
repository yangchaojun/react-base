const initialState = {
  focused: false
}

export default (state = initialState, action) => {
  if (action.type === 'SEARCH_FOCUSED') {
    return {
      focused: true
    }
  }

  if (action.type === 'SEARCH_BLURED') {
    return {
      focused: false
    }
  }
  return state
}