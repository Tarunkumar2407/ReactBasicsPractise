import React, { useState } from 'react'

const WithObject = () => {
    const [name, setName] = useState({
        firstName : "",
        lastName : ""
    })

    const handleInput = () => {
        // setName({...name, firstName: "Tarun",lastName: "Kumar"} )
        // // setName({...name, lastName: "Kumar"})
    }
    console.log(name)
  return (
    <div>
      <h1>useState with Objects</h1>
      <h2>My name is {name.firstName} {name.lastName}</h2>
      <input type='text' onChange={(e)=>setName({...name, firstName: e.target.value})} value={name.firstName}></input>
      <input type='text' onChange={(e)=>setName({...name, lastName: e.target.value})} value={name.lastName}></input>
      <button onClick={handleInput}>Update Name</button>
    </div>
  )
}

export default WithObject
