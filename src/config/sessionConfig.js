export const sessionOptions = {
cookieName :"user_auth",
password : process.env.sessionsecret,
cookieOptions:{
    http:true,
    secure : process.env.NODE_ENV == "development",  //false -->cookie enabled when http protocol
}                                                    //true ---> cookie enabled when https protocol
}