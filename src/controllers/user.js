import User from "../models/user";
import {hash,compare} from 'bcrypt';
// import {serialize}from 'cookie';
import {sign} from 'jsonwebtoken'

export const login = async (req,res)=>{
    const {email,password} = req.body;
    console.log('header cookie',req.cookies.token);
    if (!email || !password) { return res.status(404).json({ status: false, message: 'please fill al fields' }) }
    try{
        const isExist = await User.findOne({email:email});

        if(!isExist){return res.status(302).json({ status: false, message: 'email and password is incorrect' })}
        const passwordCompared = await compare(password,isExist.password);
        if(!passwordCompared){return res.status(404).json({ status: false, message: 'email and password is incorrect' })}
        const token = await sign({id:isExist._id,email:email,name:isExist.name},process.env.SECRET,{expiresIn:'10h'});
        
        // const serialized = serialize("token",token, {
        //     httpOnly:true,
        //     secure:process.env.NODE_ENV !== "development",
        //     sameSite:"strict",
        //     maxAge: 60 * 60 * 24 * 30,
        //     path:'/'    
        // });
        // res.setHeader('Set-Cookie',serialized);
        // console.log('cookie set success',serialized);

        return res.status(201).json({ status: true, message: 'user created', data: {token:token,user:isExist} });
    }
    catch(e){
        return res.status(500).json({ status: false, message: 'credentials failed', data: [] });
    }
}


export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) { return res.status(404).json({ status: false, message: 'please fill all fields' }) }
    const isExist = await User.findOne({ email: email });
    if (isExist) { return res.status(302).json({ status: false, message: 'user already exist with this email' }) }
    try {
        const hashed = await hash(password,10);
        const created = await User.create({name:name,email:email,password:hashed});
        if (!created) {return res.status(400).json({ status: false, message: 'user not created something went wrong'}) }
        return res.status(201).json({ status: true, message: 'user created', data: created });
    } catch(err){ res.status(500).json({ status: false, message: 'something went wrong while creating user' }) }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) { return res.status(404).json({ status: false, message: 'users not found' }) }
        return res.status(200).json({ status: true, message: 'users fetched', data: users });
    } catch (err) { res.status(500).json({ status: false, message: err }) }
}

export const getUser = async (req, res) => {
    const { id } = req.query;
    try {
        const user = await User.findById(id);
        if (!user) { return res.status(404).json({ status: false, message: 'user not found' }) }
        return res.status(200).json({ status: true, message: 'user found', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}


export const deleteUser = async (req, res) => {
    const { id } = req.query;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) { return res.status(404).json({ status: false, message: 'user not deleted' }) }
        return res.status(200).json({ status: true, message: 'user deleted', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}

export const updateUser = async (req, res) => {
    const { id } = req.query;
    try {
        console.log(req.body);
        const user = await User.findByIdAndUpdate(id,req.body,{new:true});
        if (!user) { return res.status(404).json({ status: false, message: 'user not updated' }) }
        return res.status(200).json({ status: true, message: 'user updated', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}