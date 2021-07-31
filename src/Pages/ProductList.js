import React, { useEffect, useState } from 'react';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';

import { Link, NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import ApiUrl from '../api/AppURL';
import Footer from '../Components/Common/Footer';
import { useContext } from 'react';
import { cartContext } from '../App';




const ProductList = () => {
    const {type} = useParams();
    
    const[product, setProduct] = useState([])
    const[cats, setCats] = useState([])
    const[brands, setBrands] = useState([])
    const[copiedProduct, setCopiedProduct] = useState([]);

    const copyProduct = [...product];
  
    useEffect(()=>{
        axios.get(`${ApiUrl.productList}/${type}`)
        .then(res =>{
            setProduct(res.data.success)
            console.log(res.data);
            setCopiedProduct(res.data.success)
        })
    },[0])
    
    //all category get
    useEffect(()=>{
        axios.get(ApiUrl.categories)
        .then(res =>{
            setCats(res.data.data)
                })
    },[0])
    useEffect(()=>{
        axios.get(ApiUrl.brandList)
        .then(res =>{
                setBrands(res.data.success)
                })
    },[0])
   
    //Category wise product get
   const handleCategory =(id)=>{
        axios.get(`${ApiUrl.categoriess}/${id}`)
        .then(res =>{
       setProduct(res.data.success)
       setCopiedProduct(res.data.success)
             }) 
   } 
   
        let idStore = []
      //Brand wise product get
      const handleBrand =(id)=>{
        // axios.get(`${ApiUrl.brands}/${id}`)
        // .then(res =>{
        //     setProduct(res.data.success)
        //      })  
    //    let getBrandWiseProduct =  copyProduct.filter(pd =>pd.brand_id === id)
    //    setCopiedProduct(getBrandWiseProduct)
        if (idStore.length>0) {
            if (idStore[0] !== id) {
                console.log('Exists');
                idStore[0]=id
                
            }else{
                console.log('not exists');
                let getBrandWiseProduct =  copyProduct.filter(pd =>pd.brand_id == id)
                setCopiedProduct(getBrandWiseProduct)
            }
        }else{
            idStore.push(id)
            let getBrandWiseProduct =  copyProduct.filter(pd =>pd.brand_id == id)
            setCopiedProduct(getBrandWiseProduct)
        }

        console.log(idStore);
     
   }
  
    return (
        <div >
         <NavMenuDesktop/> 
        
         
        <div  style={{marginTop:'140px'}}>
            
            <div className="row m-3">
                <div className="className col-md-2">
                <div>
                <h4 className="border-bottom border-secondary pb-3">Categories</h4>
                <div>
                    <ul>
                      {
                          cats.map(cts=><li onClick={()=>handleCategory(cts.id)}>{cts.name}</li>)
                      }
                    </ul>
                </div>
                
            </div>
            <div>
                <h4 className="border-bottom border-secondary pb-3">Brand</h4>
                <div>
                    <ul>
                        {
                            brands.map(brand => <li onClick={()=>handleBrand(brand.id)}>{brand.name}</li>)
                        }
                        
                    </ul>
                </div>
                
            </div>
            <div>
                <h4 className="border-bottom border-secondary pb-3">Price</h4>
                <div className="d-flex">
                  <input className="price-input" type="number" name="" id="" placeholder="min" />
                  <input className="price-input" type="number" name="" id="" placeholder="max" />
                  <input className="price-btn btn btn-danger btn-sm"  type="button" name="" id="" value="GO" />
                </div>
            </div>
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
                     
                     copiedProduct.map(product =>{ 
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