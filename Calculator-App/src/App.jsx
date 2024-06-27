import React from 'react'
import Display from './Components/Display'
import styles from "./App.module.css"
import ButtonContainer from './Components/ButtonContainer'
import { useState } from 'react'
export default function App() {
  const [state, setState] = useState("");

  function onHandleBtn(a) {
    if (a === "C") {
      setState("")
    }
    else if (a === "=") {
      const eq = eval(state);
      setState(eq)
    }
    else {
      const value = state + a;
      setState(value)
    }
  }

  return (
    <div className={styles.calculator}  >
      <Display state={state} />
      <ButtonContainer handleValues={onHandleBtn} />
    </div>
  )
}
