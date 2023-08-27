import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buyIceCream from './actions/IceAction'

const IceCreamContainer = () => {
    const icecream = useSelector(state => state.icecream.NumberOfIceCream)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of IceCream : {icecream}</h1>
      <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer
