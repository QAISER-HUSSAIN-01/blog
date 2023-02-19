import { createComment, getAllComments } from '../../../src/controllers/comment';
import db from '../../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'POST':
            createComment(req, res);
            break;
        case 'GET':
            getAllComments(req,res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}