import React, { Component } from "react"
import { store } from "../store"
import {
  getAddTodoItemAction,
  getInputValueAction,
  getDeleteTodoItemAction
} from '../store/actionCreators'
import TodoListUI from './TodoListUI'

export default class TodoList extends Component {
	constructor(props) {
		super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
	}

	render() {
		const { inputValue, list } = this.state
		return (
      <TodoListUI 
        inputValue={inputValue}
        list={list}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        handleItemDelete={this.handleItemDelete}
      />
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
