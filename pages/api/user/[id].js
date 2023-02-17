import { getUser, deleteUser,updateUser } from '../../../src/controllers/user';
import db from '../../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    const { method } = req;
    switch (method) {
        case 'DELETE':
            deleteUser(req, res);
            break;
        case 'PATCH':
            updateUser(req, res);
            break;
        case 'GET':
            getUser(req, res);
            break;
        default:
            res.send({ status: false, message: 'wrong request' });
            break;
    }
}