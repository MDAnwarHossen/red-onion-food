import React, { useEffect, useState } from 'react';
import './FoodMenu.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import WOW from 'wowjs';
import PaginatedItems from '../PaginatedItems/PaginatedItems';
import ReactPaginate from 'react-paginate';

const FoodMenu = (props) => {
    const itemsPerPage = 6;

    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const { products } = props;
    const [category, setCategory] = useState('Breakfast');
    const [product, setProduct] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const matchedProducts = products.filter(pd => pd.Category.includes(category));
        if (matchedProducts.length === 0) {
            setProduct(products)
        } else {
            setProduct(matchedProducts)
        }
    }, [products, category])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % product.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    const items = ['all', 'Starters', 'Breakfast', 'Lunch', 'Dinner', 'Desserts']
    const [state, setState] = useState({
        activeItem: 2,
    });

    const handleItemClick = (index) => {
        setState({
            activeItem: index,
        })
    }
    return (
        <section>
            <div className="container wow fadeInUp">
                <div className="col-lg-12">
                    <div className="page-header wow fadeInDown">
                        <h1 className="page-header-h1">our menu</h1>
                        <h5>Little things make us best in town</h5>
                    </div>
                </div>
                <div className="row menu-item p-2">
                    {
                    items.map((item, index) => <button key={index}
                         className={`btn col-md-2 col-4 ${state.activeItem === index ? 'active' : ''}`}
                         onClick={() => { handleItemClick(index); setCategory(item); setItemOffset(0) }}>{item}</button>)
                    }
                </div>
                <div className='row' style={{ overflow: "hidden" }}>
                    <PaginatedItems itemsPerPage={itemsPerPage} items={product} pageCount={pageCount} setPageCount={setPageCount} itemOffset={itemOffset} setItemOffset={setItemOffset}></PaginatedItems>
                </div>
                <div>
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel={"< previous"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakLabel={"..."}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        containerClassName={'pagination d-flex justify-content-center'}
                        activeClassName={"active"}
                        renderOnZeroPageCount={null}
                    />
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
        products: state.cartReducers.products,
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);

