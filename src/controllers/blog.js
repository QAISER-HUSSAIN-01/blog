import Blog from "../models/blog";
import { verify } from 'jsonwebtoken';
import Comment from '../models/comment';
import User from "../models/user";

export const createBlog = async (req, res) => {
    const { cookies } = req;
    if (!cookies.token) { return res.status(404).json({ status: false, message: 'not authorized' }) }
    const { img, title, caption, description } = req.body;
    if (!img || !title || !caption || !description) { return res.status(404).json({ status: false, message: 'please fill all fields' }) }
    try {
        console.log('try block start');
        const verifiedUser = await verify(cookies.token, process.env.SECRET);
        const created = await Blog.create({
            userId: verifiedUser.id,
            img: img,
            title: title,
            caption: caption,
            description: description
        })
        if (!created) { return res.status(400).json({ status: false, message: 'blog not created due to some error' }) }
        return res.status(201).json({ status: true, message: 'blog created', data: created });
    } catch (err) { res.status(500).json({ status: false, message: 'not authorized' }) }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        if (!blogs) { return res.status(404).json({ status: false, message: 'blogs not found' }) }
        return res.status(200).json({ status: true, message: 'blogs fetched', data: blogs });
    } catch (err) { res.status(500).json({ status: false, message: 'something went wrong , blogs not found' }) }
}

export const getBlog = async (req, res) => {
    const { id } = req.query;
    try {
        const blog = await Blog.findById(id).populate({ path: 'comments', model: Comment, populate:{path:'userId',select:['name','email'],model:User}})
        if (!blog) { return res.status(404).json({ status: false, message: 'blog not found' }) }
        return res.status(200).json({ status: true, message: 'user found', data: blog });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}

export const deleteBlog = async (req, res) => {
    const { id } = req.query;
    try {
        const user = await Blog.findByIdAndDelete(id);
        if (!user) { return res.status(404).json({ status: false, message: 'user not deleted' }) }
        return res.status(200).json({ status: true, message: 'user deleted', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}

export const updateBlog = async (req, res) => {
    const { id } = req.query;
    try {
        console.log(req.body);
        const user = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) { return res.status(404).json({ status: false, message: 'user not updated' }) }
        return res.status(200).json({ status: true, message: 'user updated', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}