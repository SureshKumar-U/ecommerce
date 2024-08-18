"use client"
import Image from "next/image"
import cartItemsdata from "@/cartItems"
import CartItem from "@/components/CartItem"
import React from "react"
import { useRouter } from "next/navigation"
const Cartpage = () => {


    return (
        <>
            <h1 className="text-center">welcome to the cart page</h1>
            <div className="max-w-6xl mx-auto px-4 py-8">

   
                <header className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
                </header>

                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* <!-- Cart Items --> */}
                    <div className="space-y-4">
                        {/* <!-- Cart Item --> */}

                  { cartItemsdata.length ?  cartItemsdata.map(item=>{
                    return (
                         <CartItem itemName ={item.name} itemPrice = {item.price}/>
                    )
                  }):<>No data found</>}
                        
      
              
 
                
                        {/* <!-- End of Cart Items --> */}
                    </div>

                    {/* <!-- Cart Summary --> */}
                    <div className="mt-6 border-t border-gray-200 pt-6 flex justify-between items-center">
                        <div className="text-gray-800 font-semibold">Total:</div>
                        <div className="text-2xl font-bold text-gray-800">$40.00</div>
                    </div>

                    {/* <!-- Checkout Button --> */}
                    <div className="mt-6 flex justify-end">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cartpage