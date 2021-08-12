import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './AboutUs.css';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);

const AboutUs = () => {
    const slides = ['https://i.ibb.co/kSfhM0h/1607430639533.png', 'https://i.ibb.co/kSfhM0h/1607430639533.png', 'https://i.ibb.co/kSfhM0h/1607430639533.png', 'https://i.ibb.co/kSfhM0h/1607430639533.png', 'https://i.ibb.co/kSfhM0h/1607430639533.png', 'https://i.ibb.co/kSfhM0h/1607430639533.png'];
    return (
        <>
            <div  className="container-fluid">
                <Swiper
                    id="main"
                    
                    centeredSlides = {true}

                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            

                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 70

                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,

                        },
                    }}

                    navigation
                    pagination={{ clickable: true }}

                    autoplay={{ delay: 3000 }}
                    tag="section"
                    wrapperTag="ul"
                     >

                    {slides.map((i, el) => {
                        
                        return <SwiperSlide key={el}> <img src={i} className="image-fluid" alt="" />  </SwiperSlide>;
                    })}
                </Swiper>

            </div>
        </>
    );
};

export default AboutUs;