import express from 'express';
import {register, login, imageUpload , getImage, getUser ,allUsers,deleteuser,update,getuser} from "../controllers/controllers.js"

const route = express.Router();

route.post("/login" , login);
route.post("/register" , register);
route.post("/imageUpload", imageUpload)
route.post("/getImage", getImage)
route.post("/getUser", getUser)
route.get("/allUsers", allUsers)
route.get("/getuser/:id", getuser)
route.post("/update/:id", update)
route.delete("/deleteuser/:id", deleteuser)

export default route;