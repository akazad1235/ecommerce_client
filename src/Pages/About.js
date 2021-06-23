import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ApiUrl from '../api/AppURL';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import NavMenuMoblie from '../Components/Common/NavMenuMoblie';
import formValidation from '../validation/FormValidation';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {

     const [about, setAbout] = useState({
         'hide' : '',
         'show' : '',
     });

     useEffect(() =>{
        if( localStorage.getItem('sideInfo') == null){
            axios.get(ApiUrl.sideInfo)
            .then((res) => {
                 setAbout(res.data[0]['about'])
                 
                localStorage.setItem('sideInfo', res.data[0]['about']);
              
           
            })
            .catch((error) =>{
                console.log(error);
            })

        }else{
           setAbout(localStorage.getItem('sideInfo'));
           
        }
        
    },[])
    

    return (
        <div>
            <NavMenuDesktop/>
            <NavMenuMoblie/>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        
                                    
                        <div className="contact-wrapper mt-5">
                        <div class="ph-item" style={{display: about.hide !=='' ? "none":"block"}}>
                            <div class="ph-col-12">
                                <div class="ph-picture"></div>
                                <div class="ph-row">
                                    <div class="ph-col-6 big"></div>
                                    <div class="ph-col-4 empty big"></div>
                                    <div class="ph-col-2 big"></div>
                                    <div class="ph-col-4"></div>
                                    <div class="ph-col-8 empty"></div>
                                    <div class="ph-col-6"></div>
                                    <div class="ph-col-6 empty"></div>
                                    <div class="ph-col-12"></div>
                                </div>
                            </div>
                        </div>
                          
                            <div>
                            <h2 >Contact with us{about.hide}</h2>
                            </div>

                            <p style={{display: about.show !=='' ? 'block':'none'}}>{ ReactHtmlParser(about)}</p>
                            
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="map mt-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7647262135156!2d90.36348221429775!3d23.791390993127585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c61f6399c5%3A0x9fef32bd33873470!2sKamal%20Soroni%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616760294063!5m2!1sen!2sbd" width="600" height="450" ></iframe>
                       </div> 
                    </Col>
                </Row>
            </Container>
            <Footer/>

            <ToastContainer />
        </div>
    );
};

export default About;