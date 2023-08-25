import React, { useState } from 'react'

const GetInputBoxValue = () => {
    const [input, setInput]  = useState("")
    const [show, setShow] = useState("")

    const handleInputValue = (e) => {
        setInput(e.target.value)
        setShow(false)
        console.log(e.target.value)
    } 
  return (
    <div>
      {/* <h1>{input}</h1> */}
      {/* <input onChange={ handleInputValue } type='text'></input> */}
      {show?<h1>{input}</h1>:null}
      <input onChange={handleInputValue} type='text'></input>
      <button onClick={()=> setShow(!show) }>Show Data</button>
    </div>
  )
}

export default GetInputBoxValue
