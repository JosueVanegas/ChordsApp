import { Router } from "express";
import multer from "multer";
import verifyToken from "../middleware/verifyToken.js";
import {deleteUser, getOneUser, getUser, putUser} from '../controller/user.controller.js'

 const router = Router();

router.get('/user',verifyToken,getUser);
router.delete('/user/:id',verifyToken,deleteUser)
router.get('/user/:id',verifyToken,getOneUser);
router.put('/user/:id',multer().none(),verifyToken,putUser)
export default router