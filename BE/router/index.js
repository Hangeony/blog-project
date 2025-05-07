import express from "express";
import boardApi from "./boards/index.js"; //user API 연결
const router = express.Router();

router.use("/api/v1", boardApi);

export default router;
