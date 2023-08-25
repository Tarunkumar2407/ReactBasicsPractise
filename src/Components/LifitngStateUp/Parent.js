import React from 'react'
import Child from './Child'

const Parent = () => {
    const getData = (data) => {
        alert(data)
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <Child alert={getData}/>
    </div>
  )
}

export default Parent
