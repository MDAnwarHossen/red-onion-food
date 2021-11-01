import { combineReducers, createStore } from "redux";
import cartReducers from "../reducers/cartReducers";
import loginReducers from "../reducers/loginReducers";

const allReducers = combineReducers({
    cartReducers: cartReducers,
    loginReducers: loginReducers

})



export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());