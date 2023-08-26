import React, { useEffect, useState } from 'react'
import axios from "axios"

const FetchData = () => {
    const [users, setUsers] = useState([])

    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((data) => setUsers(data))
    // },[])
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Error in fetching data"))
    })
    
  return (
    <div>
      {
        users.map((user)=> (
          <li>{user.name}</li>
        ))
      }
    </div>
  )
}

export default FetchData
