import {Router} from 'express'
import { getSongs,getSong,postSong,putSong,deleteSong } from '../controller/song.controller.js';
import upload from '../middleware/uploadFile.js';
import verifyToken from '../middleware/verifyToken.js'

const router = Router();

router.get('/song',getSongs);
router.get('/song/:id',getSong);
router.post('/song',verifyToken,upload.single('partiture'),postSong);
router.put('/song/:id',verifyToken,upload.single('partiture'),putSong);
router.delete('/song/:id',verifyToken, deleteSong)

export default router;