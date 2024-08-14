import { NextResponse } from "next/server"
import dbConnect from "@/config/dbconfig"



export const GET = (request)=>{
    console.log("hello")
    dbConnect()
    return NextResponse.json({status:"products fectched successfully"})

}