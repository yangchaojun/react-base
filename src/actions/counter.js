import * as actionTypes from '../types'
// export function increment(num = 1) {
//     return {
//         type: actionTypes.INCREMENT,
//         num
//     }
// }

export function increment(num = 1) {
    return dispatch => {
        setTimeout( () => {
            dispatch({
                type: actionTypes.INCREMENT,
                num
            })
        } , 1000)
    }
}

export function decrement(num = 1) {
    return {
        type: actionTypes.DECREMENT,
        num
    }
}