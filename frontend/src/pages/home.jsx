import React from 'react'
import Navbar from '../components/Header/Navbar'
import Slider from '../components/Slider'
import Category from '../components/Categories/Category'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { banner , bestsellers, newArrivals} from '../data'
import ProductList from '../components/Products/ProductList'
import Newsletter from '../components/Newsletter'
import Title from '../components/Products/Title'
import Policy from '../components/Policy'
const home = () => {
  const filter={}
  return (
    <div>
          <Slider/>
        
       
        <Category/>
        
        <div className='flex flex-col gap-20 my-10'>
          <Title  title={"BEST SELLERS PRODUCTS"} desc={"Our Bestsellers, Your Must-Haves"} />
          <ProductList cat={"women"} filter={filter} sort={"new"} limit={4}/>
        </div>
       
        <Banner image={banner[0].img} title={banner[0].title} desc={banner[0].desc}/>
        <div className='flex flex-col gap-20 my-6'>
          <Title title={"FEATURED PRODUCTS"} desc={"Showcasing the Best: Elevate Your Style Today!"}/>
          <ProductList cat={"women"} filter={filter} sort={"new"} limit={4}/>
        </div>
       
        
    
        <Policy />
        <Newsletter />

    </div>
  )
}

export default home