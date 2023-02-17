import { createUser, getAllUsers } from '../../../src/controllers/user';
import db from '../../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'POST':
            createUser(req, res);
            break;
        case 'GET':
            getAllUsers(req,res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}