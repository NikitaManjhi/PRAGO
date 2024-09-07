import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Payment from './components/pay'
import { useSelector } from 'react-redux'


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
  {
    path: '/payment',
    element: <Payment/>
  }
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
