import mongoose from "mongoose";
import Comment from './comment';
const blogSchema = mongoose.Schema({
    // userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    img:{type:String,required:true},
    title:{type:String,required:true},
    caption:{type:String,required:false},
    description:{type:String,required:true},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:Comment,required:false}],
    likes:[{type:mongoose.Schema.Types.ObjectId,required:false}],
}
,
{
    timestamps:true
})

const Blog = mongoose.models.Blog || mongoose.model('Blog',blogSchema);
export default Blog;