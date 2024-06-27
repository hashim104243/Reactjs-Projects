import React from 'react'
import styles from "./Display.module.css"
export default function Display({ state }) {
  return (
    <div>
      <input type='text' value={state} readOnly className={styles.text} />

    </div>
  )
}
