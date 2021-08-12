import React from 'react';
import './Jumbotron.css';
import imageLogo from "../../hot-onion-restaurent-resources-master/logo3.png";
import arrowDown from "../../hot-onion-restaurent-resources-master/ICON/arrow-down.png"

const Jumbotron = () => {
    return (
        
        <section class="home">
            <div class="tittle-block">
                <div class="coverLogo" style={{opacity: 1}}>
                    <a href="./index.html">
                        <img src={imageLogo} alt="logo" class="img-fluid"/>
                    </a>
                </div>
                    <h1 class="" style={{opacity: 1}}>DELICIOUS Food</h1>
                    <h2 class="" style={{opacity: 1}}>Red Onion is a delitious restaurant website template</h2>
            </div>
            <div class="scroll-down hidden-xs" style={{opacity: 1}}>
                    <a href="#about">
                        <img src={arrowDown} alt="down-arrow"/>
                    </a>
            </div>
        </section>
    );
};

export default Jumbotron;