import { ADD_USER } from '../types'
const user = (state = 0, action) => {
    switch(action.type) {
        case ADD_USER:
            return state + 1
        default:
            return state
    }
}

export default user