const { default: mongoose } = require("mongoose")

 const dbConnect = async ()=>{

        const connectionState = mongoose.connection.readyState
        if (connectionState == 1){
            console.log("db was already connected...")
            return 
        }
        if (connectionState == 2){
            console.log("db is still connecting...")
            return
        }
        try{
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("db connected")
        }
        catch(err){
            console.log(err)
        }

    

}

export default dbConnect

// 0: Disconnected – Mongoose is not currently connected to the MongoDB server.
// 1: Connected – Mongoose is connected to the MongoDB server and ready to perform database operations.
// 2: Connecting – Mongoose is in the process of establishing a connection to the MongoDB server.
// 3: Disconnecting – Mongoose is in the process of disconnecting from the MongoDB server.

