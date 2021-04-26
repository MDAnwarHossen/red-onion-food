import React, { useEffect, useState } from 'react';
import './FoodMenu.css';
import fakeData from '../../fakeData/fakeData'
import FoodItem from '../FoodItem/FoodItem';
import { Link } from 'react-router-dom';



const FoodMenu = () => {

    const [category, setCategory] = useState('breakfast');
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const matchedProducts = fakeData.filter(pd => pd.Category.toLowerCase() === category);
        setProducts(matchedProducts);
    }, [category])
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <button onClick={() =>setCategory('breakfast')} type="button" className="btn btn-primary m-3">Breakfast</button>
                <button onClick={() =>setCategory('lunch')} type="button" className="btn btn-secondary m-3">Lunch</button>
                <button onClick={() =>setCategory('dinner')} type="button" className="btn btn-success m-3">Dinner</button>
            </div>
            <div className='row' style={{overflow: "hidden"}}>
                {/* <div className='col-md-4 col-6'>Anwar</div> */}
                {
                    products.map(food => <FoodItem key= {food.id} food={food}></FoodItem>)
                }

            </div>
            <div className="d-flex justify-content-center">
                
               
               <Link to="/cart"><button type="button" className="btn btn-secondary m-3">Checkout Your Food</button></Link>
                
            </div>

        </div>
    );
};

export default FoodMenu;