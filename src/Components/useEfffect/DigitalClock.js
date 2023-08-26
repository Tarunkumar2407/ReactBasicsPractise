import React, { useState,useEffect } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=> {
       let interval = setTimeout(() => {
        setTime(new Date().toLocaleTimeString())
       },1000)
       return () => {
        clearTimeout(interval)
       }
    })
  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{time}</h2>
    </div>
  )
}

export default DigitalClock
