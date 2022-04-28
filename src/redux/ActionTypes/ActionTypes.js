import { ACCESS_LOGIN, ADD_USER, GET_USER } from "../actions";

export const addUser = payload => ({
    type: ADD_USER,
    payload: payload
})

export const acessLogin = payload => ({
    type: ACCESS_LOGIN,
    payload: payload
})

export const getUser = payload => ({
    type: GET_USER,
    payload: payload
})

