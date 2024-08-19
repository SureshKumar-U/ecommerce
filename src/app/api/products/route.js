import { NextResponse } from "next/server"
import dbConnect from "@/config/dbconfig"







export const GET = (request)=>{  //getting all products
    console.log("hello")
    dbConnect()
    return NextResponse.json({status:"products fectched successfully"})

}

export const POST = (request)=>{
    dbConnect()
    return NextResponse.json({status:"product added successfully"})
}

export const DELETE = (request)=>{
    dbConnect()
    return NextResponse.json({status:"product deleted successfully"})
}

export const PUT = (request)=>{
    dbConnect()
    return NextResponse.json({status:"Product updated successfully"})
}