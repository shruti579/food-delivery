import mongoose from "mongoose";

//schema
//A schema defines the structure of documents in a MongoDB collection.
const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String, required:true},
    category:{type:String,required:true}
})

//model
// MongoDB will create a collection named "foods" (Mongoose automatically pluralizes the name).
const foodModel = mongoose.models.food  || mongoose.model("food",foodSchema);

export default foodModel;