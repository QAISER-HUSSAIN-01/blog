import { getBlog, deleteBlog,updateBlog } from '../../../src/controllers/user';
import db from '../../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'DELETE':
            deleteBlog(req, res);
            break;
        case 'PATCH':
            updateBlog(req, res);
            break;
        case 'GET':
            getBlog(req, res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}