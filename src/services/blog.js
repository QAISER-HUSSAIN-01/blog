import axios from "axios";
const URL = process.env.NODE_ENV === 'development' ? 'https://blog-snowy-one-63.vercel.app':'http://localhost:3000'

export const createBlog = async(data)=>{
    try{
        const res = await axios.post(`${URL}/api/blog`,data);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const getAllBlogs = async()=>{
    try{
        const res = await axios.get(`${URL}/api/blog`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const getBlog = async(id)=>{
    try{
        const res = await axios.get(`${URL}/api/blog/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}
export const updateBlog = async(id)=>{
    try{
        const res = await axios.patch(`${URL}/api/blog/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const deleteBlog = async(id)=>{
    try{
        const res = await axios.delete(`${URL}/api/blog/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}