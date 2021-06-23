import React from 'react';
import Footer from '../Components/Common/Footer';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import NavMenuMoblie from '../Components/Common/NavMenuMoblie';
import ProductDetails from '../Components/ProductDetails/ProductDetails';

const ProductDetailsPage = () => {
    return (
        <div>
             <NavMenuDesktop/>
             <NavMenuMoblie/>
             <ProductDetails/>
             <Footer/>

        </div>
           

    );
};

export default ProductDetailsPage;