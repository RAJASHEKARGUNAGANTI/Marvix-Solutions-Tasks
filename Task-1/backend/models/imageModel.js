import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

const ImageSchema = mongoose.model("ImageSchema", imageSchema);

export default ImageSchema;