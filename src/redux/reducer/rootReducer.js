import { ACCESS_LOGIN, ADD_USER, GET_USER } from "../actions";
import {defineState} from 'redux-localstore'


const initialState = {
    users: [],
    accessLogin: false,
    user: {}
}

defineState(initialState)('rootReducer')

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