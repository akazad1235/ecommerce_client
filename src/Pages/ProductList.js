import React, { useEffect, useState } from 'react';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../api/AppURL';
import Sidebar from '../Components/productList/sidebar';
import Footer from '../Components/Common/Footer';



const ProductList = () => {
    const {type} = useParams();

    const[product, setProduct] = useState([])
  
    useEffect(()=>{
        axios.get(`${ApiUrl.productList}/${type}`)
        .then(res =>{
            setProduct(res.data.data)
        })
    },[0])
   
    
    return (
        <div >
         <NavMenuDesktop/> 
        
         
        <div  style={{marginTop:'140px'}}>
            
            <div className="row m-3">
                <div className="className col-md-2">
                    <Sidebar/>
                </div>
                <div className="className col-md-10" style={{border:'1px solid red'}}>
 
                {/* product-list-header */}
                 <div className="product-list-header border-bottom border-secondary pb-2 d-flex justify-content-between align-items-center">
                     <p>368 items found in products</p>
                     <div className=" sort d-flex align-items-center">
                         <div><span>Sort By</span></div>
                    <div>
                        <select name="" id="" className="form-control">
                            <option  value="low-price">Low Price</option>
                            <option value="high-price ">High Price</option>
                        </select>
                    </div>
                    </div>
                     <div className="d-flex">
                         <div className="align-items-center">view</div>
                         <div>
                             <i className="fas fa-th-large"></i>
                             <i className="fas fa-list"></i>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                 {
                     product.map(product =>{
                        
                      return  <div className="col-md-3 my-2" key={product.id}>
                            <NavLink to={`/details/${product.slug}`} className="product-list "> <div className="card pCard " >
                                     <img src={`${ApiUrl.fileStore}assets/images/products/${product.image}`} className="card-img-top" alt="..."/>
                                     <div className="card-body">
                                         <h5 className="card-title">{product.title}</h5>
                                         <p className="card-text d-flex justify-content-between">
                                             <del className="strike text-danger">{product.price}</del>{product.price}
                                         </p>
                                         <p className="rating">
                                         <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>(20)
                                         </p>
                                     </div>
                                 </div>
                             </NavLink>
                        </div>
                       
                   
                     })
                 }
                 </div>
                </div>
             </div>
 
         </div>
        <Footer />
        </div>
    );
};

export default ProductList;