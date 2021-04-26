import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {
    const {id, removeFromCart} = props;
    return (
        <tr>
            <th scope="row"><FontAwesomeIcon onClick = {() => removeFromCart(id)} icon={faTrashAlt} /></th>
            <td>{id}</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    );
};

export default CartItem;