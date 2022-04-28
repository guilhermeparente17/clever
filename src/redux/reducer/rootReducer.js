import { ADD_USER } from "../actions";


const initialState = {
    users: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_USER:
            return {...state, users: [...state.users, payload]};
        default:
            return state;
    }
}



export default rootReducer;