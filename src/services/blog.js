import axios from "axios";

export const createBlog = async(data)=>{
    try{
        const res = await axios.post(`http://localhost:3000/api/blog`,data);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const getAllBlogs = async()=>{
    try{
        const res = await axios.get(`http://localhost:3000/api/blog`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const getBlog = async(id)=>{
    try{
        const res = await axios.get(`http://localhost:3000/api/blog/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}
export const updateBlog = async(id)=>{
    try{
        const res = await axios.patch(`http://localhost:3000/api/blog/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const deleteBlog = async(id)=>{
    try{
        const res = await axios.delete(`http://localhost:3000/api/blog/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}