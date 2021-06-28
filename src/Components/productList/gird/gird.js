import React from 'react';
import Sidebar from '../sidebar';

 
const gird = () => {
    
    return (
        <div  style={{marginTop:'100px'}}>
            
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
                        <div className="align-items-center"><p>view</p></div>
                        <div>
                            <i className="fas fa-th-large"></i>
                            <i className="fas fa-list"></i>
                        </div>
                    </div>
                </div>
                   <div className="row">
                       <div className="col-md-3 my-2">
                            <div className="card pCard" >
                                    <img src="https://static-01.daraz.com.bd/p/mdc/9558ac1034c99bd01ec60450e2bb4563.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/528ce78da15b01333fe83a2991435822.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/d38fb55fc780608857b09b6afe9e78e3.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/c36b4038df430a83ff38f6a1738a987c.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/9558ac1034c99bd01ec60450e2bb4563.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/528ce78da15b01333fe83a2991435822.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/d38fb55fc780608857b09b6afe9e78e3.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                       <div className="col-md-3">
                            <div className="card">
                                    <img src="https://static-01.daraz.com.bd/p/mdc/c36b4038df430a83ff38f6a1738a987c.jpg" class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Realme 8 - 8+128 GB - Helio G95 Smartphone</h5>
                                        <p className="card-text d-flex justify-content-between">
                                            <del className="strike text-danger">5555555tl</del><p>5465461321</p>
                                        </p>
                                        <p className="rating">
                                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>(20)
                                        </p>
                                    </div>
                            </div>
                       </div>
                   </div>
               </div>
           

          
            </div>

        </div>
    );
}
 

 
export default gird;