import { ADD_USER, FETCH_USER_STATE } from '../types'
const initState = {
    userNum: 0,
    userInfo: {}
}
const user = (state = initState, action) => {
    switch(action.type) {
        case ADD_USER:
            console.log(action)
            return {
                userNum: state.userNum + 1,
                userInfo: state.userInfo
            }
        case FETCH_USER_STATE:
            return {
                userNum: state.userNum,
                userInfo: action.data
            }
        default:
            return state
    }
}

export default user