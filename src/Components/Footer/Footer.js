import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faYoutube, faVimeo, faPinterestSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h1>About us</h1>
                        <p>Duis leo justo, condimentum at purus eu,Aenean sed dolor sem. Etiam massa libero, auctor vitae egestas et, accumsan quis nunc.Duis leo justo, condimentum at purus eu, posuere pretium tellus.</p>
                        <a href="./about.html">Read more →</a>
                    </div>
                    <div className="col-md-4  col-sm-6">
                        <h1>Recent post</h1>
                        <div className="footer-blog clearfix">
                            <a href="./blog_right_sidebar.html">
                                <img src="https://demo.web3canvas.com/themeforest/tomato/img/thumb8.png" className="img-responsive footer-photo" alt="blog photos" />
                                <p className="footer-blog-text">Hand picked ingredients for our best customers</p>
                                <p className="footer-blog-date">29 may 2021</p>
                            </a>
                        </div>
                        <div className="footer-blog clearfix last">
                            <a href="./blog_right_sidebar.html">
                                <img src="https://demo.web3canvas.com/themeforest/tomato/img/thumb9.png" className="img-responsive footer-photo" alt="blog photos" />
                                <p className="footer-blog-text">Daily special foods that you will going to love</p>
                                <p className="footer-blog-date">29 may 2021</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4  col-sm-6">
                        <h1>Reach us</h1>
                        <div className="footer-social-icons text-nowrap ">
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
                        <div className="footer-address">
                            <p><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} />28 Seventh Avenue, Neew York, 10014</p>
                            <p className ="text-nowrap" ><FontAwesomeIcon className="fa" icon={faPhoneAlt} />Phone: (415) 124-5678</p>
                            <p className ="text-nowrap"><FontAwesomeIcon className="fa" icon={faEnvelope} />support@restaurant.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyrights">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p><FontAwesomeIcon className="fa" icon={faCopyright} /> 2021.Tomato.All rights reserved. Designed by <FontAwesomeIcon className="fa" icon={faHeart} /> Anwar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;