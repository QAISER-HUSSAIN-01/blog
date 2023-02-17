import User from "../models/user";
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken';

export const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){return res.status(400).json({status:false,message:'please fill all fields',data:[]})}
    try {
        const exist = await User.findOne({email:email});
        if(!exist){return res.status(404).json({status:false,message:'please signup first',data:[]})}
        const comparePassword = await compare(password,exist.password);
        if(!comparePassword){return res.status(404).json({status:false,message:'email or password wrong',data:[]})}
        const token = await sign({email},'shakalakaboomboom');
        return res.status(200).json({status:true,message:'successfully logged in',data:token});
    } catch (error) {
        res.status(500).json({status:false,message:'500 internal error',data:[]})
    }
}