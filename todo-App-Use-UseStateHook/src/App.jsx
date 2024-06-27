import React, { useState } from 'react'
import AppName from "./Components/AppName"
import AddTodo from './Components/AddTodo'

import TodoItem from './Components/TodoItem'

import "./App.css"
function App() {
  const iniTtodoItem = [
    {
      id: 0,
      name: "abcd",
      dueDate: "11/22/12",

    },

  ]
  const [todoItem, setTodoItem] = useState([]);
  function handleFunc(name, dueDate) {
    if (!name && !dueDate) return
    setTodoItem((cuurentValues) => [...cuurentValues, { name: name, dueDate: dueDate }])
  }
  function handleDelete(name) {
    setTodoItem((cur) => cur.filter((cur) => cur.name !== name))
  }
  return (
    <div className='todo-container d-flex flex-column '  >

      <AppName />
      <AddTodo getValues={handleFunc} />
      <div className='items'>
        {todoItem.length === 0 ?
          <h3 style={{ marginLeft: "300px" }}>enjoy your day  </h3> : <TodoItem items={todoItem} handleDelete={handleDelete} />}

      </div>
    </div>
  )
}
export default App;