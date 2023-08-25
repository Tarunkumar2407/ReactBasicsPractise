import logo from './logo.svg';
import './App.css';
import Greet from './Components/functionalComponents/Greet';
import GreetClass from './Components/classComponents/classGreet';

function App() {
  return (
    <div className="App">
      <Greet />
      <GreetClass />
    </div>
  );
}

export default App;
