import jwt from 'jsonwebtoken';

export const generateJWT = (email,userData) =>{
   try {
   //  const tocken = jwt.sign({userEmail: email}, "thisIsMySecretKey", {expiresIn: "1h"});
   let payload = {};
   console.log(userData);
    if (userData.userType === 'admin') {
        payload = {
         userEmail: email,
            userType: 'admin',
            role: 'admin',
            permissions: ["read", "write", "delete"]
            // Add additional claims for admin if needed
            // For example: permissions, etc.
        };
    } else {
        payload = {
         userEmail: email,
            userType: 'user',
            role: 'user',
            permissions: ["read", "write", "delete"]
            // Add additional claims for user if needed
        };
      }


    const tocken = jwt.sign(payload, "thisIsMySecretKey", {expiresIn: "1h"});
    return tocken;
   } catch (error) {
    console.log(error );
    throw  error;
   }
}