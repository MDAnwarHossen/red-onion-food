import React, { useEffect, useState } from 'react';
import './NavigationBar.css';
import Logo from "../../hot-onion-restaurent-resources-master/logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const NavigationBar = (props) => {
    const {user} = props;
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar main-menu navbar-expand-md navbar-dark'];
    if (scrolled) {
        navbarClasses.push('fixed-navbar');
    }



    return (
        <div>
            <nav className={navbarClasses.join(" ")}>
                <NavLink to="/" aria-label ="Logo"> <img className="logo" src={Logo} alt="" /></NavLink>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink data-toggle="collapse" data-target="#navbarTogglerDemo01" className="nav-link" exact to="/" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>HOME</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink data-toggle="collapse" data-target="#navbarTogglerDemo01" className="nav-link" exact to="/about" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink data-toggle="collapse" data-target="#navbarTogglerDemo01" className="nav-link" exact to="/reservation" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>RESERVATION</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink data-toggle="collapse" data-target="#navbarTogglerDemo01" className="nav-link" exact to="/contact" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>CONTACT</NavLink>
                        </li>

                        <li className="nav-item">
                            {user && user.email ? <div className="dropdown">
                                <button type="button" className="btn btn-danger" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="dropdownMenuButtonIcon"><FontAwesomeIcon icon={faUser} /></span>{user && user.displayName}</button>
                                <div class="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/">Manage My Account</a>
                                    <a class="dropdown-item" href="/">My Orders</a>
                                    <a class="dropdown-item" href="/">Logout</a>
                                </div>
                            </div> : <NavLink data-toggle="collapse" data-target="#navbarTogglerDemo01" className="nav-link" exact to="/login" activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>
                                <button type="button" className="btn btn-danger">LOGIN</button>
                            </NavLink>}

                        </li>
                        <li className="nav-item">
                            <NavLink data-toggle="collapse" data-target="#navbarTogglerDemo01" className="nav-link shopping-cart" exact to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> <span id="lblCartCount" className="badge badge-warning">{props.cart.length}</span>

                            </NavLink>
                        </li>


                    </ul>

                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cartReducers.cart,
        user: state.loginReducers.user,

    }
}


export default connect(mapStateToProps)(NavigationBar);