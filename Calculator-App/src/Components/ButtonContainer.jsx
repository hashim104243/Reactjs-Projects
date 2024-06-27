import React from 'react'
import styles from "./ButtonContainer.module.css"

export default function ButtonContainer({ handleValues }) {
  const calculateBtn = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", ".", "0",]
  return (
    <div className={styles.buttonContainer}>
      {calculateBtn.map((values, index) => <button key={index} className={styles.button} onClick={() => handleValues(values)} > {values}</button>)
      }




    </div >
  )
}
