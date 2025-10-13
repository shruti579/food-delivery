// mongodb+srv://delivery:f09oo#d@cluster0.wgtskmg.mongodb.net/?
import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://delivery:f09ood@cluster0.wgtskmg.mongodb.net/food-del')
    .then(()=>console.log("db connected"));
}