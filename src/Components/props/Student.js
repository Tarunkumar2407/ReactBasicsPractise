import React from 'react'

const Student = ({name, email, others}) => {
    // console.log(props)
  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.others.address}</h2>
      <h2>{props.others.jobrole}</h2> */}
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{others.address}</h1>
      <h1>{others.jobrole}</h1>

    </div>
  )
}

export default Student
