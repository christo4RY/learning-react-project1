import React from 'react'
import AddToCartButton from './AddToCartButton'

const Product = ({product}) => {
 
  return (
    <div className=' w-44 md:w-1/5 p-3  rounded shadow'>
        <img src={product.thumbnail} alt="" className=' h-[120px] md:h-[150px]' />
        <h1 className='my-2'>{product.title.slice(0,12)+"..."}</h1>
        <h3>Price: ${product.price}</h3>
        <div className='flex md:flex-row flex-col gap-2 md:gap-7 mb-0 mt-3'>
            <AddToCartButton product={product}/>
        </div>
    </div>
  )
}

export default Product
