import React, { useState } from 'react'
import UseCustom from './UseCustom'

const Counter2 = () => {
   const [count, Increment, Decrement] = UseCustom()
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
    </div>
  )
}

export default Counter2
