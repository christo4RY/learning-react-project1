import React, { useEffect, useState } from 'react'
import { useStateProducts } from '../hooks/useStateProducts'

const AddToCartButton = ({product}) => {
    const {dispatch,state:{carts}} = useStateProducts();
    const [remove,setRemove] = useState(false)
    useEffect(()=>{
        const activeCarts = carts?.filter(cart=> cart.id == product.id)
        const active = activeCarts.find(i=> i.id == product.id)
        if(active){
            setRemove(true)
        }
    },[])
    const getOrder = () => {
        if(remove ){
            dispatch({type:"REMOVE_PRODUCT_FROM_CARTS",payload:product})
            setRemove(false)
        }else{
            dispatch({type:"ADD_TO_CART",payload:product})
            setRemove(true)
        }
      }
  return (
        <button onClick={getOrder} className={` ${remove ? ' bg-red-600 ' : ' bg-purple-700 '} w-full  text-white p-2  text-sm px-3  rounded-md    duration-300 `}>
            {remove ? "Remove" : "Add To Cart"}
        </button>
  )
}

export default AddToCartButton
