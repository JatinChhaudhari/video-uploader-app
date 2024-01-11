import videoSchema from "../schema/videoSchema.js";

export const addVideo = async (req,res) => {

    const {title, description} = req.body;
    const videoPath = req.file.path;

    const video = new videoSchema({
        title,
        description,
        filename: req.file.filename,
        videoUrl: videoPath
    })

    try {
        await video.save();
        res.status(200).json({
            message: 'Video Uploaded Succesfully',
            video
        })
    } catch (error) {
        res.status(400).json({
            message: 'Video upload failed',
            error
        })
    }
}

export const getAllVideos = async(req, res) => {
    try {
        const videos = await videoSchema.find({})
        res.status(200).json({
            videos
        })
    } catch (error) {
        res.status(400).json({
            message: 'Videos fetch failed',
            error
        })
    }
}

export const deleteVideo = async (request, response) => {
    try{
         await videoSchema.deleteOne({_id: request.params.id});
         response.status(201).json({message: 'Video Deleted Succesfully'});
    }catch(error){
     response.status(409).json({message: error.message});
    }
 }