import {createStore, applyMiddleware} from 'redux'
// import counter from './reducers/counter'

import rootReducer from './reducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(logger, error, thunk)))

export default store