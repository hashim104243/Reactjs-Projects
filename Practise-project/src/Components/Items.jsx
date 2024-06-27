import React from 'react'
import style from "../Components/Items.module.css"

export default function Items({ item, bought, handleBtn }) {
  console.log(item);
  return (
    <div className={`${style.ite} ${bought && "active"}`}>
      <p>{item}</p>
      <button onClick={handleBtn} >Buy</button>
    </div >
  )
}
