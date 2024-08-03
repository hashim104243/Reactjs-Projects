import React from 'react'
import Bagsummary from '../Components/Bagsummary'
import BagItem from '../Components/BagItem'
import { useSelector } from 'react-redux'

export default function Bag() {
  const item = useSelector(store => store.items);
  const bagItem = useSelector(store => store.bag);
  const finalItem = item.filter((item) => {
    const foundElement = bagItem.indexOf(item.id);
    return foundElement >= 0
  })

  return (
    <div className='bag-page'>
      <div className='bag-items-container'>
        {finalItem.map((item) => {
          return <BagItem item={item} />
        })}

      </div>
      {bagItem.length == 0 ? <h1>no item history</h1> : <div className='bag-summary'>
        <Bagsummary /></div>}


    </div>
  )
}
