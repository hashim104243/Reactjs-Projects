// import React, { useReducer } from 'react'
// import AppName from "./Components/AppName"
// import AddTodo from './Components/AddTodo'
// import { todoItemContext } from './Store/TodoItems-store'


// import "./App.css"
// import Message from './Components/Message'
// function todoItemReducer(currentTodoItem, action) {
//   let newTodoItem = currentTodoItem
//   if (action.type === "new_item") {
//     newTodoItem = [...currentTodoItem, { name: action.payload.name, dueDate: action.payload.dueDate }]
//   }
//   else if (action.type === "Delete_item") {
//     newTodoItem = currentTodoItem.filter((cur) => cur.name !== action.payload.name)
//   }

//   return newTodoItem;
// }

// function App() {


//   const [todoItem, dispachTodoItem] = useReducer(todoItemReducer, []);


//   function addItem(name, dueDate) {
//     const newItemAction = {
//       type: "new_item",
//       payload: {
//         name,
//         dueDate
//       }
//     }
//     dispachTodoItem(newItemAction)

//   }

//   function deleteItem(name) {
//     const DelItem = {
//       type: "Delete_item",
//       payload: {
//         name: name
//       }
//     }
//     dispachTodoItem(DelItem)
//   }

//   return (


//     <todoItemContext.Provider value={{
//       todoItem,
//       addItem,
//       deleteItem
//     }}>
//       <div className='todo-container d-flex flex-column '  >

//         <AppName />
//         <AddTodo />
//         <div className='items'><Message /></div>
//       </div>
//     </todoItemContext.Provider>
//   )
// }

// export default App;








import React from 'react'
import AppName from "./Components/AppName"
import AddTodo from './Components/AddTodo'
import TodoItemContextProvider from './Store/TodoItems-store'
import Message from './Components/Message'


function App() {



  return (


    <TodoItemContextProvider >
      <div className='todo-container d-flex flex-column '  >

        <AppName />
        <AddTodo />
        <div className='items'><Message /></div>
      </div>
    </TodoItemContextProvider>
  )
}
export default App;
