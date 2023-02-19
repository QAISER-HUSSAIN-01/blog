import { decode, verify, } from 'jsonwebtoken';
import Comment from "../models/comment";
import Blog from "../models/blog";
import User from '../models/user';
export const createComment = async (req, res) => {
    const { cookies } = req;
    if (!cookies.token) { return res.status(404).json({ status: false, message: 'please login first', url:'/login' }) }
    const { id, comment } = req.body;
    if (!id || !comment) { return res.status(404).json({ status: false, message: 'please write what is in your mind!' }) }
    try {
        console.log('try block start');
        const verifiedUser = await verify(cookies.token, process.env.SECRET);
        const created = await Comment.create({
            userId: verifiedUser.id,
            comment: comment
        })
        if (!created) { return res.status(400).json({ status: false, message: 'comment not created due to some errors' }) }
        const blogUpdated = await Blog.findByIdAndUpdate(id, {
            $push: { comments: created._id }
        }, { new: true })
        if (!blogUpdated) { return res.status(400).json({ status: false, message: 'comment created, blog updation failed ' }) }
        console.log(blogUpdated);
        return res.status(201).json({ status: true, message: 'blog created', data: created });
    } catch (err) { res.status(500).json({ status: false, message: 'make sure you are logged in?' }) }
}


export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        if (!comments) { return res.status(404).json({ status: false, message: 'comments not found' }) }
        return res.status(200).json({ status: true, message: 'comments fetched', data: comments });
    } catch (err) { res.status(500).json({ status: false, message: 'something went wrong , comments not found' }) }
}

export const getBlog = async (req, res) => {
    const { id } = req.query;
    try {
        const blog = await Blog.findById(id);
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