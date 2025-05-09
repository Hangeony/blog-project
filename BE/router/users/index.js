import express from "express";
import * as usersController from "./users.controller.js";
import { userValidation, validator } from "../../middleware/validateUser.js";

const router = express.Router();

/**
 * @swagger
 * /api/v1/join:
 *   post:
 *     summary: 회원가입
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - nick_name
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               nick_name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:  # ✅ 들여쓰기 수정됨!
 *       201:
 *         description: 회원가입 성공
 *       400:
 *         description: 유효성 검사 실패
 *       409:
 *         description: 이미 가입된 이메일
 */
router.post("/join", userValidation, validator, usersController.postRegister);
console.log("✅ usersController:", usersController);

console.log("🔥 users router 파일 불러옴!");

const userApi = router;
export default userApi;
