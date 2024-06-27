import React from 'react'
import styles from "./ClockHedaing.module.css"
export default function ClockHeading() {
  console.log(styles);
  return (
    <div className='m-3'>
      <h1 className={styles.heading}>Pak Clock</h1>
    </div>
  )
}
