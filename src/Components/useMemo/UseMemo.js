import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count , setCount] = useState(0)
    const [items, setItems] = useState(50)
    const multiMemo = useMemo(function multiCount () {
        console.log("multicount")
        return count * 2;
    },[count])
    
  return (
    <div>
      <h1>Use Memo</h1>
      <h2>{multiMemo}</h2>
      <h2>count : {count}</h2>
      <h2>item : {items}</h2>
      <button onClick={()=> setCount(count + 1)}>Update count</button>
      <button onClick={()=> setItems(items + 5)}>Update items</button>
    </div>
  )
}

export default UseMemo
