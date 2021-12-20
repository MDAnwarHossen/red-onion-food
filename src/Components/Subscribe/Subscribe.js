import React from 'react';
import './Subscribe.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const defaultValues = {

    Email: "",
};

const Subscribe = () => {
    const { register,  handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {


        console.log(data);
        reset(defaultValues)

    };
    return (
        <>
            <section className="subscribe py-5">
                <div className="container">
                    <div className="row text-md-left text-center">
                        <div className="col-md-3">
                            <h1>Subscribe</h1>
                        </div>
                        <div className="col-md-5">
                            <p>Get updates about new dishes and upcoming events</p>
                        </div>
                        <div className="col-md-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-9">
                                        <section>

                                            <input type="email" placeholder = "Your Email Address"  {...register("Email", { required: true })} />
                                            {errors.Email?.type === 'required' && <p className="error">Email is required</p>}
                                        </section>
                                        
                                    </div>
                                    <div className="col-3 d-flex justify-content-start">
                                        <button aria-label="Right Arrow Button" type="submit" className="btn btn-default"><FontAwesomeIcon icon={faAngleRight} className="fa align-top" /></button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default Subscribe;