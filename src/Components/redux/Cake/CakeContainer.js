import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyCake from './Cakeaction'
const CakeContainer = () => {
    const cakes = useSelector(state=> state.cake.NumberOfCake)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of Cakes : {cakes}</h1>
      <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer
