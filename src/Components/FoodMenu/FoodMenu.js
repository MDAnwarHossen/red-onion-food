import React, { useEffect, useState } from 'react';
import './FoodMenu.css';
import FoodItem from '../FoodItem/FoodItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import WOW from 'wowjs';


const FoodMenu = (props) => {
    useEffect(() => {

        const wow = new WOW.WOW();

        wow.init();
    }, []);


    const { products } = props;
    const [category, setCategory] = useState('breakfast');
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const matchedProducts = products.filter(pd => pd.Category.toLowerCase() === category);
        setProduct(matchedProducts)
    }, [products, category])
    return (
        <section>
            <div className="container wow fadeInUp">
                <div className="col-lg-12">
                    <div className="page-header wow fadeInDown">
                        <h1>our menu</h1>
                        <h5>Little things make us best in town</h5>
                    </div>
                </div>

                <div className="d-flex justify-content-center">

                    <button onClick={() => setCategory('breakfast')} type="button" className="btn m-3">ALL</button>
                    <button onClick={() => setCategory('breakfast')} type="button" className="btn m-3">STARTERS</button>
                    <button onClick={() => setCategory('breakfast')} type="button" className="btn m-3">BREAKFAST</button>
                    <button onClick={() => setCategory('lunch')} type="button" className="btn  m-3">LUNCH</button>
                    <button onClick={() => setCategory('dinner')} type="button" className="btn  m-3">DINNER</button>
                    <button onClick={() => setCategory('breakfast')} type="button" className="btn m-3">DESSERTS</button>
                </div>
                <div className='row' style={{ overflow: "hidden" }}>


                    {
                        product.map(food => <FoodItem food={food}></FoodItem>)
                    }

                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/cart"><button type="button" className="btn btn-secondary m-3">Checkout Your Food</button></Link>
                </div>

            </div>
        </section>



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

