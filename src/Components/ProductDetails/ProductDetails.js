
import axios from 'axios';
import React from 'react';
import { useState,useContext, useEffect } from 'react';
import { ButtonToolbar, Col, Container, Nav, Row, Tabs, Tab, Table} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ApiUrl from '../../api/AppURL';
import { cartContext } from '../../App';


const ProductDetails = () => {
  const [cartCount, setCartCount] = useContext(cartContext);
    const{slug} =useParams();
    const[product, setProduct] = useState({})
    const [count, setCount] = useState(0);
    
   useEffect(()=>{
    axios.get(`${ApiUrl.productDetails}/${slug}`)
    .then(res =>{
        setProduct(res.data.success)
        
    })
    .catch(error=>{
        console.log(error);
    })
   }, [0])

   const incrementCount = () =>{
    setCount(count+1)
   }
   const decrementCount = () =>{
    if(count>0){
        setCount(count-1)
    }
   }
console.log(cartCount);
    return (
        <div className="margin-top">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="image-container mt-5">
                            <img className="product-details-img" src={`${ApiUrl.fileStore}assets/images/products/${product.image}`}  alt=""/>
                        </div>
                        <div className="multi-product-image d-flex">
                            <div className="item-img">
                                <img src="https://i.ibb.co/MZxcFLS/product-image.png" alt=""/>
                            </div>
                            <div className="item-img">
                                <img src="https://i.ibb.co/MZxcFLS/product-image.png" alt=""/>
                            </div>
                            <div className="item-img">
                                <img src="https://i.ibb.co/MZxcFLS/product-image.png" alt=""/>
                            </div>
                        </div>
                    </Col>{/* End Product Image Section */}
                     
                    <Col lg={6} md={12} sm={12} xs={12}>
                        <div className="product-info" className="mt-5">
                            <h4>{product.title}</h4>
                            <div className="list">
                                {/* <table>
                                    <tr>
                                        <th><i className="fas fa-check"></i> Price</th>
                                        <td>1454tk</td>
                                    </tr>
                                    <tr>
                                        <th><i className="fas fa-check"></i> Regular Price</th>
                                        <td>1454tk</td>
                                    </tr>
                                    <tr>
                                        <th><i className="fas fa-check"></i> Status</th>
                                        <td>In Status</td>
                                    </tr>
                                    <tr>
                                        <th><i className="fas fa-check"></i> Brand</th>
                                        <td>Intel Pc</td>
                                    </tr>
                                    <tr>
                                        <th><i className="fas fa-check"></i> Category</th>
                                        <td>Desktop</td>
                                    </tr>
                                </table> */}
                            </div>
                            <div className="list">
                                <h5>Features</h5>
                                <li>Processor Intel® Core™ i5-6400</li>
                                <li>Motherboard Gigabyte H110M-S2</li>
                                <li>RAM DDR-4 8 GB 2666 MH</li>
                                <li>SSD WD 240 GB SATA III</li>
                                <li>Monitor HP V194 18.5-inch LED</li>
                            </div>
                            <div className="price">
                                <h3>{product.price} &#2547; </h3>
                            </div>
                            <div className="btn-action d-flex justify-content-around m-3">
                                <div className="quantity d-flex">
                                    <button onClick={decrementCount}  className="btn btn-success btn-sm"><i className="fas fa-minus"></i></button><input className="form-control" name="count" value={count}  width="5" type="number"/><button onClick={incrementCount} className="btn btn-success btn-sm"><i className="fas fa-plus"></i></button>
                                </div>
                                <div className="buy-btn">
                                    <button className="btn btn-primary " ><Link to="/cartList" className="text-white">Add to Cart</Link></button>
                                </div>
                                <div className="buy-btn">
                                    <button className="btn btn-danger" onClick={()=>setCartCount(cartCount+1)} >{cartCount}Compare</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="product-description-container mt-5">
                    <Col lg="8">
                    <Tabs defaultActiveKey="specification" id="uncontrolled-tab-example">
                    <Tab eventKey="specification" className="basic-info" title="Specification">
                        <h2>Basic Information</h2>
                        {/* <table>
                           <tr>
                               <th>Processor</th>
                               <td>Intel® Core™ i5-6400 6M Cache, 2.70 GHz</td>
                           </tr>
                           <tr>
                               <th>Motherboard</th>
                               <td>Motherboard Gigabyte H110M-S2</td>
                           </tr>
                           <tr>
                               <th>RAM</th>
                               <td>RAM DDR-4 8 GB 2666 MHz</td>
                           </tr>
                           <tr>
                               <th>SSD</th>
                               <td>SSD WD 240 GB SATA III</td>
                           </tr>
                           <tr>
                               <th>Casing</th>
                               <td>Casing View One ATX Thermal</td>
                           </tr>
                           <tr>
                               <th>Keyboard</th>
                               <td>Keyboard USB View One</td>
                           </tr>
                           <tr>
                               <th>Mouse</th>
                               <td>Mouse USB Optical</td>
                           </tr>
                        </table> */}
                     
                    </Tab>
                    <Tab eventKey="desc" title="Description"  className="basic-info">
                        <li>Processor Intel® Core™ i5-6400 6M Cache, 2.70 GHz</li>
                        <li>Motherboard Gigabyte H110M-S2</li>
                        <li>RAM DDR-4 8 GB 2666 MHz</li>
                        <li>SSD WD 240 GB SATA III</li>
                        <li>Casing View One ATX Thermal</li>
                        <li>Powe Supply View One</li>
                        <li>Keyboard USB View One</li>
                        <li>Mouse USB Optical</li>
                        <li>Monitor HP V194 18.5-inch LED </li>
                        <li>3 Year Limited Warranty</li>
                    </Tab>
                    <Tab eventKey="review" title="Reviews"  className="basic-info">
                        three
                    </Tab>
                    </Tabs>
                    <div className="nav-content">

                    </div>
                    </Col>
                    <Col lg="4" className="offer">
                        {/* <img src="https://ftp.roc.com.bd/uploads/offer_banner_card/1613393901298_banner1-8441.png" alt=""/>
                        <img src="https://ftp.roc.com.bd/uploads/offer_banner_card/1613631892178_untitled-1-01-3067.jpg" alt=""/> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;