import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';

const CartItem = (props) => {
    const {cart, removeFromCart} = props;
    const subTotal = cart.price*cart.quantity;
    
    
   
    
    
    return (
        <tr>
            <th class="text-center" scope="row"><FontAwesomeIcon onClick = {() => removeFromCart(cart.id)} icon={faTrashAlt} /></th>
            <td class="text-center"><img className="cart-img" src={cart.img} alt=""/> </td>
            <td>{cart.title}</td>
            <td>${cart.price}</td>
            <td>{cart.quantity}</td>
            <td>${subTotal.toFixed(2)}</td>
        </tr>
    );
};

export default CartItem;