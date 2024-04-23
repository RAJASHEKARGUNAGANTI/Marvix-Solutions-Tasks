import User from "../models/model.js"
import ImageSchema from "../models/imageModel.js";
import bcrypt from 'bcrypt'
import { generateJWT } from "../auth.js";
// import { validationResult } from 'express-validator';
import {validationResult} from 'express-validator';

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Fill all fields properly");
            return res.status(400).json({ errors: errors.array() });
        }

        const {firstName, lastName, email, password ,userType } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            // console.log("Already registered");
            return res.status(403).json({error: 'User already registered'});
        }
        else{
            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = new User({firstName,lastName,email,password:hashedPassword ,userType});
            await newUser.save().then(() =>{
                // console.log(newUser);
                const jwtTocken = generateJWT(email,newUser-{password});
                res.status(200).json({message: "User successfully Registerd" , jwtTocken})
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Please try again later"});
    }
}

export const login = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Fill all fields properly");
            return res.status(400).json({ errors: errors.array() });
        }

        const {email, password} = req.body;
        // console.log(email, password);
        const regUser = await User.findOne({email});
        if(!regUser){
            console.log("Invalid email")
            return res.status(404).json({message: "invalid Email"});
        }
        const validUser = await bcrypt.compare(password, regUser.password);
        if(validUser){
            console.log("Login Successfull")
            // const jwtTocken = generateJWT(email);
            const jwtTocken = generateJWT(email,regUser-{password});
            return res.status(200).json({message:"Login Successfully",jwtTocken});
        }
    } catch (error) {
        console.log("Login Failure");
        res.status(500).json({error: "Invalid Credentials"});
    }
}

export const imageUpload = async (req, res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log("Image Does not Selected");
            return res.status(404).json({ errors: errors.array() });
        }
        const {email, image} = req.body;
        const userExists = await ImageSchema.findOne({email});
        if(!userExists){
            const newImage = await ImageSchema({email, image})
            await newImage.save();
            return res.status(200).json({message:"Image Saved Successfully"});
        }
        else{
            userExists.image = image;
            await userExists.save();
            return res.status(200).json({message:"Image Updated Successfully"});
        }
    } catch (error) {
        console.error("Error uploading image:", error);
        return res.status(500).json({ error: "Image upload failed", message: error.message });
    }
}

export const getUser = async (req,res)=>{
    try {
        const {email} = req.body;
        // console.log(email)
        const userData = await User.findOne({email}) || "";
        // console.log(userData)
        return res.status(200).json({message:"User data retrived successfully", userData: userData});
    } catch (error) {
        return res.status(500).json({message:"User data not retrieved", error: error.message});
    }
}

export const getImage = async (req,res)=>{
    try {
        const {email} = req.body;
        const imageData = await ImageSchema.findOne({email}) || "";
        return res.status(200).json({message:"Image data retrieved successfully", imageData});
    } catch (error) {
        return res.status(500).json({message:"Image data not retrieved", error: error.message});
    }
}

export const allUsers = async (req,res)=>{
    const allUsersData = await User.find();
    if(allUsersData.length < 1){
        return res.status(500).json({message:"No users found"});
    }
    else{
        // console.log(allUsersData);
        return res.status(200).json({allUsersData});
    }
}


export const update = async (req, res) => {
    try {
        const id = await req.params.id;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({message:"User not exist"});
        const updateUser = await User.findByIdAndUpdate(id, req.body,{new: true});
        res.status(200).json({message:"User updated successfully"});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteuser = async (req, res) => {
    try {
        const id = await req.params.id;
        const user = await User.findById(id);
        if(!user) return res.status(404).json({message:"User not found"});
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted"});
    } catch (error) {
        res.status(500).json({error})
    }
}

export const getuser = async (req, res) => {
    try {
        const id = await req.params.id;
        const user = await User.findById(id);
        if(user.length === 0){
            return res.status(404).json({message:"User not Exist"});
        }
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({error: "Internal error to get user"});    
    }
}