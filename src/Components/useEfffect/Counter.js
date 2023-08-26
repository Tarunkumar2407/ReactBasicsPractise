import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
      let interval = setTimeout(()=> {
            setCount((count) => count + 1)
        },1000)
        return () => {
            clearTimeout(interval)
        }
    })
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
