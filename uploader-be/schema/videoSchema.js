import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    videoUrl: {
        type: String,
        trim: true,
        required: true,
    },
    filename: {
        type: String,
        trim: true,
    }
},{timestamps: true})

const video = mongoose.model('MyVideos', videoSchema);
export default video;
