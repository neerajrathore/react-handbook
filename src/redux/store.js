import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import thunk from 'redux-thunk';

const middle = [thunk]
const store = createStore(rootReducer, applyMiddleware(...middle));

export default store;
