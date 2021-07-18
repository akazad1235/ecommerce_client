import React, { useState } from 'react';
import {Navbar, Button } from 'react-bootstrap';


const NavMenuMoblie = () => {

    const[sideNav, setContentOver] = useState({
        sideNavState: "sideNavClose",
        contentOverState: "ContentOverlayClose"
    });
    const menuBarClickHandler= () =>{
        let sideNavBar = sideNav.sideNavState;
        let contentOverlay = sideNav.contentOverState;

        if(sideNavBar === "sideNavOpen"){
            setContentOver({
                sideNavState:"sideNavClose",
                contentOverState:"ContentOverlayClose"
            })
            
        }else{
            setContentOver({
                sideNavState:"sideNavOpen",
                contentOverState:"ContentOverlayOpen"
            })
        }
    }
    // const overlayClickHandler= () =>{
  
    // }
    // const sideNavOpenClose = () =>{
    //     let sideNavBar = sideNav.sideNavState;
    //     let contentOverlay = sideNav.contentOverState;
    //     if(sideNavBar === "sideNavOpen"){
    //         setContentOver({
    //             sideNavState:"sideNavOpen",
    //             contentOverState:"ContentOverlayOpen"
    //         })
    //     }else{
    //         setContentOver({
    //             sideNavState:"sideNavClose",
    //             contentOverState:"ContentOverlayClose"
    //         })
    //     }
    // }
    return ( 
        <div className="mobile-nav">
           <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                <a onClick={menuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                {/* <a href="" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png"/></a> */}
                <a href="" className="btn"> <img className="nav-logo" src="" alt="img"/></a>
                <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Button>
            </Navbar>

            <div  className={sideNav.sideNavState}>

            </div>
            <div className={sideNav.contentOverState} onClick={menuBarClickHandler}>

            </div>{/* End Overlay */}
        </div> 
    );
};

export default NavMenuMoblie;