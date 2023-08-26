import React, { useContext } from "react";
import { data } from "./Parent";
import { data2 } from "./Parent";

const ChildC = () => {
  const name = useContext(data)
  const email = useContext(data2)
  return (
    <div>
      <h1>My name is {name} and email is {email}</h1>
    </div>
  );
};

export default ChildC;
