import jwt from 'jsonwebtoken';

export const generateJWT = (email) =>{
   try {
    const tocken = jwt.sign({userEmail: email}, "thisIsMySecretKey", {expiresIn: "1h"});
    return tocken;
   } catch (error) {
    console.log(error );
    throw  error;
   }
}