import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayCounter() {

  // const value = useSelector(store => store.counter);
  // const counter = value.counterVal;
  const { counterVal } = useSelector(store => store.counter);

  return (
    <div>
      <p className="lead mb-4">Counter Value is {counterVal} </p>
    </div>
  )
}
