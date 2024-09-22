import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate,Route, Routes} from 'react-router-dom'
import './App.css'
import PlaceOrders from './pages/PlaceOrders.jsx'
import Home from './pages/home.jsx'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Header/Navbar'
import Cart from './pages/Cart'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import SearchBar from './components/SearchBar.jsx'
function App() {
  
const user = useSelector((state)=> state.user.currentUser);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/products/:category',
    element: <Products/>
  },
  {
    path: '/product/:id',
    element: <SingleProduct/>
  },
  {
    path: '/login',
    element: user? <Navigate to="/"/> : <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/cart',
    element: <Cart/>
  },

])

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar/>
    <SearchBar />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:category' element={ <Products/>}/>
        <Route path='/products' element={ <Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/orders' element={<Orders/>}/> */}
        <Route path='/place-order' element={<PlaceOrders/>}/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App
