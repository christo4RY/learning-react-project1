import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductsSekleton = ({products}) => {
  return  Array(products).fill(0).map((_,i)=>
    <div className='w-44 md:w-1/5 p-3 pt-2' key={i}>
       <Skeleton  className='w-full  h-[120px] md:h-[150px]'  style={{margin:"0 0 .2rem 0"}}></Skeleton>
       <Skeleton count={2} height={20} style={{margin:".4rem 0"}}/>
       <Skeleton  height={35} style={{margin:".3rem 0"}}/>
    </div>
  )
}

export default ProductsSekleton
