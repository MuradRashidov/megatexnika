import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
     type:String,
     //required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true});

const User = models.User || mongoose.model("User",userSchema);
export default User;

