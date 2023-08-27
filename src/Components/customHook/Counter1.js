import React from 'react'
import UseCustom from './UseCustom'

const Counter1 = () => {
    const [count, Increment, Decrement] = UseCustom(10)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Counter1
