import { NextResponse } from "next/server"
import userModel from "@/models/usersModel"
import bcrypt from "bcryptjs"
import * as jose from 'jose'
import { createSession } from "@/libs/auth"
import dbConnect from "@/config/dbconfig"


export const POST = async(request)=>{
    try{
        dbConnect()
    const body = await request.json()  
    const {email,password} = body
    if(!email || !password){
        return NextResponse.json({status:400, message:"All fields are madatory"})
    }
    const user = await userModel.findOne({email:email})
    if(!user){
        return NextResponse.json({status:400, message:"Invalid email"})
    }
    console.log(password)
    console.log(user.password)
    const match =  bcrypt.compareSync(password,user.password)
    if(!match){
        return  NextResponse.json({status:400, message: "Invalid password"})
    }
    // create a session
    await createSession(email)
    return NextResponse.json({status:"200", message:"Login successfull"})
    }
    catch(err){
        return NextResponse.json({status:"500", message:err.message})
    }

    

    



}