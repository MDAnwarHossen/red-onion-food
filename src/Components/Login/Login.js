import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faGoogle, faGithubSquare, faMicrosoft, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import socialNetworks, { createAccountWithEmailAndPassword, fbProvider, gitHubProvider, googleProvider, initialzeLoginFarmworks, microsoftProvider, signInAccount, twitterProvider, updateUserProfile, yahooProvider } from './loginManager';
import { addUser } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';




const Login = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, reset: reset2, formState: { errors: errors2 } } = useForm();
    const defaultValues = {
        Full_Name: "Full Name",
        Email: "Email",
        Password: "Password",
    }

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [show, setShow] = useState(false);
    const [result, setResult] = useState({});
    // className = { isActive? 'container right-panel-active': 'container' }
    initialzeLoginFarmworks();

    //...............Authenticate Using Social Networks ..............................
    const handleClick = (provider) => {
        socialNetworks(provider)
            .then((res) => {
                props.addUser(res);
                console.log(res);
            })
    }

    //...............Sign in a user with an email address and password ..............................
    const loginOldAccount = (data) => {
        signInAccount(data.email, data.password)
            .then((res) => {
                console.log(res.displayName);
                setResult(res);
                props.addUser(res);
                history.replace(from);
                if (res.uid) {
                    reset(defaultValues);
                }
            });
    };

    //...............Create a password-based account ..............................
    const createAccount = (data) => {
        createAccountWithEmailAndPassword(data.email, data.password)
            .then((res) => {
                updateUserProfile(data.fullName);
                setResult(res);
                props.addUser(res);
                if (res.uid) {
                    reset2(defaultValues);
                }
            });
    };

    return (
        <section className="user">
            <div className="user_options-container">
                <div className="user_options-text">
                    <div className="user_options-unregistered">
                        <h2 className="user_unregistered-title">Don't have an account?</h2>
                        <p className="user_unregistered-text">Enter your personal details and start journey with us</p>
                        <button onClick={() => setShow(!show)} className="user_unregistered-signup text-nowrap" id="signup-button">Sign up</button>
                    </div>

                    <div className="user_options-registered">
                        <h2 className="user_registered-title">Have an account?</h2>
                        <p className="user_registered-text">To keep connect with us please login with your personal information</p>
                        <button onClick={() => setShow(!show)} className="user_registered-login" id="login-button">Login</button>
                    </div>
                </div>

                <div className={show ? 'user_options-forms bounceLeft' : 'user_options-forms bounceRight'} id="user_options-forms">
                    <div className="user_forms-login">
                        <h2 className="forms_title">Login</h2>
                        <div className="contact-social text-nowrap d-flex justify-content-center">
                            <button onClick={() => handleClick(googleProvider)}><FontAwesomeIcon icon={faGoogle} /></button>
                            <button onClick={() => handleClick(fbProvider)}><FontAwesomeIcon icon={faFacebookSquare} /></button>
                            <button onClick={() => handleClick(twitterProvider)}><FontAwesomeIcon icon={faTwitter} /></button>
                            <button onClick={() => handleClick(microsoftProvider)}><FontAwesomeIcon icon={faMicrosoft} /></button>
                            <button onClick={() => handleClick(yahooProvider)}><FontAwesomeIcon icon={faYahoo} /></button>
                            <button onClick={() => handleClick(gitHubProvider)}><FontAwesomeIcon icon={faGithubSquare} /></button>

                        </div>
                        <p className="text-center">or use your account</p>
                        <form className="forms_form" onSubmit={handleSubmit(loginOldAccount)}>

                            <fieldset className="forms_fieldset">
                                <div className="forms_field">
                                    <input type="email" placeholder={defaultValues.Email} autoFocus className="forms_field-input" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                                    {errors?.email?.type === "required" && <p className="error">This field is required</p>}
                                    {errors?.email?.type === "pattern" && (
                                        <p className="error">Please provide a valid email address</p>
                                    )}
                                </div>
                                <div className="forms_field">
                                    <input type="password" placeholder={defaultValues.Password} className="forms_field-input" {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ })} />
                                    {errors?.password?.type === "required" && <p className="error">This field is required</p>}
                                    {errors?.password?.type === "pattern" && (
                                        <p className="error">Should be 8 to 20 characters, at least one uppercase character, one lowercase character and one digit </p>
                                    )}
                                    {result.errorCode ? <p className="error">Invalid username or password</p> : ""}


                                </div>
                            </fieldset>
                            <div className="forms_buttons">
                                <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                                <input type="submit" value="Log In" className="forms_buttons-action" />
                            </div>
                        </form>
                    </div>
                    <div className="user_forms-signup">
                        <h2 className="forms_title">Sign Up</h2>
                        <div className="contact-social text-nowrap d-flex justify-content-center">
                            <button onClick={() => handleClick(googleProvider)}><FontAwesomeIcon icon={faGoogle} /></button>
                            <button onClick={() => handleClick(fbProvider)}><FontAwesomeIcon icon={faFacebookSquare} /></button>
                            <button onClick={() => handleClick(twitterProvider)}><FontAwesomeIcon icon={faTwitter} /></button>
                            <button onClick={() => handleClick(microsoftProvider)}><FontAwesomeIcon icon={faMicrosoft} /></button>
                            <button onClick={() => handleClick(yahooProvider)}><FontAwesomeIcon icon={faYahoo} /></button>
                            <button onClick={() => handleClick(gitHubProvider)}><FontAwesomeIcon icon={faGithubSquare} /></button>
                        </div>
                        <p className="text-center">or use your email for registration</p>
                        <form className="forms_form" onSubmit={handleSubmit2(createAccount)}>
                            <fieldset className="forms_fieldset">

                                <div className="forms_field">
                                    <input type="text" placeholder={defaultValues.Full_Name} autoFocus className="forms_field-input" {...register2("fullName", { required: true, minLength: 6, maxLength: 80 })} />
                                    {errors2?.fullName?.type === "required" && <p className="error">This field is required</p>}
                                    {errors2?.fullName?.type === "minLength" && (
                                        <p className="error">Minimum length must be at least six characters</p>
                                    )}
                                </div>
                                <div className="forms_field">
                                    <input type="email" placeholder={defaultValues.Email} className="forms_field-input"  {...register2("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                                    {errors2?.email?.type === "required" && <p className="error">This field is required</p>}
                                    {errors2?.email?.type === "pattern" && (
                                        <p className="error">Please provide a valid email address</p>
                                    )}
                                </div>
                                <div className="forms_field">
                                    <input type="password" placeholder={defaultValues.Password} className="forms_field-input"  {...register2("password", { required: true, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ })} />
                                    {errors2?.password?.type === "required" && <p className="error">This field is required</p>}
                                    {errors2?.password?.type === "pattern" && (
                                        <p className="error">Should be 8 to 20 characters, at least one uppercase character, one lowercase character and one digit </p>
                                    )}
                                    {result.errorCode ? <p className="error">{result.errorMessage}</p> : ""}
                                </div>
                            </fieldset>
                            {/* <div className="forms_buttons">
                                <Link to="/emailverification">
                                    <input type="submit" value="Sign up" className="forms_buttons-action" />
                                </Link>
                            </div> */}
                            <div className="forms_buttons">
                                <input type="submit" value="Sign up" className="forms_buttons-action" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = state => {
    return {
        loginReducers: state.loginReducers,
    }
}
const mapDispatchToProps = {
    addUser: addUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);