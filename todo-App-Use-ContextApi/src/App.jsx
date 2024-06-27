import React, { useState } from 'react'
import AppName from "./Components/AppName"
import AddTodo from './Components/AddTodo'
import { todoItemContext } from './Store/TodoItems-store'


import "./App.css"
import Message from './Components/Message'

function App() {
  const iniTtodoItem = [
    {
      id: 0,
      name: "abcd",
      dueDate: "11/22/12",

    },

  ]
  const [todoItem, setTodoItem] = useState([]);
  function addItem(name, dueDate) {
    if (!name && !dueDate) return
    setTodoItem((cuurentValues) => [...cuurentValues, { name: name, dueDate: dueDate }])
  }
  function deleteItem(name) {
    setTodoItem((cur) => cur.filter((cur) => cur.name !== name))
  }
  const abc = [{ name: "hashim", gender: "male" }]
  return (

    <todoItemContext.Provider value={{
      todoItem: todoItem,
      addItem: addItem,
      deleteItem: deleteItem

    }}>
      <div className='todo-container d-flex flex-column '  >

        <AppName />
        <AddTodo />
        <div className='items'>
          <Message todoItem={todoItem} />

        </div>
      </div>
    </todoItemContext.Provider>
  )
}
export default App;