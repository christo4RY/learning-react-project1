import React from 'react'
import Skeleton from 'react-loading-skeleton'
const AddToCartSekleton = ({carts}) => {
  return (
    Array(carts).fill(0).map((_,i)=>
        <div className='flex items-center shadow justify-between  rounded mb-3' key={i}>
            <div className="flex p-3 gap-3">
                <Skeleton width={83} height={65} />
                <Skeleton count={3} width={100} height={17}/>
            </div>
            <div className="flex flex-col items-center px-3">
                <Skeleton width={30} count={3} height={17}/>
            </div>
        </div>
    )
  )
}

export default AddToCartSekleton
