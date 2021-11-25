import { types } from "../types/types";

const initialState = {
    user: [],
    isLogged: false,
    isAdmin: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.login:
            return {
                ...state,
                isLogged: true
            }
        case types.getUser:
            return {
                ...state,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin
            }
        default:
            return state
    }
}

export default authReducer