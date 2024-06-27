import Reac, { createContext } from 'react'
export const todoItemContext = createContext({
  todoItem: [],
  addItem: () => { },
  deleteItem: () => { }
});