import { login } from '../../src/controllers/user';
import db from '../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    return await login(req,res);
}