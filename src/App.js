import { useState } from 'react';
import './App.css';
import PropsInClass from './Components/props/PropsInClass';
// import Greet from './Components/functionalComponents/Greet';
// import GreetClass from './Components/classComponents/classGreet';
// import StateFunctional from './Components/functionalComponents/StateByFunctional';
// import StateInClass from './Components/classComponents/StateInClass';
// import Student from './Components/props/Student';
function App() {
  
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <GreetClass /> */}
      {/* <StateFunctional /> */}
      {/* <StateInClass /> */}
      {/* <Student name = "Tarun" email="tarun@gmail.com" others={{address:"Noida", jobrole: "Full Stack Developer"}} /> */}
      <PropsInClass name = {"Tarun"}/>

    </div>
  );
}

export default App;
