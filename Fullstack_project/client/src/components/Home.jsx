import React from 'react'
import Slider from './Cards'
import Footer from './Footer'
import Banner1 from '../banners/Banner1'
import Banner2 from '../banners/Banner2'
import Banner3 from '../banners/Banner3'
import Cards from './Cards'


function Home() {
  return (
     <>
      <Banner2/>
      <Banner1/>
      
      <Banner3/>
      <Cards/>
     
     <Footer/>
     </>
  )
}

export default Home