import React from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

const Register = () => {
    return (
        <>
        <NavMenuDesktop />
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:'150px'}}>
            <div className="w-50  login">
            <h4 className="text-center mb-4 pb-3 border-bottom">User Register</h4>
            <Form>
                <div className="d-flex">
                    <div className="form-group w-50 mr-1">
                        <label for="fname">First Name<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name"/>
                    </div>
                    <div className="form-group w-50">
                    <label for="lname">Last Name<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name"/>
                </div>
                </div>
                <div className="form-group">
                    <label for="email">Email<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="your email"/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number<span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="phone" name="phone" placeholder="your Phone"/>
                </div>
                <div>
                    <button className="btn btn-success form-control">Continue</button>
                </div>
            </Form>
            </div>
        </div>
        <Footer />
    </>
    );
};


export default Register;