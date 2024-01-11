import express from 'express';
import videoUploade from '../middlewares/videoupload.js'
import { addVideo, getAllVideos, deleteVideo } from '../controllers/videoController.js';

const router = express.Router();

router.post('/upload',videoUploade.single('video'), addVideo)
      .get('/videos',getAllVideos)
      .delete('/delVideo/:id',deleteVideo)
export default router;