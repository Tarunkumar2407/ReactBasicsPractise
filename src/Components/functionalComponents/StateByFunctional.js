import React, { useState } from 'react'

const State = () => {
    const [data, setData] = useState(0)
    const handleData = () => {
        setData(data+1)
    }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={handleData}>Click Me</button>
    </div>
  )
}

export default State
