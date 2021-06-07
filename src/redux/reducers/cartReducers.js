import fakeData from "../../fakeData/fakeData";
import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "../actions/cartActions";



const initialState = {
  products: fakeData,
  cart: []
};


const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      // let addedItem = state.products.find(item => item.id === action.payload.id)
      // return {
      //   ...state,
      //   products: [
      //     ...state.products,
      //     { quantity: addedItem.quantity += 1 }
      //   ]
      // }


      let addedItem = state.products.find(item => item.id === action.payload.id)
      addedItem.quantity += 1
      return {
        ...state,
        products: [
          ...state.products,
          
        ]
      }
     

    /* falls through */
    case DECREMENT:
      let substructedItem = state.products.find(item => item.id === action.payload.id)
      let currentQuantity = substructedItem.quantity
      if (currentQuantity > 1) {
        substructedItem.quantity -= 1
      }

        return {
          ...state,
          products: [
            ...state.products,

          ]
        }

      
    /* falls through */

    case ADD_TO_CART:
      let tergetItem = state.products.find(item => item.id === action.payload.id);

      let existed_item = state.cart.find(item => action.payload.id === item.id);

      if (existed_item) {
        return {
          ...state,
          cart: [...state.cart]
        }
      }
      else {
        return {
          ...state,
          cart: [...state.cart, tergetItem],
        }
      }

    case REMOVE_FROM_CART:

      const remainingCart = state.cart.filter(item => item.id !== action.payload.id);
      return {
        cart: remainingCart
      };

    /* falls through */

    default:
      return state
  }

};

export default cartReducers;