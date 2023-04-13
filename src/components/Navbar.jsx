import React from 'react'
import {GrWorkshop} from "react-icons/gr"
import {TiShoppingCart} from "react-icons/ti"
import { useStateProducts } from '../hooks/useStateProducts'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const {state:{carts},search,setSearch} = useStateProducts();
  return (
    <div className='container mx-auto  p-2 px-5 mt-3 flex justify-between'>
    <Link to="/">
        <div className="flex items-center cursor-pointer">
            <GrWorkshop className='text-4xl mr-3'/>
            <h1 className='text-2xl font-bold uppercase'>
                <span className=' text-purple-700'>Go</span>
                <span className=' text-orange-700'>Shop</span>
            </h1>
        </div>
    </Link>
      <div className='flex items-center gap-3 justify-end'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className=' w-1/2 outline-none border-b border-b-purple-700'/>
        <Link to="/add-to-cart">
        <div className=' relative cursor-pointer' >
            <TiShoppingCart className=' text-3xl'/>
            <span className='w-5 h-5 rounded-[50%]  bg-purple-700 text-white text-sm text-center absolute top-[-40%] right-[-40%]'>{carts.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
