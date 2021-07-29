import React from 'react';
import {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import axios from 'axios';
import ApiUrl from '../api/AppURL';
import { useContext } from 'react';
import { cartContext } from '../App';

const CartList = () => {
    const [addToCart ,setAddToCart] = useContext(cartContext);   
    const allCart =  localStorage.getItem('cart');
    console.log(typeof(allCart));

   // let id = 6
   useEffect(()=>{
       axios.get(`${ApiUrl.cartList}/${6}`)
       .then(res=>{
           console.log(res.data);
       })
   },[0])
   useEffect(()=>{
    const oldgetCart = JSON.parse(localStorage.getItem('cart'));
    setAddToCart(oldgetCart)
},[0])

 addToCart.map(pr =>{
     console.log(pr);
 })
    return (
        <div className="margin-top">
            <NavMenuDesktop/>
            <Container >

                <Row className="cart-item-container  mt-5 ">
                    <Col lg={8} md={8} sm={12} xs={12} className="mt-5 border p-3 rounded">
                        <div className="header d-flex justify-content-between">
                            <h2>My Cart ({addToCart.length} Items)</h2>
                            <div>
                                <h4>Total Price: 9563 Tk</h4>
                                <h6>You are saving total Tk 755421 </h6>
                            </div>
                        </div>
                        {
                            addToCart.map(cartProduct =>{
                                return<>
                                    <div className="cart-item d-flex border-bottom">
                                        <div className="item ">
                                            <img className="img-fluid" src={`${ApiUrl.fileStore}assets/images/products/${cartProduct.image}`} alt=""/>
                                        </div>
                                        <div className="item info m-3 ">
                                            <h5>{cartProduct.title}</h5>
                                            <div className="btn-action d-flex justify-content-between mt-3">
                                                <div className="quantity d-flex">
                                                    <button className="btn btn-success btn-sm"><i className="fas fa-minus"></i></button><input className="form-control"  width="10" type="text"/><button className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button>
                                                </div>
                                                <div className="remove-cart-item">
                                                    <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                                                </div>
                                            </div>
                                            <div className="price mt-3">
                                                <del className="text-danger">TK. 57451</del> <strong>{cartProduct.price}</strong>
                                            </div>
                                        </div>
                                    </div>
                              </>
                            })
                        }
                        
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className="mt-5 border ">
                        <div className="header ">
                            <h3>Checkout Summary</h3>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default CartList;