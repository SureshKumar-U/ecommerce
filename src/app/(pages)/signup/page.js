'use client'

import React from "react"
import Link from "next/link"

const Signup = () => {

    return (
        <section className="bg-white ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
                <h1 className="text-center text-2xl text-black mb-2">
                    create your account
                </h1>
                <div className="w-full border border-gray-300 text-black bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" name="email" id="email" className="border border-gray-300  rounded-lg focus:border-blue-500  focus:outline-none block w-full p-2.5" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter password" className=" border border-gray-300  rounded-lg focus:border-blue-500  focus:outline-none block w-full p-2.5" />
                            </div>
                        
                            <button type="submit" className="w-full text-white bg-blue-900 hover:bg-yellow-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>   
                                                     <p className="text-sm font-light ">
                                Already have an account? <Link href="/login" className="font-medium text-blue-600 hover:underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup