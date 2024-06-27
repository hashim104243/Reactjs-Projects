import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { todoItemContext } from '../Store/TodoItems-store'
export default function Message() {
  const { todoItem } = useContext(todoItemContext);


  return (
    <div>
      {todoItem.length === 0 ?
        <h3 style={{ marginLeft: "300px" }}>enjoy your day  </h3> : <TodoItem />}
    </div>
  )
}
