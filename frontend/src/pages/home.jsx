import React from 'react'
import Navbar from '../components/Header/Navbar'
import Slider from '../components/slider'
import Category from '../components/Categories/Category'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { banner , bestsellers, newArrivals} from '../data'
import ProductList from '../components/Products/ProductList'
import Newsletter from '../components/Newsletter'
const home = () => {
  return (
    <div className='h-screen'>
        <Navbar/>
        <div className='mx-24 h-5/6'>
          <Slider/>
        </div>
        <div className='mx-24'>
        <Category/>
        <ProductList title={"BEST SELLERS PRODUCTS"} desc={"Our Bestsellers, Your Must-Haves"} product={bestsellers}/>
        <Banner image={banner[0].img} title={banner[0].title} desc={banner[0].desc}/>
        <ProductList title={"FEATURED PRODUCTS"} desc={"Showcasing the Best: Elevate Your Style Today!"} product={newArrivals}/>
        </div>

        <Newsletter/>

        <Footer/>
    </div>
  )
}

export default home