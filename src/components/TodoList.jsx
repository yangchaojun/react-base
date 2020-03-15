import React, { Component } from "react"
import {connect} from 'react-redux'

class TodoList extends Component {

	render() {
		return (
			<div style={{padding: '10px'}}>
				<div>
					<input type="text" value={this.props.inputValue} onChange={this.props.handleInputChange}/>
					<button>提交</button>
				</div>
				<ul>
					<li>1222</li>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	...state
}) 

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange(e) {
			const action = {
				type: 'CHANGE_INPUT_VALUE',
				value: e.target.value
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
