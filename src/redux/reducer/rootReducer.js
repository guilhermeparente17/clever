import { ACCESS_LOGIN, ADD_USER, GET_USER } from "../actions";


const initialState = {
    users: [],
    accessLogin: false,
    user: {}
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_USER:
            return {...state, users: [...state.users, payload]};
        case ACCESS_LOGIN:
            return {...state, accessLogin: payload};
        case GET_USER:
            return {...state, user: payload};
        default:
            return state;
    }
}



export default rootReducer;