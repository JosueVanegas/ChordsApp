import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../config.js';

const verifyToken = async (req, res, next) => {
    try {
        const {token} = req.cookies;
        if(!token) return res.status(400).json('NO AUTHORIZATION');
        const user = await new Promise((resolve,reject)=>{
            jwt.verify(token,JWT_KEY,(err,encoded)=>{
                if(err) reject(err);
                resolve(encoded)
            })
        })
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default verifyToken;
