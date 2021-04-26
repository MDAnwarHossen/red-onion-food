import React from 'react';
import './Jumbotron.css';
import Image from "../../hot-onion-restaurent-resources-master/bannerbackground.png";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid p-0">
            <div>
                <img src={Image} className="img-fluid" alt="" />
            </div>
            

        </div>
    );
};

export default Jumbotron;