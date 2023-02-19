import axios from "axios";

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000':'https://blog-snowy-one-63.vercel.app';

export const createComment = async(data)=>{
    try{
        const res = await axios.post(`${URL}/api/comment`,data);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const getAllComments = async()=>{
    try{
        const res = await axios.get(`${URL}/api/comment`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const getBlog = async(id)=>{
    try{
        const res = await axios.get(`${URL}/api/comment/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}
export const updateComments = async(id)=>{
    try{
        const res = await axios.patch(`${URL}/api/comment/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const deleteComment = async(id)=>{
    try{
        const res = await axios.delete(`${URL}/api/comment/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}