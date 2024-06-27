import React, { useState } from 'react'
import Items from './Items'
export default function TodoItems({ item }) {
  const [active, setActiveState] = useState([]);
  function OnHandleBtn(item, e) {
    const newItem = [...active, item]
    setActiveState(() => newItem)



  }

  return (
    <div>
      {
        item.map((item, index) => {
          return (
            <Items
              item={item}
              key={index}
              bought={active.includes(item)}
              handleBtn={(e) => OnHandleBtn(item, e)}
            />
          )
        })
      }
    </div>
  )
}
