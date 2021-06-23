import React from 'react';
import Slider from "react-slick";

const BigSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
            <div>
                <img className="slider-img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1a.H.PRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"/>
            </div>
            <div>
                <img className="slider-img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1JpZXPRr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg"/>
            </div>
            <div>
                <img className="slider-img" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1Jw4idMgP7K4jSZFqXXamhVXa.jpg_1200x1200.jpg"/>
            </div>
            </Slider>
     
        </div>
    );
};

export default BigSlider;