import user from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createAccessToken from '../handlers/jwt.js';

export const RegisterMyUser = async(req,res)=>{
    try{
        const {password,username} =req.body;
        const userFoundII =await user.findOne({username});
        if(userFoundII){
            return res.status(400).json(
            ['The username already exists'],
            )
        }
        ///hashing password
        const passwordHash =await bcrypt.hash(password,15);
    
        const newUser= new user({
            username,
            password:passwordHash,
        });
    
     const userSaved= await newUser.save();
     ///creation of the token
     const token =await createAccessToken({id:userSaved._id,});
    
     res.cookie('token',token,{
        secure:true,
        sameSite:"none",
     });
      res.status(200).json(
        {
        id:userSaved.id,
        username:userSaved.username,
        createdAt:userSaved.createdAt,
        updatedAt:userSaved.updatedAt,
        });
    
    }catch(error){
        res.status(500).json({message:error.message});
    }
    
}