import {createStore, applyMiddleware} from 'redux'
// import counter from './reducers/counter'

import rootReducer from './reducers'

import logger from 'redux-logger'

// logger中间件
// const logger = store => next => action => {
//     console.log('dispatch:', action)
//     let result = next(action)
//     console.log('state:', store.getState())
//     return result
// }

// error中间件
const error = store => next => action => {
    try {
        next(action)
    } catch(e) {
        console.log('error:', e)
    }
}

const store = createStore(rootReducer, {}, applyMiddleware(logger, error))

export default store