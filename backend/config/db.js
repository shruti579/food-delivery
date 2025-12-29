import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

export const connectDB = async()=>{
    // await mongoose.connect(process.env.MONGO_URI)
    // .then(()=>console.log("db connected"));
     try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // stop server if DB fails
  }
}