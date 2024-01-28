import jwt from 'jsonwebtoken';
const TOKEN_SECRET= 'sometokenthatiuse';

function createAccessToken(payload){
   return new Promise((resolve,reject)=>{
        jwt.sign(
            payload
         ,TOKEN_SECRET,
         {expiresIn:"1d",
         },
         (error,token)=>{
          if(error) reject(error)
          resolve(token)  
         }
         );
    });      
}

export default createAccessToken;