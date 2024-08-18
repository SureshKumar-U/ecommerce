"use client"

import Image from "next/image"
import ProductsList from "@/components/ProductsList"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"
const page = () => {

  const router = useRouter()

  const clickHandler = ()=>{

  // add the item in local storage 
  //and update the cart context
   //navigate the user to the cart page

   router.push("/cart")
  }


  return (
    <div className="container mx-auto px-10 mt-6 border-box" >
    <div className="grid gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    <ProductsList clickHandler={clickHandler}/>
      
    </div>
  </div>
  )
}

export default page