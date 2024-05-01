import express from 'express';
import {register, login, imageUpload , getImage, getUser ,allUsers,deleteuser,update,getuser, search} from "../controllers/controllers.js"
import { authenticateToken } from '../authenticateToken.js';
import { loginValidationRules, registerValidationRules } from '../validators.js';

const route = express.Router();

route.post("/login" , loginValidationRules() , login);
route.post("/register" ,registerValidationRules(), register);
route.post("/imageUpload", imageUpload)
route.post("/getImage", getImage)
route.post("/getUser",authenticateToken, getUser)
route.get("/allUsers", allUsers)
route.get("/getuser/:id", authenticateToken, getuser)
route.post("/update/:id", authenticateToken, update)
route.delete("/deleteuser/:id", deleteuser)
route.get("/search" , search )

export default route;