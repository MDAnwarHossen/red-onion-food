import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import countReducers from "./countReducers";

const allReducers = combineReducers({
    cartReducers: cartReducers,
    countReducers: countReducers
})

export default allReducers;