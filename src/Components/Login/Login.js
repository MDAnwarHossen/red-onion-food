import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare,  faGoogle, faGithubSquare, faMicrosoft, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import socialNetworks, { fbProvider, gitHubProvider, googleProvider, initialzeLoginFarmworks, microsoftProvider, twitterProvider, yahooProvider } from './loginManager';



const Login = () => {
    const [show, setShow] = useState(false);
    // className = { isActive? 'container right-panel-active': 'container' }
    initialzeLoginFarmworks();
    // const googleSignIn = () => {
    //     handleGoogleSignIn()
    // }

    const handleClick = async (provider) => {
        const res = socialNetworks(provider);

    }


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
                        <form className="forms_form">
                            <fieldset className="forms_fieldset">
                                <div className="forms_field">
                                    <input type="email" placeholder="Email" className="forms_field-input" required autofocus />
                                </div>
                                <div className="forms_field">
                                    <input type="password" placeholder="Password" className="forms_field-input" required />
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
                        <form className="forms_form">
                            <fieldset className="forms_fieldset">
                                <div className="forms_field">
                                    <input type="text" placeholder="Full Name" className="forms_field-input" required />
                                </div>
                                <div className="forms_field">
                                    <input type="email" placeholder="Email" className="forms_field-input" required />
                                </div>
                                <div className="forms_field">
                                    <input type="password" placeholder="Password" className="forms_field-input" required />
                                </div>
                            </fieldset>
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

export default Login;