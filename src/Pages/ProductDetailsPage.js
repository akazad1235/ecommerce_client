import React from 'react';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import ProductDetails from '../Components/ProductDetails/ProductDetails';

const ProductDetailsPage = () => {
    return (
        <div>
             <NavMenuDesktop/> 
             <ProductDetails/>
             <Footer/>

        </div>
           

    );
};

export default ProductDetailsPage;