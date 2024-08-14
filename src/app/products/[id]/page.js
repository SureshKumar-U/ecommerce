"use client"

import { useEffect } from "react"


const ProductbyId = ({params})=>{
   useEffect(()=>{
      fetch("/products").then(res=>res.json())
      .then(res=>console.log(res)).catch(err=>console.log(err))
   },[])
    
  
    return (
        <>
        <h1>{params.id}</h1>
        </>
    )
}
export default ProductbyId