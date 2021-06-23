import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import ApiUrl from '../api/AppURL';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import NavMenuMoblie from '../Components/Common/NavMenuMoblie';
import formValidation from '../validation/FormValidation';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    let contactForm = document.getElementById('contactForm');
   const [contact, setContact] = useState({
       name:'',
       phone: '',
       msg: ''
   });
   const [formError, setFormError]= useState({error:''});
   console.log(contact.name);
   console.log(contact.phone);
   console.log(contact.msg);
  let handleChange =(e)=>{

        const newContact = {...contact}
        newContact[e.target.name]=e.target.value
       
        if(e.target.name === 'name'){
          // if(/^[a-zA-Z ]{2,30}$/.test(e.target.value == true){
                setContact(newContact);
          //  }
        }
        if(e.target.name === 'phone'){
            // if(/^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(e.target.value) == true){
                setContact(newContact);
            // }else{
            //     setFormError({error:'invalid number'})
            // }
        }
        if(e.target.name === 'msg'){
            setContact(newContact);
        }
       
        
   }

   let  handleSubmit = (e)=>{
         let {name, phone, msg}  = contact;

        if (!(formValidation.name).test(name)) {
            toast.warning("invalid name")
        }else if(!(formValidation.phone).test(phone)){
            toast.warning("invalid phone number")
        }else if(msg.length == 0){
            toast.warning("please write your message")
        }
        else{
            let myFormData = new FormData();
            myFormData.append('name', name);
            myFormData.append('phone', phone);
            myFormData.append('message', msg);
   
            axios.post(ApiUrl.sendContactDetails, myFormData)
            .then((res)=>{
               console.log(res.data.status);
               if (res.data.status) {
                toast.success("contact send success")
                contactForm.reset();
               }else{
                   alert('error');
               }
            })
            .catch((error)=>{
                toast.error("Something Wrong!!!!!")
            })
        }
         
        e.preventDefault();
    }
  

    return (
        <div>
            <NavMenuDesktop/>
            <NavMenuMoblie/>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12} >
                                    
                        <div className="contact-wrapper mt-5">
                          
                            <h2>Contact with us</h2>
                            <p>Please enter your mobile no, and go next</p>
                            <div className="contact-form">
                                <Form id="contactForm" onSubmit={handleSubmit}>
                                    <label>Name</label>
                                    <input type="text" id="name"  className="form-control" name="name" onBlur={handleChange} />
                                    <label >Phone No</label>
                                    <label style={{color:'red'}}>{formError.error}</label>
                                    <input type="text" id="phone" className="form-control" name="phone" onBlur={handleChange} />
                                    <label>Message</label>
                                    <textarea id="msg" className="form-control" name="msg" onBlur={handleChange}></textarea>
                                    <input type="submit"  value="Submit" className="form-control btn btn-danger mt-3"/>
                                </Form>
                            </div>
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

export default Contact;