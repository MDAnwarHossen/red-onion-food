import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faYoutube, faVimeo, faPinterestSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (

        <section className="main-content contact-content">
            <div className="container p-0">
                <div className="col-md-12 col-md-offset-1">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-left no-margin-top">Address</h3>
                            <div className="footer-address contact-info">
                                <p><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} />156 Cumberland St, Toronto, ON M5R 1A8, Canada</p>
                                <p className="text-nowrap" ><FontAwesomeIcon className="fa" icon={faPhoneAlt} />Phone: +1 416-428-6641</p>
                                <p className="text-nowrap"><FontAwesomeIcon className="fa" icon={faEnvelope} />support@restaurant.com</p>
                            </div>
                            <br />
                            <h3 className="text-left no-margin-top">Working hours</h3>
                            <div className="contact-info text-muted">
                                <p>10:00 am to 11:00 pm on Weekdays</p>
                                <p>11:00 am to 11:30 pm on Weekends</p>
                            </div>
                            <br />
                            <h3 className="text-left no-margin-top">Follow Us</h3>
                            <div className="contact-social">
                                <a href="https://www.facebook.com">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a href="https://www.twitter.com">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.youtube.com">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href="https://www.vimeo.com">
                                    <FontAwesomeIcon icon={faVimeo} />
                                </a>
                                <a href="https://www.pinterest.com">
                                    <FontAwesomeIcon icon={faPinterestSquare} />
                                </a>
                                <a href="http://www.linkedin.com">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="contact-form" id="contactForm">
                                <div className="form-group">
                                    <input className="form-control" name="name" id="name" placeholder="Full Name" type="text" required="required" aria-required="true" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="email" name="email" id="email" placeholder="Email Address" required="required" aria-required="true" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Subject" type="text" id="subject" name="subject" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" id="message" placeholder="Message" rows="5"></textarea>
                                </div>
                                <button className="btn btn-default-contact btn-lg btn-block" id="js-contact-btn">Send message</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactUs;