import express from "express";
import * as boardsController from "./boards.controller.js";
const router = express.Router();
router.use(express.json()); //json 모듈활성화

router.post("/posts", boardsController.create);

export default router;
