import { SUBTR_COUNTER, SUM_COUNTER } from "./actionTypes";

const initialState = 0;

const reducerCounter = (state = initialState, action) => {
    switch(action.type){
        case SUM_COUNTER:
            state = state + 1;
            return state;
        
        case SUBTR_COUNTER:
            state = state - 1;
            return state;

        default:
            return state;
    }
};

export default reducerCounter;