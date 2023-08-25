import './App.css';
// import Greet from './Components/functionalComponents/Greet';
// import GreetClass from './Components/classComponents/classGreet';
// import StateFunctional from './Components/functionalComponents/StateByFunctional';
// import StateInClass from './Components/classComponents/StateInClass';
import Student from './Components/props/Student';
function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <GreetClass /> */}
      {/* <StateFunctional /> */}
      {/* <StateInClass /> */}
      <Student name = "Tarun" email="tarun@gmail.com" others={{address:"Noida", jobrole: "Full Stack Developer"}} />

    </div>
  );
}

export default App;
