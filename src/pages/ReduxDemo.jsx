import React from 'react'
import { createStore } from 'redux'
import counter from '../reducers/counter'
// 创建仓库
const store = createStore(counter)

export default class ReduxDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement() {
        store.dispatch({
            type: "INCREMENT"
        })
    }

    handleDecrement() {
        store.dispatch({
            type: 'DECREMENT'
        })
    }
    
    render() {
        store.subscribe(() => {
            console.log(`count: ${store.getState()}`)

            this.setState({
                count: store.getState()
            })
        })
        return (
            <div className="container">
                <h1 className="jumbotron text-center">{this.state.count}</h1>
                <p className="text-center">
                    <button onClick={ this.handleIncrement } className="btn btn-primary">increment</button>
                    <button onClick={ this.handleDecrement } className="btn btn-success">decrement</button>
                </p>
            </div>
        )
    }
}