import React, { createContext, useReducer } from 'react'
export const todoItemContext = createContext({
  todoItem: [],
  addItem: () => { },
  deleteItem: () => { }
});

function todoItemReducer(currentTodoItem, action) {
  let newTodoItem = currentTodoItem
  if (action.type === "new_item") {
    newTodoItem = [...currentTodoItem, { name: action.payload.name, dueDate: action.payload.dueDate }]
  }
  else if (action.type === "Delete_item") {
    newTodoItem = currentTodoItem.filter((cur) => cur.name !== action.payload.name)
  }

  return newTodoItem;
}


const TodoItemContextProvider = ({ children }) => {
  const [todoItem, dispachTodoItem] = useReducer(todoItemReducer, []);


  function addItem(name, dueDate) {
    const newItemAction = {
      type: "new_item",
      payload: {
        name,
        dueDate
      }
    }
    dispachTodoItem(newItemAction)

  }

  function deleteItem(name) {
    const DelItem = {
      type: "Delete_item",
      payload: {
        name: name
      }
    }
    dispachTodoItem(DelItem)
  }
  return (
    <todoItemContext.Provider value={{
      todoItem: todoItem,
      addItem: addItem,
      deleteItem: deleteItem

    }}>

      {children}
    </todoItemContext.Provider>
  )
}
export default TodoItemContextProvider