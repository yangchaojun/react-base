import React from 'react'
import { Input, Button, List } from "antd"

const TodoListUI = (props) => {
  return (
    <div style={{ padding: "10px" }}>
    <Input
      value={props.inputValue}
      style={{ width: "300px", marginRight: "10px" }}
      placeholder="Todo Info"
      onChange={props.handleInputChange}
    />
    <Button type="primary" onClick={props.handleClick}>Primary</Button>
    <List
      style={{ width: "400px", marginTop: "10px" }}
      bordered
      dataSource={props.list}
      renderItem={(item, index) => <List.Item onClick={(index) => { props.handleItemDelete(index) } }>{item}</List.Item>}
    />
  </div>
  )
}

export default TodoListUI