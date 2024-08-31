import React from 'react'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductList from '../components/Products/ProductList'
import { womenwear } from '../data'
import Button from '../components/Button'
const Products = () => {
  return (
    <div>
        <Navbar/>
        <div className='mx-28 flex-col justify-center'>
            <h1 className='text-center pt-10 text-3xl ' >WOMEN WEAR</h1>
            {/* Filter and sorting option */}
            <div className='flex justify-between'>
                <select name="Filter" id="" defaultValue={"Filter"}>
                    <option disabled selected>Filter</option>
                    <option value="">Color</option>
                    <option value="">Size</option>
                    <option value="">Fit</option>
                </select>
                <select name="" id="">
                    <option disabled selected>Sort By</option>
                    <option value="">Price: Low to High</option>
                    <option value="">Price: High to Low</option>
                    <option value="">Popular</option>
                    <option value="">New</option>
                </select>
            </div>

            {/* List of products */}
            <div className=''>
            <ProductList product={womenwear}/>
            </div>

        </div>
     
        <Newsletter/>
        <Footer/>
      
    </div>
  )
}

export default Products