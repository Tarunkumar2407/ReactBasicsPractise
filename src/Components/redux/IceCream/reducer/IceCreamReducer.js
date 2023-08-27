
import { BUY_ICECREAM } from "../actions/ActionType";

const initialState = {
    NumberOfIceCream : 20
}

const CakeReducer = (state= initialState , action) => {
    switch(action.type){
        case BUY_ICECREAM: 
            return {
                ...state,
                NumberOfCake : state.NumberOfIceCream - 1
            } 
        default:
            return state
    }
}

export default CakeReducer