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
                            Cras ut viverra eros. Phasellus sollicitudin sapien id luctus tempor. Sed hend rerit inter dum sagittis. Donec nunc lacus, dapibus nec interdum eget, ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. In massa est, dignissim in libero ac, fringilla ornare mi. Etiam interdum ligula purus.
                        </p>

                        <p>
                            Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. In massa est, dignissim in libero ac, fringilla ornare.
                        </p>
                        <img src={signature} alt="signature" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;