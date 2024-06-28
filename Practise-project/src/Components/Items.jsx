import React, { useMemo } from 'react'
import style from "../Components/Items.module.css"


function Items({ item, bought, handleBtn }) {
  const val = useMemo(() => `${style.ite} ${bought ? "active" : " "}`, [bought])

  // const itemClass = useMemo(() => `${style.ite} ${bought ? style.active : ''}`, [bought]);
  console.log("Rendering Items component");
  console.log(val);

  return (
    <div className={val}>
      <p>{item}</p>
      <button onClick={handleBtn} >Buy</button>
    </div >
  )
}

export default (Items)
