import React, { useEffect, useState } from 'react';
import './FoodMenu.css';
import FoodItem from '../FoodItem/FoodItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const FoodMenu = (props) => {
    
    const {products} = props;
    const [category, setCategory] = useState('breakfast');
    const [product, setProduct] = useState([]);
    
    
    useEffect(() => {
        const matchedProducts = products.filter(pd => pd.Category.toLowerCase() === category);
        setProduct(matchedProducts)
    }, [products, category])
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <button onClick={() =>setCategory('breakfast')} type="button" className="btn btn-primary m-3">Breakfast</button>
                <button onClick={() =>setCategory('lunch')} type="button" className="btn btn-secondary m-3">Lunch</button>
                <button onClick={() =>setCategory('dinner')} type="button" className="btn btn-success m-3">Dinner</button>
            </div>
            <div className='row' style={{overflow: "hidden"}}>
                
                {
                    product.map(food => <FoodItem food={food}></FoodItem>)
                }

            </div>
            <div className="d-flex justify-content-center">
                
               
               <Link to="/cart"><button type="button" className="btn btn-secondary m-3">Checkout Your Food</button></Link>
                
            </div>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
        


    }
}

const mapDispatchToProps = {
    


}



export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);

