import { login } from '../../src/controllers/login';
import db from '../../src/database/db';

export default async function handler(req, res) {
    await db.connect();
    await login(req,res);
}