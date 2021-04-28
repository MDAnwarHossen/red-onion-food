import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faPlus, faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ModalArea.css';
import { addToCart, numberDecrement, numberIncrement } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ModalArea = (props) => {
    
    const {addToCart, cart, count, food, numberIncrement, numberDecrement, onHide, show} = props;
    const { id, img, title, shortDescription, longDescription, price, Category } = food;

    return (
        <div>

            <Modal
                isOpen={show}

                onRequestClose={onHide}
                // style={customStyles}
                contentLabel="Example Modal"

            >

                <div className="container">

                    <p onClick={onHide} className="close-modal ml-auto"><FontAwesomeIcon icon={faWindowClose} /></p>
                    <div className='row'>

                        <div className="col-md-6">
                            <h1>{title}</h1>
                            <p>{longDescription}</p>
                            <div className="d-flex mr-auto">
                                <h2 className="m-0 pt-1"><span>$</span>{price}</h2>
                                <div className="m-2 p-2 rounded-border">
                                    <span onClick = {() => numberDecrement(id)} className="text-body m-2 p-2"><FontAwesomeIcon icon={faMinus} /></span>{count}<span onClick = {() => numberIncrement(id)} className="text-danger m-2 p-2"><FontAwesomeIcon  icon={faPlus} /></span>
                                </div>
                            </div>
                            <p onClick={() => { addToCart(id, img, title, shortDescription, price ); onHide() }} className="d-flex justify-content-around cart-in-modal bg-danger text-white"><span><FontAwesomeIcon icon={faShoppingCart} /></span>Add</p>

                        </div>
                        <div className="col-md-6">
                            <img src={img} className="img-fluid" alt="" />
                        </div>

                    </div>

                </div>


            </Modal>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cartReducers.cart,
        count: state.countReducers
    }
}

const mapDispatchToProps = {
    addToCart: addToCart,
    numberIncrement: numberIncrement,
    numberDecrement: numberDecrement
    
}



export default connect(mapStateToProps, mapDispatchToProps)(ModalArea);