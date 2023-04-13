import React, { useEffect, useState } from 'react'
import { useStateProducts } from '../hooks/useStateProducts'
import Product from './Product';
import ProductsSekleton from './ProductsSekleton';
const Movies = () => {
    const {state:{products},isProductsLoading} = useStateProducts();

  return (
    <div className=" py-7 flex flex-wrap md:gap-7 gap-3 justify-center">
      {isProductsLoading && <ProductsSekleton products={12}/>}
      {
        products?.map((product)=>{
          return (
            <Product key={product.id} product={product}></Product>
          )
        })
      }
    </div>
  )
}

export default Movies
