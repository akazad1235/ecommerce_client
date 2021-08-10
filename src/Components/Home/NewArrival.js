import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ApiUrl from '../../api/AppURL';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NewArrival = () => {

 const[newProduct, setNewProduct] = useState([])
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
      useEffect(()=>{
        axios.get(`${ApiUrl.productType('new')}`)
        .then((res)=>{
          setNewProduct(res.data.success)
        })
      },[0])
    return (
      <>
      
  <div className="">
             <h4 className="text-center section-title">New Arrival</h4>
            <div className="text-center my-3">
               <Button className="btn btn-danger m-1" onClick={previous}>Prev</Button>
               <Button className="btn btn-danger m-1" onClick={next}>Next</Button>
             </div>
             <Slider ref={c => (customSlider.current = c)} {...settings} >
                 {
                   newProduct.map(newPd =>{
                    return<div key={newPd.id}>
                      <NavLink  to={`/details/${newPd.slug}`} className="product-list ">
                        <Card className="image-box card">
                            <img src={`${ApiUrl.fileStore}assets/images/products/${newPd.image}`} alt="" />
                  
                            <Card.Body>
                                <h1 className="product-name-on-card text-center" title={newPd.title}>{newPd.title.substring(0, 50)+((newPd.title).length > 10 ? '...':'')}</h1>
                                <p className="product-price-on-card text-center">&#2547;{newPd.price}</p>
                            </Card.Body>
                        </Card>
                      </NavLink>
                    </div>
                   })
                 }

             </Slider>
         </div>

      </>
   );
};

export default NewArrival;