import { BUY_CAKE } from "./CakeActionType";

const initialState = {
    NumberOfCake : 20
}

const CakeReducer = (state= initialState , action) => {
    switch(action.type){
        case BUY_CAKE: 
            return {
                ...state,
                NumberOfCake : state.NumberOfCake - 1
            } 
        default:
            return state
    }
}

export default CakeReducer