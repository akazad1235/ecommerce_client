import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import FeaturedProducts from '../Components/Home/FeaturedProducts';
import Categories from '../Components/Home/Categories';
import Collection from '../Components/Home/Collection';
import NewArrival from '../Components/Home/NewArrival';
import HomeTop from '../Components/Home/HomeTop';
import NavMenuDesktop from '../Components/Common/NavMenuDesktop';
import NavMenuMoblie from '../Components/Common/NavMenuMoblie';
import HomeTopMobile from '../Components/Home/HomeTopMobile';
import axios from 'axios';
import ApiUrl from '../api/AppURL';
import BigSlider from '../Components/Home/BigSlider';
import Footer from '../Components/Common/Footer';


const Home = () => {

   


    return (
        <div>
            <NavMenuDesktop />
            <HomeTop />
            <NewArrival/>
     
            <Footer />
        </div>
    );
};

export default Home;