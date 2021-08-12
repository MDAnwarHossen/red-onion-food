import React, { useEffect, useState } from 'react';
import './NavigationBar.css';
import Logo from "../../hot-onion-restaurent-resources-master/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const NavigationBar = (props) => {
    const [scrolled,setScrolled]=useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }

      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
    let navbarClasses=['navbar navbar-expand-md navbar-dark'];
      if(scrolled){
        navbarClasses.push('fixed-navbar');
      }
    
      

    return (
        <div>
            <nav className={navbarClasses.join(" ")}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/">  <img className="logo" src={Logo} alt="" /></Link>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/reservation">RESERVATION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">LOGIN</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-danger">SIGN UP</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link shopping-cart" href="/"><FontAwesomeIcon icon={faShoppingCart} /> <span id="lblCartCount" className="badge badge-warning">{props.cart.length}</span>
                            
                            </a>
                        </li>


                    </ul>

                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        
    }
}


export default connect(mapStateToProps)(NavigationBar);