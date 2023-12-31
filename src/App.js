// import { useState } from 'react';
import "./App.css";
// import UseCallback from './Components/useCallback/UseCallback';
// import UseMemo from './Components/useMemo/UseMemo';
// import ChildA from './Components/PropDrilling.js/ChildA';
// import ChildB from './Components/PropDrilling.js/ChildB';
// import ChildC from './Components/ContextAPI/ChildC';
// import Parent from './Components/ContextAPI/Parent';
// import Parent from './Components/ContextAPI/PropDrilling.js/Parent';
// import Parent from './Components/useContext/Parent';
// import UseRefHook from './Components/useRef/UseRef';
// import FetchData from './Components/useEfffect/FetchData1';
// import Count from './Components/useEfffect/Count';
// import Counter from './Components/useEfffect/Counter';
// import DigitalClock from './Components/useEfffect/DigitalClock';
// import WithArray from './Components/useStateHook/WithArray';
// import GetInputBoxValue from './Components/FormHandling/GetInputBoxValue';
// import ShowHide from './Components/FormHandling/ShowHide';
// import Parent from './Components/LifitngStateUp/Parent';
// import WithObject2 from './Components/useStateHook/WithObject2';
// import WithObject from './Components/useStateHook/WithArray';
// import PropsInClass from './Components/props/PropsInClass';
// import Greet from './Components/functionalComponents/Greet';
// import GreetClass from './Components/classComponents/classGreet';
// import StateFunctional from './Components/functionalComponents/StateByFunctional';
// import StateInClass from './Components/classComponents/StateInClass';
// import Student from './Components/props/Student';
// import Counter from './Components/customHook/Counter2';
// import Counter1 from './Components/customHook/Counter1';
// import CounterReducer from './Components/useReducer/CounterReducer';
// import Counter2Reducer from "./Components/useReducer/Counter2Reducer";
import { Provider } from "react-redux";
import store from "./Components/redux/Store1"
import CakeContainer from "./Components/redux/Cake/CakeContainer";
import IceCreamContainer from "./Components/redux/IceCream/IceCreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Greet /> */}
        {/* <GreetClass /> */}
        {/* <StateFunctional /> */}
        {/* <StateInClass /> */}
        {/* <Student name = "Tarun" email="tarun@gmail.com" others={{address:"Noida", jobrole: "Full Stack Developer"}} /> */}
        {/* <PropsInClass name = {"Tarun"}/> */}
        {/* <GetInputBoxValue /> */}
        {/* <ShowHide /> */}
        {/* <Parent /> */}
        {/* <WithObject2 /> */}
        {/* <WithArray /> */}
        {/* <Count /> */}
        {/* <Counter /> */}
        {/* <DigitalClock /> */}
        {/* <FetchData /> */}
        {/* <ChildC /> */}
        {/* <ChildB /> */}
        {/* <ChildA /> */}
        {/* <Parent /> */}
        {/* <UseRefHook /> */}
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        {/* <Counter /> */}
        {/* <Counter1 /> */}
        {/* <CounterReducer /> */}
        {/* <Counter2Reducer /> */}
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
