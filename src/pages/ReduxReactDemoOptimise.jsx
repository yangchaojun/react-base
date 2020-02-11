import React from 'react'
import {connect} from 'react-redux'
// import {
//     increment,
//     decrement
// } from '../actions/counter'

import * as counterActions from '../actions/counter'
import {bindActionCreators} from 'redux'


class ReduxReactDemo extends React.Component {
    render() {

        console.log(this.props)

        const {counterActions} = this.props

        return (
            <div className="container">
                <h1 className="jumbotron text-center">{this.props.count}</h1>
                <p className="text-center">
                    {/* <button onClick={ this.props.increment } className="btn btn-primary">increment</button>
                    <button onClick={ this.props.decrement } className="btn btn-success">decrement</button> */}
                    <button onClick={ counterActions.increment } className="btn btn-primary">increment</button>
                    <button onClick={ counterActions.decrement } className="btn btn-success">decrement</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => { dispatch(increment()) },
//         decrement: () => { dispatch(decrement()) }
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        counterActions: bindActionCreators(counterActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxReactDemo)