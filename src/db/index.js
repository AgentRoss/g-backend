import mongoose  from "mongoose";
import {DB_NAME} from "../constents.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongoDB is connected !! DB HOST: ${connectionInstance.connection.host}`)

  } catch (error) {
    console.log("MONGODB connection error: ", error);
    throw error;
    
  }
}

export default connectDB