import React from 'react'
import {products} from "@/products" 
import Image from 'next/image'

const ProductsList = ({products,clickHandler,cartItems }) => {


  return (
    <>
          {products?.map(product=>{
        return (
          <>
  <div className="p-1 mx-auto min-h-[250px] w-[200px] bg-white shadow-2xl rounded-lg border border-slate-300 flex flex-col">
  <Image
    src={product.image}
    height={500}
    width={70}
    alt="Product 1"
    className="!h-[100px] mx-auto"
  />
  <div className="p-2 mt-2 flex-grow">
    <div className="text-xs">{product.title}</div>
    <p className="text-gray-600 text-sm mt-1">{product.price}</p>
  </div>
  <div className="p-2 mt-auto">
    {cartItems.find(item=> item.id == product.id ) ? <button
      className="mt-1 text-sm w-full bg-yellow-400 text-slate py-1 rounded hover:bg-yellow-500"
      onClick={()=>{clickHandler(product)}}>
  Go to cart
    </button> : <button
      className="mt-1 text-sm w-full bg-yellow-400 text-slate py-1 rounded hover:bg-yellow-500"
      onClick={()=>{clickHandler(product)}}
    >
      Add to cart
    </button>}
  </div>
</div>

          </>
        )
      })}

    </>
  )
}

export default ProductsList