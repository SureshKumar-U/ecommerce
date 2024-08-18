import React from 'react'
import {products} from "@/products" 
import Image from 'next/image'


const ProductsList = ({clickHandler }) => {
  console.log()
  return (
    <>
          {products?.map(product=>{
        return (
          <>

          



      <div className="p-1 bg-white shadow-2xl rounded-lg border border-slate-300  overflow-hidden">
        <Image src={product.image} height={100} width={80} alt="Product 1" className="mx-auto "/>
        <div className="p-2">
          <div className="text-md font-semibold">{product.name}</div>
          <p className="text-gray-600 mt-1">{product.price}</p>
          <button className="mt-1 text-sm w-full bg-yellow-400 text-slate py-1 rounded hover:bg-yellow-500" onClick={clickHandler}> Add to cart</button>
        </div>
      </div>
          </>
        )
      })}

    </>
  )
}

export default ProductsList