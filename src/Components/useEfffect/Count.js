import React, { useEffect, useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0)
    const [data, setData] = useState("")

    useEffect(()=> {
        console.log("useEffect Hook")
    },[data])
  return (
    <div>
      <h2>{count}</h2>
      <h3>{data}</h3>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Increase</button>
      <button onClick={()=> setCount(count + 5)}>Increase By 5</button>
      <button onClick={()=> setData("Tarun")}>Data</button>
    </div>
  )
}

export default Count
