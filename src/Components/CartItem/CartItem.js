import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './CartItem.css';

const CartItem = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <tr>
            
            <th scope="row"><FontAwesomeIcon onClick = {() => removeFromCart(cart.id)} icon={faTrashAlt} /></th>
            <td><img className="cart-img" src={cart.img} alt=""/> </td>
            <td>{cart.title}</td>
            <td>{cart.price}</td>
            <td>{cart.quantity}</td>
            <td><button>click Me</button></td>
        </tr>
    );
};

export default CartItem;