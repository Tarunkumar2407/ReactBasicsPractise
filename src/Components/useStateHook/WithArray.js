import React, { useState } from 'react'

const WithArray = () => {

  const [items, setItems] = useState([])
  const handleArrayInput = () => {
     setItems([...items, {
      id: items.length,
      value: "Tarun"
     }])
  }
  console.log(items)
  return (
    <div>
      {items.map((item, id)=> (
        <h2 key={id}>{item.id} {item.value}</h2>
      ))}
      <button onClick={handleArrayInput}>Add Item</button>
    </div>
  )
}

export default WithArray
