import React, {useCallback, useState} from 'react'
import Child from './Child'

const UseCallback = () => {
    const [count , setCount] = useState(0)
    const [add, setAdd] = useState(50)

    const callBack = useCallback(()=> {
           
    },[count])
  return (
    <div>
      <Child func={callBack}/>
      <h2>Count: {count}</h2>
      <h2>Add: {add}</h2>
      <button onClick={()=>setCount(count + 2)}>Count</button>
      <button onClick={()=>setAdd(add + 5)}>Add</button>
    </div>
  )
}

export default UseCallback
