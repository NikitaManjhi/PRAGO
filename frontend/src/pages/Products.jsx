import React from 'react'
import { useState } from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductList from '../components/Products/ProductList'

const Products = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const category=location.pathname.split("/")[2];
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState("new");

    const handleFilter = (e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    }

 

  return (
    <div>
        <Navbar/>
        <div className='mx-28 flex-col justify-center'>
            <h1 className='text-center pt-10 text-3xl ' >{category.toUpperCase()}</h1>

            {/* Filter and sorting option */}
            <div className='flex justify-between'>
                <div className=''>
                <select name="color" id="" className='mr-6 border border-black p-1' onChange={handleFilter}>
                    <option value="">All</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
                    <option value="Yellow">Yellow</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                </select>
                <select name="size" id="" className='border border-black p-1' onChange={handleFilter}>
                    <option>All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                </div>
                <div>
                    
                    {/* Sorting */}
                <select name="" id="" className='border border-black p-1' onChange={e=>{setSort(e.target.value)}}>
                    <option>Sort By</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                    <option value="new">New</option>
                </select>
                </div>
        
            </div>

            {/* List of products */}
            <div className=''>
            <ProductList cat={category} filter={filters} sort={sort}/>
            </div>

        </div>
     
        <Newsletter/>
        <Footer/>
      
    </div>
  )
}

export default Products