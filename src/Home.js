import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';




const Home = () => {

  const data = {
    name : "Digital Assets Store",
  }
  return <>
            <HeroSection myData ={data}  />
            {/* <HeroSection myData ={data} /> */}
            <FeatureProducts />
            <Services />
            <Trusted />
        </>
};


export default Home;