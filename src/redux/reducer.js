import { combineReducers } from "redux";
import { CounterReducer } from "./counter/counterReducer";

export const rootReducer = combineReducers({
    counter: CounterReducer
})