import { ADD_USER, FETCH_USER_STATE } from '../types'

export function addUser() {
    return {
        type: ADD_USER
    }
}

export function fetchUserInfo() {
    // return {
    //     type: FETCH_USER_STATE
    // }

    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_USER_STATE,
                data
            })
        })
    }
}