import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../redux/actions/cartActions';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {

    const { cart, removeFromCart } = props;

    const sum = cart.reduce((a, c) => {
        return a + parseFloat(c.price * c.quantity);
    }, 0);
    const deliveryCharge = () => {
        if (sum > 100) {
            return "Free Delivery"
        } else {
            let deliveryCost = sum / 10;
            return deliveryCost.toFixed(2);
        }
    }
    const tax = () =>{
        return (sum/10).toFixed(2)
    }
    const orderTotal = () => {
        if (deliveryCharge() === "Free Delivery") {
            return (sum - tax()).toFixed(2);
        }else{
            return (sum - tax() - deliveryCharge()).toFixed(2);
        }  
    }


    return (
        <div className="cart-table">
            <table className="table table-hover table-bordered">
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
                    {cart.map(item => <CartItem cart={item} key={item.id} removeFromCart={removeFromCart} ></CartItem>)}
                    <tr>
                        <th className="text-center align-middle" rowSpan="6" colSpan="4" scope="col">Coupon: <input type="text" /> <button className="btn btn-discount">APPLY</button></th>
                        <th scope="col">CART TOTALS</th>
                        <th scope="col">${(Math.round(sum * 100) / 100).toFixed(2)}</th>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td>$0</td>
                    </tr>
                    <tr>
                        <td>Delivery Charge</td>
                        <td>${deliveryCharge()}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>${tax()}</td>
                    </tr>
                    <tr>
                        <th>Order Total</th>
                        <th>${orderTotal()}</th>
                    </tr>
                    <tr>
                        
                        <th className="text-center checkout" colSpan="2"> <Link to="/deliveryAddress" style={{ textDecoration: 'none' }}> <button className="btn btn-default-contact btn-lg btn-block" id="js-contact-btn">CHECKOUT</button></Link></th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cartReducers.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);