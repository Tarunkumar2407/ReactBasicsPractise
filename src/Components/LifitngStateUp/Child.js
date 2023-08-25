import React from 'react'

const Child = ({alert}) => {
    console.log(alert)
    const data = "Tarun Kumar"
  return (
    <div>
      <h1>Child component</h1>
      <button onClick={()=>alert(data)}>Click me</button>
    </div>
  )
}

export default Child
