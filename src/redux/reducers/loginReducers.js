import { ADD_USER } from "../actions/loginActions";


const initialState = {};

const loginReducers = (state = initialState, action) =>{
    
    switch(action.type){
        
        case ADD_USER:
            const user = action.payload.id;
            return{...state,
                user}
            /* falls through */
            default:
                return state;
    }
}
export default loginReducers;