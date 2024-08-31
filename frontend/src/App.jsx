import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Products from './pages/Products'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/product',
    element: <Products/>
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
