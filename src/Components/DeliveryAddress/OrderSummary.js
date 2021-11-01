import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const { item, index } = props;
    return (
        
            <tr>
                <td>{`${index + 1}. ${item.title} X ${item.quantity}`}</td>
                
                <td>${item.price * item.quantity}</td>
            </tr>
            
        
    );
};

export default OrderSummary;