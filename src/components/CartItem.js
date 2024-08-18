"use client"
import React from "react"
import Image from "next/image"


const CartItem = ({itemName, itemPrice}) => {


    return (

        <>
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
                <div className="flex items-center">
                    <Image src="/mobiles.jpg" alt="Product Image" height={24} width={24} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{itemName}</h2>
                        <p className="text-gray-600">{itemPrice}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <input type="number" min="1" className="w-16 border rounded-md text-center" />
                    <button className="ml-4 text-red-500 hover:text-red-700">Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem