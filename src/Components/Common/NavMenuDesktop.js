import React, { useEffect, useRef, useState } from 'react';
import {Button, Container, Navbar, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

const NavMenuDesktop = () => {
  
    const ref = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const [categories, setCategoreis] = useState([]);
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
            setCategoreis(res.data.data);
        })
    }, [0])
    let test = ['one', 'two', 'three', 'four', 'five', 'six'];
    return (
        <div className="desktop-nav">
            <Navbar className="navbar" fixed={"top"} bg="light">
                <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            {/* <a href="" className="btn "> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></a> */}
 
                           <div className="d-flex">
                           <button className="btn btn-success" ref={ref} onClick={() => setOpen(true)}>
                                        Open 
                            </button>
                       
                               
                            
                        <ControlledMenu anchorRef={ref} isOpen={isOpen}
                                onClose={() => setOpen(false)} className="my-menu"> 
                                <MenuItem ><Link to={`/product/${'desktop'}`}>Desktop</Link></MenuItem>
                                <MenuItem ><Link to={`/product/${'laptop'}`}>Laptop</Link></MenuItem>
                                <MenuItem ><Link to={`/product/${'mobile'}`}>Mobile</Link></MenuItem>
                                <MenuItem ><Link to={`/product/${'bike'}`}>Bike</Link></MenuItem>
                               
                            </ControlledMenu>
 


                            <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Button>
                           </div>

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