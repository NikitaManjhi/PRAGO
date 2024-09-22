import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearchBar } from '../Redux/slice/search';

const SearchBar = () => {
    const {search,showSearch}= useSelector(state=> state.search);
    const [searchValue,setSearchValue]=useState("");
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(closeSearchBar());
    }


   
  return showSearch?(
    <div>
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
                <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm ' value={search} onChange={(e)=>{setSearchValue(e.target.value)}}/>
                <img src={assets.search_icon} alt="" className='w-4'/>
            </div>
            <img src={assets.cross_icon} alt="" className='inline w-3 cursor-pointer' onClick={handleClick}/>
        </div>
    </div>
  ): null
}

export default SearchBar