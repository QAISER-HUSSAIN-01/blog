import axios from "axios";

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000':'https://blog-snowy-one-63.vercel.app';

export const loginUser = async(data)=>{
    try{
        const res = await axios.post(`${URL}/api/login`,data);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}


export const createUser = async(data)=>{
    try{
        const res = await axios.post(`${URL}/api/user`,data);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const getAllUsers = async()=>{
    try{
        const res = await axios.get(`${URL}/api/user`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const getUser = async(id)=>{
    try{
        const res = await axios.get(`${URL}/api/user/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}
export const updateUser = async(id)=>{
    try{
        const res = await axios.patch(`${URL}/api/user/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const deleteUser = async(id)=>{
    try{
        const res = await axios.delete(`${URL}/api/user/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}