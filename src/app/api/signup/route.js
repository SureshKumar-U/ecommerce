
import {NextResponse} from "next/server"
import userModel from "@/models/usersModel"
import dbConnect from "@/config/dbconfig"
import bcrypt from "bcryptjs"
export const POST = async(request)=>{
    dbConnect()

    try{
        const body = await request.json()
        const {email, password} = body
        //validate the email and password
         if(!email || !password){
            return new NextResponse(JSON.stringify({status:"400", message:"All fields are mandatory"}))
         }
        //check if email already exists or not
        const user = await userModel.findOne({email:email})
        if(user){
            return new NextResponse(JSON.stringify({status:"400", message:"User already existed"}))
        }
        //create user,if user was not exists
        const hashpassword = bcrypt.hashSync(password, 10)
        await userModel.create({email:email,password:hashpassword})
        return NextResponse.json({status:200,message:"user created successfully"})

    }catch(err){
        return new NextResponse(JSON.stringify({status:"500", message:err.message}))
    }
}