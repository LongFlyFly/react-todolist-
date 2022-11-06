import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
import PropTypes from 'prop-types'
export default class List extends Component {

  // 控制类型
  static propTypes = {
    todos:PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }

  render() {
    // 收数据
    const {todos,updateTodo,deleteTodo} =this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
