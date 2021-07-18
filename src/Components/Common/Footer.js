import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ApiUrl from '../../api/AppURL';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Footer = () => {
    const [about, setAbout] = useState({
        ad:'',
        address:''
    });


    return (
        <>
            <div className="bg">
            <Container>
                <Row className="mt-5 pt-5 pb-5">
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4 className="mb-3">About Company</h4>
                        {/* <p className="text-justify">{ReactHtmlParser(about.ad.substr(0,200))} </p> */}
                        <Link to="/about">More</Link>

                        <div className="social">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-youtube-square"></i>
                            <i className="fab fa-twitter-square"></i>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4>The Company</h4>
                        <li className=""><Link to="/about">About</Link></li>
                        <li className=""><Link to="/contact">Contact</Link> </li>
                        <li className=""> <a href="">Our Team</a></li>
                        <h6>Address</h6>
                       
                    </Col>
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4 className="mb-3">More Info</h4>
                        <li className=""><a href="">How to Product Purchase</a></li>
                        <li className=""><a href="">Privacy Policy</a></li>
                        <li className=""> <a href="">Refund Policy</a></li>
                    </Col>
                    <Col lg={3} md={6} sm={6} xm={4}>
                        <h4 className="mb-3">Download App</h4>
                       
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer-copyright-bg">
            <Container>
            <p>	&#169; copyright 2020 by ecome express</p>
            <button><Link to="/about">about</Link></button>
            <button><Link to="/contact">contact</Link></button>
            <button><Link to="/details">Product Details</Link></button>
            <button><Link to="/productlist">Product List</Link></button>
            <button><Link to="/cartList">Cart List</Link></button>
            </Container>
        </div>
        </>
    );
};

export default Footer;