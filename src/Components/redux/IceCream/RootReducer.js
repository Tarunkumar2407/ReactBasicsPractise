import { combineReducers } from "redux";
import CakeContainer from "../Cake/CakeContainer";
import IceCreamReducer from "./reducer/IceCreamReducer";

const rootReducer = combineReducers({
    cake: CakeContainer,
    iceCream: IceCreamReducer
})

export default rootReducer