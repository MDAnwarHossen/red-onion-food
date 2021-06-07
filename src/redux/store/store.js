import { createStore } from "redux";
import cartReducers from "../reducers/cartReducers";









export const store = createStore(cartReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());