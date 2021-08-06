import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ApiUrl from '../api/AppURL';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';


const CustomerVerify = () => {

    const[otp, setOtp] = useState({otps:'', error:''});
    const[secondStep, setSecondStep]=useState({
        password:'',
        rePassword:''
    })
    const[password,setPassword] = useState({otp:'', password:''})
    const[status, setStatus] = useState({error:'', success:''});

    
    const otpHandle = (e)=>{
        let storeOtp = e.target.value;
        axios.get(`${ApiUrl.otp}/${storeOtp}`)
        .then((res)=>{
            if(res.data.status === 200){
                setOtp({
                    otps:res.data.success
                })
            }
            if(res.data.error){
                setOtp({
                    error:res.data.error
                })
            }
        })   
    }
    const handleChange =(e)=>{
        const copy = {...secondStep}
        copy[e.target.name] = e.target.value
        setSecondStep(copy)

    }
    
    const handleCustomerVerify = (e)=>{
        if(secondStep.password !==secondStep.rePassword){
            setStatus({error:'Your Password Not Match'})
        }else{
            setPassword({
                otp: otp.otps,
                password: secondStep.password
            })
            axios.post(ApiUrl.setPassword, password)
            .then((res)=>{
                console.log(res.data);
            })
            setStatus({success:'match'})
        }
        e.preventDefault()
    }
    console.log(password);
    console.log(otp.otps);


    return (
        <>
        <NavMenuDesktop />
        <div className="d-flex justify-content-center align-items-center" style={{marginTop:'150px'}}>
            <div className="w-25  login  ">
            <h4 className="text-center mb-4 pb-3 border-bottom">OTP Verification</h4>
            <p>We've send a verification code to your email</p>
            <Form onSubmit={handleCustomerVerify}>
                <div className="form-group">
                    <label for="otp">Code</label>
                    <input type="number" className="form-control" id="otp" name="otp" placeholder="6 digit otp" onBlur={otpHandle}/>
                    <label className="text-danger">{otp.error!=null?otp.error:''}</label>
                </div>
                <div className="form-group">
                    <label for="pass">Password</label>
                    <input type="password" className="form-control" id="pass" name="password" value={secondStep.pass} placeholder="Your password" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label for="re-pass">Confirm Password</label>
                    <input type="password" className="form-control" id="re-pass" name="rePassword" value={secondStep.rePass} placeholder="confirm password" onChange={handleChange}/>
                    <label className="text-danger">{status.error == null? '': status.error}</label>
                </div>
                <div>
                <input className="btn btn-success form-control mb-3" type="submit" value="Continue"/>
                <button className="btn btn-outline-dark form-control"><Link to="/register">Back</Link></button>
                </div>
            </Form>
            </div>
        </div>
        <Footer />
    </>

    );
};


export default CustomerVerify;