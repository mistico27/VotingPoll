import jwt from 'jsonwebtoken'
const TOKEN_SECRET="somethingInMyToken";

export const authRequired = (req,res,next)=>{
    const {token} =req.cookies;
    if(!token)
        return res.status(401).json(["no token authorization denied"]);
    
    jwt.verify(token,TOKEN_SECRET,(error,user)=>{
        if(error) return res.status(403).json(["Invalid Token"]);
        req.user = user;
        next();
    })

};