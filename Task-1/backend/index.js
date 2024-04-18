import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouters from "./routes/routers.js";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouters)
app.use(bodyParser.json({ limit: "10mb" }));

const port = 3000;
const MONGO_URL = "mongodb+srv://gunagantirajashekar:gunagantirajashekar@cluster0.pbidgdb.mongodb.net/grafana?retryWrites=true&w=majority&appName=Cluster0/"

app.listen(port, ()=>{
    console.log(`Connect to server: ${port}`);
    mongoose.connect(MONGO_URL).then(()=>{
        console.log("Connected to MongoDB ")
    })
})