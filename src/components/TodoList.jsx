import React, { Component } from "react"
import { Input, Button, List } from "antd"
import { store } from "../store"
import {
  getAddTodoItemAction,
  getInputValueAction,
  getDeleteTodoItemAction
} from '../store/actionCreators'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    store.subscribe(this.handleStoreChange)
	}

	render() {
		const { inputValue, list } = this.state
		return (
			<div style={{ padding: "10px" }}>
				<Input
          value={inputValue}
					style={{ width: "300px", marginRight: "10px" }}
          placeholder="Todo Info"
          onChange={this.handleInputChange}
				/>
				<Button type="primary" onClick={this.handleClick}>Primary</Button>
				<List
					style={{ width: "400px", marginTop: "10px" }}
					bordered
					dataSource={list}
					renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
				/>
			</div>
		)
  }
  
  handleInputChange(e) {
    const action = getInputValueAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleClick() {

    if (this.state.inputValue === '') return
    const action = getAddTodoItemAction()

    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteTodoItemAction(index)

    store.dispatch(action)
  }
}
