import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardArrowUp,MdOutlineKeyboardArrowDown} from "react-icons/md"
import { useStateProducts } from '../hooks/useStateProducts'
import Skeleton from 'react-loading-skeleton'

const Cart = ({product,increaseTotal,decreaseTotal}) => {
    const {dispatch} = useStateProducts()
    const [qty,setQty] = useState(1)


    const increseQty = () => {
        setQty(qty + 1)
        increaseTotal(product.price)
    }

    const decreaseQty = () => {
        if(qty > 1){
            setQty(qty - 1)
            decreaseTotal(product.price)
        } 
    }


    const delBtn = () => {
        dispatch({type:"REMOVE_CART",payload:product})
        decreaseTotal(price)
    }

    const price = product.price * qty;

  return (
    <div className=' shadow rounded mb-3 p-3 flex justify-between select-none'>
        <div className="flex gap-3">
            <img src={product.thumbnail} alt="" className=' w-20'/>
            <div>
                <h1 className='text-sm'>{product.title}</h1>
                <h3 className='text-sm'>Price: ${price}</h3>
                <h4 className='text-sm text-red-700 cursor-pointer' onClick={delBtn}>Remove</h4>
            </div>
        </div>
        <div className=' flex flex-col items-center'>
            <MdOutlineKeyboardArrowUp className=' text-2xl  cursor-pointer' onClick={increseQty}/>
            <p>{qty}</p>
            <MdOutlineKeyboardArrowDown className=' text-2xl  cursor-pointer' onClick={decreaseQty}/>
        </div>
    </div>
  )
}

export default Cart
