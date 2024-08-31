import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
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
