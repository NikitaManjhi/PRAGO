import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/products',
    element: <Products/>
  },
  {
    path: '/product',
    element: <SingleProduct/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/cart',
    element: <Cart/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
