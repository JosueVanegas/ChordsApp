import { Router } from "express";
import {
  getSongs,
  getSong,
  postSong,
  putSong,
  deleteSong,
} from "../controller/song.controller.js";
import upload from "../middleware/uploadFile.js";
import { verifyTokenAndAdmin, verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/song", getSongs);
router.get("/song/:id", getSong);
router.post("/song", verifyTokenAndAdmin, upload.single("docUrl"), postSong);
router.put("/song/:id", verifyTokenAndAdmin, upload.single("docUrl"), putSong);
router.delete("/song/:id", verifyTokenAndAdmin, deleteSong);

export default router;
