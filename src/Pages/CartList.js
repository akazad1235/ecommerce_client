import React from 'react';
import {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import axios from 'axios';
import ApiUrl from '../api/AppURL';
import { useContext } from 'react';
import { cartContext } from '../App';
import { useState } from 'react';
import {Link } from 'react-router-dom';

const CartList = () => {
    const [addToCart ,setAddToCart] = useContext(cartContext);   
    const totalPrice = addToCart.reduce((total, prd)=>total+prd.price*prd.qty, 0)
    const tax = (totalPrice * 0.12).toFixed(2)
    const taxInt =parseInt(tax)
    
    const shoppingCost = (totalPrice>1000) ? 0 : 50;
    const total =totalPrice+taxInt+shoppingCost;


   useEffect(()=>{
    const oldgetCart = JSON.parse(localStorage.getItem('cart'));
    setAddToCart(oldgetCart)
},[0])
 const removeCartItem = (id)=>{
      const updateToCart = addToCart.filter(cartItem =>cartItem.id !== id)
        setAddToCart(updateToCart)
        var stringToCart = JSON.stringify(updateToCart);
        localStorage.setItem('cart', stringToCart); 
 }
 
 const incrementProductQty = (products) =>{
     const getProduct = addToCart.find((pro)=>pro.id == products.id)
     getProduct.qty = getProduct.qty +1
     const updateProduct = addToCart.filter((pro) =>pro.id !== products.id)
     const finallyPro = [...updateProduct,getProduct]
     setAddToCart(finallyPro)
        var stringToCart = JSON.stringify(finallyPro);
        localStorage.setItem('cart', stringToCart); 
   }
   const decrementProductQty = (products) =>{
    const getProduct = addToCart.find((pro)=>pro.id == products.id)
    getProduct.qty = getProduct.qty -1
    const updateProduct = addToCart.filter((pro) =>pro.id !== products.id)
    const finallyPro = [...updateProduct,getProduct]
    setAddToCart(finallyPro)
       var stringToCart = JSON.stringify(finallyPro);
       localStorage.setItem('cart', stringToCart); 
  }
    return (
        <div className="margin-top">
            <NavMenuDesktop/>
            <Container >

                <Row className="cart-item-container  mt-5 ">
                    <Col lg={8} md={8} sm={12} xs={12} className="mt-5 border p-3 rounded">
                        <div className="header d-flex justify-content-between">
                            <h2>My Cart ({addToCart.length} Items)</h2>
                            <div>
                                <h4>Total Price: <span className="taka-symbol">&#2547;</span>{totalPrice}</h4>
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
                                            <div className="price mt-3">
                                             <strong> <span className="taka-symbol">&#2547;</span>{cartProduct.price} x {cartProduct.qty} = <span className="taka-symbol">&#2547;</span>{cartProduct.price*cartProduct.qty}</strong>
                                            </div>
                                            <div className="btn-action d-flex  justify-content-around mt-3">
                                                <div className="quantity d-flex">
                                                    <button className="btn btn-success btn-sm" onClick={()=>decrementProductQty(cartProduct)}><i className="fas fa-minus"></i></button><input className="form-control"  width="10" type="number" value={cartProduct.qty}/><button onClick={()=>incrementProductQty(cartProduct)} className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button>
                                                </div>
                                                <div className="remove-cart-item ml-5">
                                                    <button className="btn btn-danger btn-sm " onClick={()=>removeCartItem(cartProduct.id)} ><i className="fas fa-trash"></i></button>
                                                </div>
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
                        {
                            addToCart.length > 0 &&(
                                <>
                                    <div className="mt-3">
                                        <h5>Sub Total: <span className="taka-symbol">&#2547;</span>{totalPrice}</h5>
                                        <h5>Tax: <span className="taka-symbol">&#2547;</span>{tax}</h5>
                                        <h5>Delivery Cost: <span className="taka-symbol">&#2547;</span>{shoppingCost}</h5>
                                        <h5>Total: <span className="taka-symbol">&#2547;</span>{total}</h5>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-danger btn-sm mr-2 "><Link to="/" className="text-white text-decoration-none">Continue Shopping</Link></button>
                                        <button className="btn btn-success btn-sm"><Link to="/checkout">Proceed Checkout</Link></button>
                                    </div>
                                </>
                            )
                            
                        }
                        
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default CartList;