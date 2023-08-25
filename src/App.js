import './App.css';
import Greet from './Components/functionalComponents/Greet';
import GreetClass from './Components/classComponents/classGreet';
import StateFunctional from './Components/functionalComponents/StateByFunctional';
import StateInClass from './Components/classComponents/StateInClass';
function App() {
  return (
    <div className="App">
      <Greet />
      <GreetClass />
      <StateFunctional />
      <StateInClass />

    </div>
  );
}

export default App;
