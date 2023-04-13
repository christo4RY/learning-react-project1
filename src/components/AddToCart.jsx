import React, { useEffect, useState } from 'react'
import { useStateProducts } from '../hooks/useStateProducts'
import Cart from './Cart';
import AddToCartSekleton from './AddToCartSekleton';

const AddToCart = () => {
    const {state:{carts},dispatch} = useStateProducts();
    const [isAddToCartLoading,setIsAddToCartLoading] = useState(true)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect( () => {
        setTotalPrice(price)
        setTimeout(()=> setIsAddToCartLoading(false),2000)
    },[])

    const increaseTotal = (price) => {
        setTotalPrice(totalPrice + price)
    }

    const decreaseTotal = (price) => {
        setTotalPrice(totalPrice - price)
    }

    const price = carts?.reduce((pre,cur)=>pre+cur.price,0)
  return (
    <div className='container mx-auto mt-7 px-3 md:px-0'>
        {isAddToCartLoading ? <AddToCartSekleton carts={carts.length}/> :
            carts?.map(cart=>{
                return (
                    <Cart key={cart.id} product={cart} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal}></Cart>
                )
            })
        }
        <div className='flex p-3 justify-between'>
            <h1>Total:</h1>
            <h1>${isAddToCartLoading == false && totalPrice}</h1>
        </div>
        <div className='flex justify-center'>
            <button onClick={()=> {
                dispatch({type:"REMOVE_ALL_CARTS"}) 
                setTotalPrice(0)
            }} className="p-1 md:p-2 text-red-700 border-2 border-red-700 rounded-md">
                Remove Carts
            </button>
        </div>
    </div>
  )
}

export default AddToCart
