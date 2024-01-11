import multer from "multer";
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


//Destination dir
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        if(file.fieldname === 'video'){
            const rootDir = path.dirname(process.cwd());
            cb(null,path.join(rootDir,'/uploader-be/public/').concat('videos'));
        }
    },
    filename: (req, file, cb) => {
        const videoExt = file.mimetype.split('/')[1];
        const id = uuidv4();
        cb(null,"video_" + id + '.' + videoExt);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'video/mp4'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const videoUploade = multer({storage, fileFilter}); 
export default videoUploade;