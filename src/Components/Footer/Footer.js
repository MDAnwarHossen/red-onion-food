import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faYoutube, faVimeo, faPinterestSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faCopyright, faHeart, faFileContract } from '@fortawesome/free-solid-svg-icons';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <h1>About us</h1>
                        <p>We welcome you to sit back, unwind and appreciate the lovely sights and hints of the ocean while our best gourmet expert sets you up a scrumptious dinner utilizing the best and freshest ingredients.Ren Onion's legacy comes from The parent  Restaurant which was built up in 1953.</p>
                        <a href="/">Read more →</a>
                    </div>
                    <div className="col-md-4  col-sm-6">
                        <h1>Recent post</h1>
                        <div className="footer-blog clearfix">
                            <a target='_blank' rel='noreferrer' href="https://iamafoodblog.com/simmer-pot-recipes/" blank>
                                <img data-sizes="auto" src="https://i.ibb.co/Y7pNtbj/Untitled-1.png" data-src="https://i.ibb.co/1LBCZPq/simmer-pot-8481w-1024x683.webp" className="img-responsive footer-photo lazyload" alt="blog photos" />
                                <p className="footer-blog-text">A simmer pot is the absolute best way to make your home smell warm and inviting.</p>
                                <p className="footer-blog-date">29 may 2021</p>
                            </a>
                        </div>
                        <div className="footer-blog clearfix last">
                            <a target='_blank' rel='noreferrer' href="https://iamafoodblog.com/basque-cheesecake/">
                                <img data-sizes="auto" src="https://i.ibb.co/Y7pNtbj/Untitled-1.png" data-src="https://i.ibb.co/ZVpsFCJ/basque-cheesecake-8392w-1024x683.webp" className="img-responsive footer-photo lazyload" alt="blog photos" />
                                <p className="footer-blog-text">The easiest, creamiest, best cheesecake you’ll ever make, period.</p>
                                <p className="footer-blog-date">29 may 2021</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4  col-sm-6">
                        <h1>Reach us</h1>
                        <div className="footer-social-icons text-nowrap ">
                            <a aria-label="Facebook" href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                            <a aria-label="Twitter" href="https://www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a aria-label="Youtube" href="https://www.youtube.com">
                            <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a aria-label="Vimeo" href="https://www.vimeo.com">
                            <FontAwesomeIcon icon={faVimeo} />
                            </a>
                            <a aria-label="Pinterest" href="https://www.pinterest.com">
                            <FontAwesomeIcon icon={faPinterestSquare} />
                            </a>
                            <a aria-label="Linkedin" href="http://www.linkedin.com">
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        <div className="footer-address">
                            <p><FontAwesomeIcon className="fa" icon={faMapMarkerAlt} />156 Cumberland St, Toronto, ON M5R 1A8, Canada</p>
                            <p className ="text-nowrap" ><FontAwesomeIcon className="fa" icon={faPhoneAlt} />Phone: +1 416-428-6641</p>
                            <p className ="text-nowrap"><FontAwesomeIcon className="fa" icon={faEnvelope} />support@restaurant.com</p>
                            <p className ="text-nowrap"><FontAwesomeIcon className="fa" icon={faFileContract} /><a aria-label="Linkedin" href="https://www.freeprivacypolicy.com/live/f0542f91-d14d-40f2-aedf-f2c4af1e27f2">
                           Privacy Policy
                            </a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copyrights">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p><FontAwesomeIcon className="fa" icon={faCopyright} /> 2021.Tomato.All rights reserved. Developed by <FontAwesomeIcon className="fa" icon={faHeart} /> Anwar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;