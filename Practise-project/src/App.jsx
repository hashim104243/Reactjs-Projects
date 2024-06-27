import React, { useState } from 'react'
import AppName from './Components/AppName'
import TodoItems from './Components/TodoItems'
import style from './Components/App.module.css';
import InputItem from './Components/InputItem';



export default function App() {

  // const [state, setState] = useState("dnkdjnc");

  const [foodItem, setFoodItem] = useState(["a", "b"]);

  function handleKeyBtn(e) {
    if (e.target.value.length == 0) return;

    if (e.key === "Enter") {
      const value = e.target.value;
      e.target.value = " "
      const newItem = [...foodItem, value]
      setFoodItem(newItem)
    }



  }
  return (
    <div className={style.box}>
      <AppName />
      <InputItem handleKeyBtn={handleKeyBtn} />

      <TodoItems item={foodItem} />

    </div>
  )
}
