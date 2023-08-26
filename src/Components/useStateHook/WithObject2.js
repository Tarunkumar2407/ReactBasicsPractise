import React, { useState } from 'react'

const WithObject2 = () => {

    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })
    console.log(name)
    const handleInput = (e) => {
      e.preventDefault()
      const {name, value} = e.target
      setName((preVal)=>{
        return {
            ...preVal,
            [name]: value
        }
      }
        
      )
    }
  return (
    <div>
     <form onSubmit={handleInput}>
     <input type='text' onChange={handleInput} name='firstName' value={name.firstName}></input>
     <input type='text' onChange={handleInput} name='lastName' value={name.lastName}></input>
     <button type='submit'>Submit</button>
     </form>
      
    </div>
  )
}

export default WithObject2
