import React from 'react';
import { Form } from 'react-bootstrap';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

const Login = () => {
    return (
        <>
            <NavMenuDesktop />
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:'150px'}}>
            <div className="w-25  login">
            <h4 className="text-center">Account Loin</h4>
            <Form>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="your email"/>
                </div>
                <div className="form-group">
                    <label for="pass">Password</label>
                    <input type="password" className="form-control"  id="pass" name="password" placeholder="your password" />
                </div>
                <div>
                    <button className="btn btn-success form-control">Login</button>
                </div>
            </Form>
            </div>
        </div>
        <Footer />
        </>
    );
};


export default Login;