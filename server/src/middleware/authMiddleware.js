import jwt from 'jsonwebtoken'
import { prisma } from '../config/db.js'


export const authMidlleware = async (req, res, next)=>{

    
    let token;
    // check for auth token 
    
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    } else if (req.cookies?.jwt) {
        token = req.cookies.jwt
    };

    console.log(req.cookies)

    if (!token){
        return res.status(401).json({error: "Not authorized"})
    };

    try {
        // verify token and get userId
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: {
                id : decoded.id
            }
        });

        if (!user){
            return res.status(401).json({error: "User no longer exists"})
        };


        req.user = user;
        
        next();
    } catch (error) {
        return res.status(401).json({error: "Not authorized / token failed"})
    }

};