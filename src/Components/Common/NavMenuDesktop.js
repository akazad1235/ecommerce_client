import React, { useEffect, useRef, useState } from 'react';
import {Button, Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ApiUrl from '../../api/AppURL';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu,

    ControlledMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import axios from 'axios';
import MegaMenu from "react-awesome-mega-menu";
import { useContext } from 'react';
import { cartContext } from '../../App';
const getCartProduct = JSON.parse(localStorage.getItem('cart'))||"[]";
const NavMenuDesktop = () => {
    const [cartCount] = useContext(cartContext);
    const [addToCart] = useContext(cartContext);
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        if(window.location == 'http://localhost:3000/'){
            setOpen(true)
        }else{
            setOpen(false)
        }
    },[0])
    useEffect(() =>{
        axios.get(ApiUrl.categories)
        .then((res)=>{
            setCategories(res.data.data);
        })
    }, [0])
 
    return (
        <div className="desktop-nav">
            <Navbar className="navbar" fixed={"top"} bg="light">
                <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <Link to="/"><a href="" className="btn "> <img className="nav-logo" src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/dddd6b9d4e8c-6ea93eea60eb-images.jpg"/></a></Link>
                            <Link to="/cartList"><button className="cart-btn"><i className="fa fa-shopping-cart"></i> {addToCart.length} items</button>  </Link>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Search Product Here"/>
                                <button type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12} >
                                 <a className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></a>
                                <a className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></a>
                                <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                                <li className="h4 btn" ><Link to="/onBoardLogin">LOGIN</Link> </li>
                        </Col>
                    </Row>
                   <div className="mt-2 bg-dark">
                   <Row>
                        <Col lg={2} md={2} sm={12} xs={12} className="bg-danger"  ref={ref} onClick={() => setOpen(true)}>
                                    <div className="d-flex justify-content-between text-white">
                                        <div>Categories </div>
                                        <div><i className="fas fa-chevron-down"></i></div>
                                    </div>
                                <ControlledMenu anchorRef={ref} isOpen={isOpen}
                                            onClose={() =>window.location == 'http://localhost:3000/'? setOpen(true):setOpen(false)} className="my-menu"> 
                                            <MenuItem ><Link to={`/product/${'desktop'}`}>Desktop</Link><i className="fas fa-chevron-right ml-auto cats-icon"></i></MenuItem>
                                            <MenuItem ><Link to={`/product/${'laptop'}`}>Laptop</Link><i className="fas fa-chevron-right ml-auto cats-icon"></i></MenuItem>
                                            <MenuItem ><Link to={`/product/${'mobile'}`}>Mobile</Link><i className="fas fa-chevron-right ml-auto cats-icon"></i></MenuItem>
                                            <MenuItem ><Link to={`/product/${'bike'}`}>Bike</Link><i class="fas fa-chevron-right ml-auto cats-icon"></i></MenuItem>
                                </ControlledMenu>
                         </Col>
                    </Row>
                   </div>
                </Container>
            </Navbar>
        </div>
       
    );
};

export default NavMenuDesktop;