import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from "react-hook-form";
import './DeliveryAddress.css';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import OrderSummary from './OrderSummary';

const DeliveryAddress = (props) => {
    const { cart } = props;
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, reset: reset2, formState: { errors: errors2 } } = useForm();
    const defaultValues = {
        Full_Name: "Full Name *",
        Email: "Email Address (optional)",
        Phone: "Phone *",
        Address_Line_1: "Address_Line_1 *",
        Address_Line_2: "Address_Line_2 (optional)",
        City: "City *",
        postCode: "Post Code *",
        Address_Directions: "Address_Directions",
    }
    const delivery = (data) => {
        console.log(data);
        reset2(defaultValues);
        reset(defaultValues);
    }
    const sum = cart.reduce((a, c) => {
        return a + parseFloat(c.price * c.quantity);
    }, 0);
    const deliveryCharge = () => {
        if (sum > 100) {
            return "Free Delivery"
        } else {
            let deliveryCost = sum / 10;
            return deliveryCost.toFixed(2);
        }
    }
    const tax = () => {
        return (sum / 10).toFixed(2)
    }
    const orderTotal = () => {
        if (deliveryCharge() === "Free Delivery") {
            return (sum - tax()).toFixed(2);
        } else {
            
            return (sum - tax() - deliveryCharge()).toFixed(2);
        }
    }
    return (
        <section className="container delivery-address">
            <div className="row">
                <div className="col-md-7">
                    <h1>SELECT YOUR DELIVERY METHOD</h1>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">DELIVERY</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">PICK UP</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <form className="contact-form" id="contactForm" onSubmit={handleSubmit2(delivery)}>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="name" {...register2("name", { required: true })} placeholder={defaultValues.Full_Name} type="text" aria-required="true" />
                                    {errors2?.name?.type === "required" && <p className="error">This field is required</p>}
                                </div>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="email" type="email" {...register2("email")} placeholder={defaultValues.Email} aria-required="true" />
                                </div>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="phone" type="number" {...register2("phone", { required: true })} placeholder={defaultValues.Phone} aria-required="true" />
                                    {errors2?.phone?.type === "required" && <p className="error">This field is required</p>}
                                </div>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="address" type="text" {...register2("Address_line_1", { required: true })} placeholder={defaultValues.Address_Line_1} aria-required="true" />
                                    {errors2?.Address_line_1?.type === "required" && <p className="error">This field is required</p>}
                                </div>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="address" type="text" {...register2("Address_Line_2")} placeholder={defaultValues.Address_Line_2} aria-required="true" />
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group address-form-group">
                                            <input className="form-control" id="city" type="text" {...register2("City", { required: true })} placeholder={defaultValues.City} aria-required="true" />
                                            {errors2?.City?.type === "required" && <p className="error">This field is required</p>}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group address-form-group">
                                            <input className="form-control" id="postCode" type="text" {...register2("postCode", { required: true })} placeholder={defaultValues.postCode} aria-required="true" />
                                            {errors2?.postCode?.type === "required" && <p className="error">This field is required</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group address-form-group">
                                    <input className="form-control" id="address-directions" type="text" {...register2("address_directions")} placeholder={defaultValues.Address_Directions} aria-required="true" />
                                </div>
                                <div className="forms_buttons">
                                    <button className="forms_buttons-action btn btn-default-contact btn-lg btn-block" type="submit" id="js-contact-btn">Place Order</button>
                                </div>

                            </form>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <form className="contact-form" id="contactForm" onSubmit={handleSubmit(delivery)}>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="name" {...register("name", { required: true })} placeholder={defaultValues.Full_Name} type="text" aria-required="true" />
                                    {errors?.name?.type === "required" && <p className="error">This field is required</p>}
                                </div>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="email" type="email" {...register("email")} placeholder={defaultValues.Email} aria-required="true" />
                                </div>
                                <div className="form-group address-form-group">
                                    <input className="form-control" id="phone" type="number" {...register("phone", { required: true })} placeholder={defaultValues.Phone} aria-required="true" />
                                    {errors?.phone?.type === "required" && <p className="error">This field is required</p>}
                                </div>
                                <div >
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container>

                                            <Controller
                                                control={control}
                                                {...register("Time", { required: true })}
                                                render={({ field }) => (
                                                    <KeyboardTimePicker
                                                        margin="normal"
                                                        id="time-picker"
                                                        label="Pick Up Time"
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change time',
                                                        }}

                                                        {...field}
                                                        keyboardIcon={<FontAwesomeIcon icon={faClock} />}
                                                    />
                                                )}
                                            />
                                            {errors.Time?.type === 'required' && <p className="error">Time is required</p>}
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </div>



                                <div className="forms_buttons">
                                    <button className="forms_buttons-action btn btn-default-contact btn-lg btn-block" type="submit" id="js-contact-btn">Place Order</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    <h3>Order Summary</h3>
                    <table className="table table-dark">
                        <tbody>
                            {
                                cart.map((item, index) => <OrderSummary item={item} index={index} key={index}></OrderSummary>)
                            }
                        
                            <tr className ="special">
                                <td className="move-right">Discount</td>
                                <td>$0</td>
                            </tr>
                            <tr>
                                <td className="move-right">Delivery Charge</td>
                                <td>${deliveryCharge()}</td>
                            </tr>
                            <tr>
                                <td className="move-right">Tax</td>
                                <td>${tax()}</td>
                            </tr>
                            <tr className ="special">
                                <th className="move-right">Order Total</th>
                                <th>${orderTotal()}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cartReducers.cart,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddress);