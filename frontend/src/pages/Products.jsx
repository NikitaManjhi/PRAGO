import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ProductList from '../components/Products/ProductList';
import { assets } from '../assets/assets';

const Products = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [showFilters, setShowFilters] = useState(false);
    const [sort, setSort] = useState("new");

    const handleFilter = (e) => {
        const value = e.target.value;
        const name=e.target.name;
        if(e.target.checked){
            setFilters({
                ...filters,
                [name]: value,
            });
        }
        else{
            const { [name]: removedFilter, ...remainingFilters } = filters;
            setFilters(remainingFilters);
        }
      
    };

    const handleSort = (e) => {
        setSort(e.target.value);
    };

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            
            {/* Filter Options */}
            <div className='min-w-60'>           
             
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img 
                        src={assets.dropdown_icon} 
                        alt=""  
                        className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`} 
                        onClick={() => setShowFilters(!showFilters)} 
                    />
                </p>
                
                {/* Color Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>COLOR</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"Red"}  onChange={handleFilter} name='color'/> Red
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"Blue"} onChange={handleFilter} name='color'/> Blue
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"Black"} onChange={handleFilter} name='color'/> Black
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"White"} onChange={handleFilter} name='color'/> White
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"Yellow"} onChange={handleFilter} name='color'/> Yellow
                        </p>
                    </div>
                </div>

                {/* Size Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? "" : "hidden"} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>SIZE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"XS"} onChange={handleFilter} name='size'/> XS
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"S"} onChange={handleFilter} name='size'/> S
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"M"} onChange={handleFilter} name='size'/> M
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"L"} onChange={handleFilter} name='size'/> L
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={"XL"} onChange={handleFilter} name='size'/> XL
                        </p>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className='flex-1'>
                  {/* Sorting Dropdown */}

            <div className='flex  justify-end'>
                        <select name="sort" className='border border-black p-1' onChange={handleSort}>
                            <option value="new">Sort By</option>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                            <option value="new">Newest</option>
                        </select>
                    </div>
                {/* Product List */}
                <ProductList cat={category} filter={filters} sort={sort} title={category?.toUpperCase()} />
            </div>
        </div>
    );
};

export default Products;
