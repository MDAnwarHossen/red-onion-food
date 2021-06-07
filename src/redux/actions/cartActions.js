export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: { id: id }
    }
};

export const removeFromCart = (id) => {
    return { 
        type: REMOVE_FROM_CART, 
        payload: { id: id }
    }
};

export const increment = (id) => {
    return {
        type: INCREMENT,
        payload: { id: id}
    }
};

export const decrement = (id) => {
    return {
        type: DECREMENT,
        payload: { id: id}
    }
};