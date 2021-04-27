import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    
    
    const {cart, removeFromCart} = props;
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">ITEM</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">SUB-TOTAL</th>
                    
                </tr>
            </thead>
            <tbody>
                {cart.map(item => <CartItem cart = {item} removeFromCart = {removeFromCart}></CartItem>)}
                
            </tbody>
        </table>
    );
};

const mapStateToProps = state => {
    
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

 export default connect(mapStateToProps, mapDispatchToProps)(Cart);