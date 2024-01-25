import {Router} from 'express'
import { getSongs,getSong,postSong,putSong,deleteSong } from '../controller/song.controller.js';
import upload from '../middleware/uploadFile.js';

const router = Router();

router.get('/song',getSongs);
router.get('/song/:id',getSong);
router.post('/song',upload.single('partiture'),postSong);
router.put('/song/:id',upload.single('partiture'),putSong);
router.delete('/song/:id', deleteSong)

export default router;