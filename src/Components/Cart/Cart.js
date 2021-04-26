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
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(id => <CartItem id = {id} removeFromCart = {removeFromCart}></CartItem>)}
                
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