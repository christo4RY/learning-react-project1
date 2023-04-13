import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import AddToCart from './components/AddToCart'
import { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <SkeletonTheme baseColor="#ededed" highlightColor="#cccccc">
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/add-to-cart' element={<AddToCart/>}></Route>
        </Routes>
      </SkeletonTheme>
    </>
  )
}

export default App
