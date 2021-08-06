import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ApiUrl from '../api/AppURL';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

const Register = () => {
   const history = useHistory();
    const [customer, setCustomer] = useState({
        fname:'',
        lname:'',
        phone:'',
        email:''
    })

    const handleChange =(e)=>{    
            const copyCustomer = {...customer}
            copyCustomer[e.target.name]=e.target.value
            setCustomer(copyCustomer)
    }
    const handleSubmit =(e)=>{
        history.push('/customer/verify')
       // const{fname, lname, phone, email} = customer;
        // let myFormData = new FormData();
        // myFormData.append('fname', fname);
        // myFormData.append('lname', lname);
        // myFormData.append('phone', phone);
        // myFormData.append('email', email);
      //  console.log(customer);
        axios.post(ApiUrl.customerRegister, customer)
        .then(res =>{
            console.log(res.data.success);
            setCustomer({
                fname:'',
                lname:'',
                phone:'',
                email:''
            })
        })
        
        e.preventDefault()
    }

console.log(customer.fname);
    return (
        <>
        <NavMenuDesktop />
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:'150px'}}>
            <div className="w-50  login">
            <h4 className="text-center mb-4 pb-3 border-bottom">User Register</h4>
            <Form onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="form-group w-50 mr-1">
                        <label for="fname">First Name<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name" value={customer.fname} onChange={handleChange}/>
                    </div>
                    <div className="form-group w-50">
                    <label for="lname">Last Name<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" value={customer.lname} onChange={handleChange}/>
                </div>
                </div>
                <div className="form-group">
                    <label for="email">Email<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="your email" value={customer.email} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number<span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="phone" name="phone" placeholder="your Phone" value={customer.phone} onChange={handleChange}/>
                </div>
                <div>
                    <input type="submit" className="btn btn-success form-control" value="Continue" />
                    <p className="mt-2">Already have an account?</p>
                    <p>If you already have an account with us, please login at the <Link to="/login">login page</Link></p>
                </div>
            </Form>
            </div>
        </div>
        <Footer />
    </>
    );
};


export default Register;