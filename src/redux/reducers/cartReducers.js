import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";


const initialState = {
    
        cart: []
      
};

const cartReducers = (state = initialState, action) => {
    

    switch (action.type) {
        case ADD_TO_CART:
            const oldCart = state.cart;
            const actionId = action.payload && action.payload.id;
            const index = oldCart.findIndex((obj => parseInt(obj.id) === parseInt(actionId)));

            if (index !== -1) {
                const item1 = [...state.cart]
                item1[index].price = "99.99"
                return {
                    cart: [...state.cart]
                }
            } else {
                return {
                    cart: [...state.cart, action.payload]
                };
            }

        case REMOVE_FROM_CART:

            const newCart = state.cart.filter(item => item !== action.id)

            return { ...state, cart: newCart };

        
             

        default:
            return state;
    }
}
export default cartReducers;