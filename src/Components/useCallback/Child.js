import React, {memo} from 'react'

const Child = ({func}) => {
    console.log("child")
  return (
    <div>
      <h2>Child</h2>
    </div>
  )
}

export default memo(Child)
