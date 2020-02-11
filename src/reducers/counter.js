import * as actionTypes from '../types'
const counter = (state = 0, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return state + action.num
        case actionTypes.DECREMENT:
            return state - action.num
        default:
            return state
    }
}

export default counter