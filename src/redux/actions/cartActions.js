export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const addToCart = (id, img, title, shortDescription, price) =>{
    return {type: ADD_TO_CART, 
        payload: {id: id, img:img, title: title, shortDescription: shortDescription, price: price}}
};

export const removeFromCart = (id) =>{
    return {type: REMOVE_FROM_CART, id: id}
};





export const numberIncrement = (id) =>{
    return {type: INCREMENT, id: id}
}
export const numberDecrement = (id) =>{
    return {type: DECREMENT, id: id}
}