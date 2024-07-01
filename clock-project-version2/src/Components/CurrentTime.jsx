import React, { useEffect, useState } from 'react'

export default function CurrentTime() {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    const intervl = setInterval(() => {
      let time = new Date();
      setState(time)
    }, 1000)
    return () => {
      clearInterval(intervl)
      console.log("clear interval");
    }
  }, [])


  return (
    <div>
      <h4>current time {state.toLocaleDateString()}- {state.toLocaleTimeString()}</h4>
    </div>
  )
}
