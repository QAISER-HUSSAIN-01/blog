import Blog from "../models/blog";

export const createBlog = async (req, res) => {
    const { title,description } = req.body;
    if (!title || !description ) { return res.status(404).json({ status: false, message: 'please fill all fields' }) }
    const isExist = await Blog.findOne({ email: email });
    if (isExist) { return res.status(302).json({ status: false, message: 'user already exist with this email' }) }
    try {
        const created = await User.create(req.body);
        if (!created) {return res.status(400).json({ status: false, message: 'user not created something went wrong'}) }
        return res.status(201).json({ status: true, message: 'user created', data: created });
    } catch(err){ res.status(500).json({ status: false, message: 'something went wrong while creating user' }) }
}

export const getAllBlogs = async (req, res) => {
    try {
        const users = await Blog.find();
        if (!users) { return res.status(404).json({ status: false, message: 'users not found' }) }
        return res.status(200).json({ status: true, message: 'users fetched', data: users });
    } catch (err) { res.status(500).json({ status: false, message: err }) }
}

export const getBlog = async (req, res) => {
    const { id } = req.query;
    try {
        const user = await Blog.findById(id);
        if (!user) { return res.status(404).json({ status: false, message: 'user not found' }) }
        return res.status(200).json({ status: true, message: 'user found', data: user });
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
        const user = await Blog.findByIdAndUpdate(id,req.body,{new:true});
        if (!user) { return res.status(404).json({ status: false, message: 'user not updated' }) }
        return res.status(200).json({ status: true, message: 'user updated', data: user });
    } catch (err) { res.status(500).json({ status: false, message: err.name }) }
}