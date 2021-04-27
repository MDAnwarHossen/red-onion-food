export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (id, img, title, shortDescription, price) =>{
    return {type: ADD_TO_CART, 
        payload: {id: id, img:img, title: title, shortDescription: shortDescription, price: price}}
};

export const removeFromCart = (id) =>{
    return {type: REMOVE_FROM_CART, id: id}
};