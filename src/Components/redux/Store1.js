import rootReducer from "./IceCream/RootReducer"
import { createStore } from "redux"

const store = createStore(rootReducer)

export default store