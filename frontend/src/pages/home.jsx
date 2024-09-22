import React from 'react'
import Navbar from '../components/Header/Navbar'
import Slider from '../components/Slider'
import Category from '../components/Categories/Category'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { banner , bestsellers, newArrivals} from '../data'
import ProductList from '../components/Products/ProductList'
import Newsletter from '../components/Newsletter'
import Title from '../components/Title'
import Policy from '../components/Policy'
const Home = () => {
  const filter={}
  return (
    <div>
        <Slider/>
        <Category/>
        <div className='mb-20'>
        <ProductList cat={"women"} filter={filter} sort={"new"} title={"BEST SELLERS"} desc={"Our Bestsellers, Your Must-Haves"} limit={5}/>
        </div>
        <Banner image={banner[0].img} title={banner[0].title} desc={banner[0].desc}/>
        <div className='mt-20'>
        <ProductList cat={"women"} filter={filter} sort={"new"} limit={5} title={"NEW ARRIVALS"} desc={"Discover our latest collection with stylish designs and unmatched quality, just arrived to elevate your wardrobe!"}/>

        </div>
        <Policy />
        <Newsletter />

    </div>
  )
}

export default Home