import {createStore, applyMiddleware} from 'redux'
// import counter from './reducers/counter'

import rootReducer from './reducers'

// logger中间件
const logger = store => next => action => {
    console.log('dispatch:', action)
    let result = next(action)
    console.log('state:', store.getState())
    return result
}

const store = createStore(rootReducer, {}, applyMiddleware(logger))

export default store