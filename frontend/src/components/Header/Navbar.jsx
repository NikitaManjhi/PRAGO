import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { displaySearchBar } from "../../Redux/slice/search";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/slice/user"; // Import logout action

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const { search, showSearch } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser); // Access current user
  const navigate = useNavigate(); // Initialize useNavigate
console.log(user);
  const handleClick = () => {
    dispatch(displaySearchBar());
    console.log(showSearch);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between py-5 font-medium px-6">
        <Link to={'/'}><h1 className="text-3xl">PRAGO</h1></Link>

        {/* Desktop Nav Links */}
        <div className="flex-grow flex justify-center">
          <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
            <NavLink to="/" className="flex flex-col items-center gap-1">
              <p className="text-lg">Home</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/products" className="flex flex-col items-center gap-1">
              <p className="text-lg">Collections</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p className="text-lg">About</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p className="text-lg">Contact</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 cursor-pointer"
            onClick={handleClick}
          />
          <div className="group relative">
            <Link to={"/login"}>
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-5 cursor-pointer"
              />
            </Link>

            <div className="group-hover:block hidden absolute dropdown-menu right-0 p-4 bg-gray-100">
              {/* <div className="flex flex-col gap-2 w-36 p-2 bg-slate-100 text-gray-500 rounded"> */}
                {/* <p className="cursor-pointer hover:text-black">My Profile</p>
                <hr />
                <p className="cursor-pointer hover:text-black">Orders</p>
                <hr /> */}
                <p className="cursor-pointer hover:text-black" onClick={handleLogout}>Logout</p> {/* Logout option */}
              {/* </div> */}
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="Cart" className="w-5 min-w-5" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {quantity}
            </p>
          </Link>

          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-5 cursor-pointer sm:hidden"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-800">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
            <p>BACK</p>
          </div>
          <NavLink to="/" className="py-2 pl-6 border">
            HOME
          </NavLink>
          <NavLink to="/products" className="py-2 pl-6 border">
            COLLECTIONS
          </NavLink>
          <NavLink to="/about" className="py-2 pl-6 border">
            ABOUT
          </NavLink>
          <NavLink to="/contact" className="py-2 pl-6 border">
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
