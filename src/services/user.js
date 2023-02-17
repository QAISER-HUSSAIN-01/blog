import axios from "axios";

export const createUser = async(data)=>{
    try{
        const res = await axios.post(`http://localhost:3000/api/user`,data);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const getAllUsers = async()=>{
    try{
        const res = await axios.get(`http://localhost:3000/api/user`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
}

export const getUser = async(id)=>{
    try{
        const res = await axios.get(`http://localhost:3000/api/user/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}
export const updateUser = async(id)=>{
    try{
        const res = await axios.patch(`http://localhost:3000/api/user/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}

export const deleteUser = async(id)=>{
    try{
        const res = await axios.delete(`http://localhost:3000/api/user/${id}`);
        return res.data;
    }catch(err){
        return err.response.data;
    }
   
}