import { NextResponse } from "next/server"
import userModel from "@/models/usersModel"
import bcrypt from "bcryptjs"
import * as jose from 'jose'
import { createSession } from "@/libs/auth"


export const POST = async(request)=>{
    try{
    const body = await request.json()  
    const {email,password} = body
    if(!email || !password){
        return NextResponse(JSON.stringify({status:400, message:"All fields are madatory"}))
    }
    const user = await userModel.findOne({email:email})
    if(!user){
        return new NextResponse({status:400, message:"Invalid email"})
    }
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