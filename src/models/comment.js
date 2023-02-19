import mongoose from "mongoose";
import User from '../models/user'
const commentSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:User},
    // blogId:{type:mongoose.Schema.Types.ObjectId,required:true},
    comment:{type:String,required:true}
}
,
{
    timestamps:true
})

const Comment = mongoose.models.Comment || mongoose.model('Comment',commentSchema);
export default Comment;