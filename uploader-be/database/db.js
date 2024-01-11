import mongoose from "mongoose";

const Connection = async () => {
    const URL = 'mongodb+srv://jatinchaudhari006:WZH39AXp5YA1nsDO@video-uploader.ytdjsht.mongodb.net/video-uploader?retryWrites=true&w=majority'
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true})
        console.log(`Database Connected Succesfully`);
    }catch(error){
        console.log(`Error while Connecting the database`, error)
    };
}
export default Connection;