import { createBlog, getAllBlogs } from '../../../src/controllers/blog';
import db from '../../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'POST':
            createBlog(req, res);
            break;
        case 'GET':
            getAllBlogs(req,res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}