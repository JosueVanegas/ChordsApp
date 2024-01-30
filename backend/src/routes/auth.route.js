import { Router } from "express";
import multer from "multer";
import { login, register } from "../controller/auth.controller.js";
const router = Router();

router.post("/register", multer().none(), register);
router.post("/login", multer().none(), login);

export default router;
