import React from 'react'

export default function CurrentTime() {
  let time = new Date();
  return (
    <div>
      <h4>current time {time.toLocaleDateString()}- {time.toLocaleTimeString()}</h4>
    </div>
  )
}
