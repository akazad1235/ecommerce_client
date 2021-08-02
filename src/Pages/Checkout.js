import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

const Checkout = () => {
    return (
        <div>
            <NavMenuDesktop />
            <div style={{marginTop:'120px'}} className="checkout-bg">
                <Form>
                <div className="d-flex justify-content-between align-items-start ">
                    <div className="w-25 bg-white p-2 m-2 rounded">
                        <div className="checkout-method">
                            <span>1</span>Customer Information
                        </div>
                      
                           <div className="form-group">
                                <div className="d-flex">
                                    <div className="mr-1">
                                        <label for="fname">First Name<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" id="fname" name="fname" placeholder="First Name"/> 
                                    </div>
                                    <div>
                                       <label for="lname">Last Name<span className="text-danger">*</span></label>
                                       <input type="text" className="form-control" id="lname" name="lname" placeholder="Last Name"/> 
                                    </div>
                                </div>
                           </div>
                            <div className="form-group">
                                <label for="add">Address<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="add" name="address" placeholder="Address"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email<span className="text-danger">*</span></label>
                                <input type="email" className="form-control" name="email" placeholder="email address"/>
                            </div>
                            <div className="form-group">
                                <label for="city">City<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" name="city" placeholder="City"/>
                            </div>
                            <div className="form-group">
                                <label for="zone">Zone<span className="text-danger">*</span></label>
                                <select id="zone" className="form-control">
                                    <option>Dhaka City</option>
                                    <option>Chittagong City</option>
                                    <option>Outside Dhaka City</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="zone">Comment</label>
                                <textarea className="form-control"></textarea>
                            </div>
                      
                    </div>
                    <div className=" w-75 m-2 ">
                        <div className="write-flex ">
                            <div className="bg-white w-50 mr-3 p-2 rounded">
                                <div className="checkout-method">
                                    <span>2</span> Payment Method
                                </div>
                                <h6>Select a payment method</h6>
                                <div className="form-group">
                                    <input type="radio"/> Payment after agent confirmation
                                </div>
                                <div className="mb-3">
                                    <h5>We Accepted: </h5>
                                    <img src="https://www.startech.com.bd/catalog/view/theme/koyla/image/card-logo.png" alt="" />
                                </div>
                            </div>
                            <div className="bg-white w-50 mr-2 p-2 rounded">
                                <div className="checkout-method">
                                    <span>3</span>Delivery Method
                                </div>
                                <h6>Select a delivery method</h6>
                                <div className="form-group">
                                    <input type="radio"/> Flat Shipping Rate - 60৳
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 bg-white p-2 rounded mr-2">
                            <div className="checkout-method">
                                <span>4</span>Order Overview
                            </div>
                            <div className="order-checkout-table p-2 mb-3">
                                <table>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Unite Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                        <tr>
                                            <td className="w-50">Title Name</td>
                                            <td>5542121</td>
                                            <td>21</td>
                                            <td>211313213</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className="font-weight-bold">Sub-Total:	</td>
                                            <td>211313213</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className="font-weight-bold">Flat Shipping Rate:</td>
                                            <td>1254</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td className="font-weight-bold">Total:</td>
                                            <td>125487415</td>
                                        </tr>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                </Form>
                <div className="d-flex justify-content-around checkout-bg p-2">
                        <div>
                            <input type="checkbox" /> I have read and agree to the <span className="text-danger">Terms and Conditions</span>, Privacy Policy and <span  className="text-danger">Refund and Return Policy</span>
                        </div>
                        <div>
                            <button className="btn btn-success">Confirm Order</button>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default Checkout;