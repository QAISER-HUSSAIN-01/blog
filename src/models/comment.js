import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    blogId:{type:mongoose.Schema.Types.ObjectId,required:true},
    comment:{type:String,required:true}
}
,
{
    timestamps:true
})

const Comment = mongoose.models.Comment || mongoose.model('Comment',commentSchema);
export default Comment;