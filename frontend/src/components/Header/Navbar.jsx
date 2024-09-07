import React from 'react'
import { Link } from 'react-router-dom';
import { Badge, Button } from "@material-tailwind/react";
import { CiUser,CiSearch,CiHeart,CiShoppingCart,CiMenuBurger} from "react-icons/ci";
import {IconContext} from "react-icons"
import { useSelector } from 'react-redux';
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
  return (
    <div className='flex h-16 shadow-lg '>
        <div className='flex items-center justify-between mx-24 px-1 py-2 h-full w-full '>
            <div className='flex items-center gap-5 mx-10'>
                <div className=''><IconContext.Provider value={{ size :"25"}}><CiMenuBurger /></IconContext.Provider></div>
                <div className='text-3xl font-semibold tracking-wide'>PRAGO</div>
            </div>
            <div className='flex items-center  w-full'>
                <ul className='flex items-center gap-14  w-full  text-xl font-normal'>
                  
                    <Link to={"/"}>
                    <li>Home</li>
                    </Link>
                    <li>Shop</li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex items-center justify-center '>
                <ul className='flex items-center justify-center gap-5'>
                    <IconContext.Provider value={{size:"25"}}>
                    <li><CiUser/></li>
                    <li><CiSearch/></li>
                    <li><Badge content="0"><CiHeart/></Badge></li>
                    <Link to={"/cart"}>
                    <li><Badge content={quantity}><CiShoppingCart/></Badge></li>
                    </Link>
                  
                    </IconContext.Provider>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar