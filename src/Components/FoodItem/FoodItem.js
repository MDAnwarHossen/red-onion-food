import React, { useEffect, useState } from 'react';
import ModalArea from '../ModalArea/ModalArea';
import "./FoodItem.css";
import Aos from "aos";
import "aos/dist/aos.css";
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Note: Never import/require the *.min.js files from the npm package.


const FoodItem = (props) => {

    const { id, img, title, shortDescription, longDescription, price, Category, dataAos } = props.food;

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);

    return (
        <>
            <div onClick={() => setModalShow(true)} data-aos={dataAos} className='food-item col-md-4 col-6 mb-3 mt-4 '>
                <div className="card">
                    <img data-sizes="auto" src="https://i.ibb.co/Y7pNtbj/Untitled-1.png" data-src={img} className="card-img-top p-3 image lazyload" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text text-muted">{shortDescription}</p>
                    </div>
                    <div className="card-footer">
                        <h4><span>$</span>{price}</h4>
                    </div>
                </div>
            </div>
            <ModalArea food={props.food} show={modalShow} onHide={() => setModalShow(false)} ></ModalArea>
        </>
    );
};

export default FoodItem;