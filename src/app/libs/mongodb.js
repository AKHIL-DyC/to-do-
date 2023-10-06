import mongoose from "mongoose";

const connectMongoseDB=async()=>{
    try
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected succesfully")
    }
    catch(error){
        console.log(error)

    }

};
export default connectMongoseDB;