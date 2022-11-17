import { Router } from "express";
import multer from "multer";

import FotoController from "../controllers/FotoController";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig);

const router = new Router();

router.post("/", upload.single("photoFile"), FotoController.store);

export default router;
