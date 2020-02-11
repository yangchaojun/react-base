import * as actionTypes from '../types'
export function increment(num = 1) {
    return {
        type: actionTypes.INCREMENT,
        num
    }
}

export function decrement(num = 1) {
    return {
        type: actionTypes.DECREMENT,
        num
    }
}