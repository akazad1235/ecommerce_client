import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import ApiUrl from '../api/AppURL';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

const Login = () => {

    const[login, setLogin] = useState({email:'', password:''})
    const[error, setError] = useState({err:''})
    const[success, setSuccess] = useState()


    const handleChange = (e)=>{
        const copyLogin = {...login}
        copyLogin[e.target.name]=e.target.value
        setLogin(copyLogin)
    }
    const handleLogin =(e)=>{
            
        axios.post(ApiUrl.login, login)
        .then((res)=>{
            if(res.data.status == 200){
                setSuccess(res.data.success)
                setError({err:''})
                localStorage.setItem('email',res.data.data.email)
                localStorage.setItem('id',res.data.data.id)
                window.history.back();

            }
            if(res.data.status == 404){
                setError({err:res.data.error})
                console.log('error');
            }
        })
        e.preventDefault()
    }
    
    return (
        <>
            <NavMenuDesktop />
            <div className="d-flex justify-content-center align-items-center" style={{marginTop:'150px'}}>
                <div className="w-25  login  ">
                <h4 className="text-center mb-4 pb-3 border-bottom">Account Loin</h4>
                <p className="text-danger">{error.err}</p>
                <Form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="your email"  onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="pass">Password</label>
                        <input type="password" className="form-control"  id="pass" name="password" placeholder="your password"  onChange={handleChange}/>
                    </div>
                    <div>
                        <button className="btn btn-success form-control">Login</button>
                        <p className="mt-2 text-center">Don't have an account?</p>
                        <button className="btn btn-outline-dark form-control"><Link to="/register">Register</Link></button>
                    </div>

                </Form>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Login;