import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    img:{type:String,required:false},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    blogs:[{type:String,required:false,ref:'Blog'}]
}
,
{
    timestamps:true
})

const User = mongoose.models.User || mongoose.model('User',userSchema);
export default User;