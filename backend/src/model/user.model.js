import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:String,
    password: String,
    name:String,
    isAdmin:Boolean
},
{
    timestamps:true
})

export default mongoose.model('User',userSchema)