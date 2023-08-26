import React, { useRef } from 'react'

const UseRefHook = () => {
    const inputRef = useRef(null)
    const handleInput = () => {
        console.log(inputRef)
        inputRef.current.value = "Tarun"
        inputRef.current.style.color = "blue"
        inputRef.current.focus()
    }
  return (
    <div>
      <input type='text' ref={inputRef}></input>
      <button onClick={handleInput}>Click me</button>
    </div>
  )
}

export default UseRefHook
