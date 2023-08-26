import React from "react";
import { data } from "./Parent";
import { data2 } from "./Parent";

const ChildC = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <data2.Consumer>
              {(email) => {
                return <h1>My name is {name} and email is {email}</h1>;
              }}
            </data2.Consumer>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default ChildC;
