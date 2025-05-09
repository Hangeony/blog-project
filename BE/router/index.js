import express from "express";
import userApi from "./users/index.js"; //user Api 연결

const router = express.Router();

router.use("/api/v1", userApi);
console.log("🔥 전체 router/index.js 불러옴!");

export default router;
