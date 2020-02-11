import React from 'react'
import { connect } from 'react-redux'
import * as userActions from '../actions/user'
import {bindActionCreators} from 'redux'

class UserNum extends React.Component {
    render() {
        console.log(this.props)
        return(
            <h1 className="jumbotron text-center">
                当前人数为：{this.props.user.userNum}
                <p className="text-center">
                    <button onClick={ () => this.props.userActions.addUser() } className="btn btn-success">增加</button>
                    <button onClick={ () => this.props.userActions.fetchUserInfo() } className="btn btn-primary">获取用户</button>
                </p>
                <p className="text-center">
                    title: {this.props.user.userInfo.title ? this.props.user.userInfo.title : ''}
                </p>
            </h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNum)