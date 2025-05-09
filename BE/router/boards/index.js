import express from "express";
import * as boardsController from "./boards.controller.js";
const router = express.Router();

router.post("/posts", boardsController.create);

export default router;
