import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { calendarReducer } from "./calendarReducer";
import tokenReducer from "./tokenReducer";
import { uiReducer } from "./uiReducer";



export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth : authReducer,
    token : tokenReducer
})