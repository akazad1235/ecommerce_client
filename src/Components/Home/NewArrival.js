import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useRef } from 'react';

const NewArrival = () => {

  const customSlider = useRef();

  const previous = () => {
    customSlider.current.slickPrev();
  }
  const next = () => {
    customSlider.current.slickNext()
  }

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed:3000,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="">
            <h4 className="text-center section-title">New Arrival</h4>
            <div className="text-center my-3">
              <Button className="btn btn-danger m-1" onClick={previous}>Prev</Button>
              <Button className="btn btn-danger m-1" onClick={next}>Next</Button>
            </div>
            <Slider ref={c => (customSlider.current = c)} {...settings} >
                <div>
                  <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/e46a1751b58cd1bfc97c6c9bfb7a8721.jpg_400x400q75.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                     <Card className="image-box card">
                        <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                    
                        <Card.Body>
                            <h1 className="product-name-on-card text-center">Product Title</h1>
                            <p className="product-price-on-card text-center">Price: 500tk</p>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/e46a1751b58cd1bfc97c6c9bfb7a8721.jpg_400x400q75.jpgg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/a640d8fb382be82b13cadcedf1fcb390.jpg_400x400q75-product.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/e83135c4f08dba766d539651fb79d2fa.jpg_400x400q75.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
                <div>
                <Card className="image-box card">
                      <img src="https://static-01.daraz.com.bd/p/66ec675d545eeabf8eb04415318d3db5.jpg_400x400q75-product.jpg" alt="" />
                  
                      <Card.Body>
                          <h1 className="product-name-on-card text-center">Product Title</h1>
                          <p className="product-price-on-card text-center">Price: 500tk</p>
                      </Card.Body>
                  </Card>
                </div>
            </Slider>
        </div>
    );
};

export default NewArrival;