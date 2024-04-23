// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  // Typically, the token is sent in the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
// console.log('Authentication : ' + token)
  if (token == null) {
    return res.sendStatus(401); // if there isn't any token
  }

  jwt.verify(token, "thisIsMySecretKey", (err, user) => {
    if (err) return res.sendStatus(403); // invalid token
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
};
