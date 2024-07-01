import React from 'react'

export default function InputItem({ handleKeyBtn }) {


  return (
    <div>
      <input type='text' onKeyDown={(e) => handleKeyBtn(e)} />

    </div>
  )
}
