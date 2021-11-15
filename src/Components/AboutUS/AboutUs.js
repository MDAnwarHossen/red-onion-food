import React from 'react';
import './AboutUs.css';
import image1 from "../../hot-onion-restaurent-resources-master/Image/thumb1.png";
import image2 from "../../hot-onion-restaurent-resources-master/Image/thumb2.png";
import image3 from "../../hot-onion-restaurent-resources-master/Image/thumb3.png";
import signature from "../../hot-onion-restaurent-resources-master/Image/signature.png";


const AboutUs = () => {

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-header wow fadeInDown">
                            <h1>the restaurant</h1>
                            <h5>A little about us and a breif history of how we started.</h5>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp">
                    <div className="col-lg-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 py-1 px-0 hidden-sm about-photo">
                                    <div className="image-thumb">

                                        <img src={image1} className="img-responsive img-fluid w-100 h-100" alt="logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 p-0 about-photo hidden-xs">
                                    <img src={image2} className="img-responsive img-fluid w-100 h-100" alt="logo" />
                                </div>
                                <div className="col-6 p-0 about-photo hidden-xs">
                                    <img src={image3} className="img-responsive img-fluid w-100 h-100" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 about-us">
                        <p>
                        Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale, Red Onion's development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.
                        </p>

                        <p>
                        In contrast to other Indian eateries, Red Onion was made with the explicit expectation to appear as something else.
                        </p>
                        <p>
                        We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great.
                        </p>
                        <p>
                        Our menu highlights things that utilization the sound and fragrant flavors, however, forgets the stuffing ghee, spread, oil, and overwhelming cream.
                        </p>
                        <p>
                        Red Onion has developed to incorporate four superb takeout areas in Toronto with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that at some other Indian eatery you visit.
                        </p>
                        <img src={signature} alt="signature" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;