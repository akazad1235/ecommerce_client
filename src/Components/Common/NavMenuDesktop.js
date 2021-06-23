import React from 'react';
import {Button, Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenuDesktop = () => {
    return (
        <div className="desktop-nav">
            <Navbar className="navbar" fixed={"top"} bg="light">
                <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <a href="" className="btn "> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></a>
                            <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Button>
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
                                <a className="h4 btn" ><Link to="/onBoardLogin">LOGIN</Link> </a>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
       
    );
};

export default NavMenuDesktop;