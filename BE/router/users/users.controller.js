import { registerUser } from "./service/registerUser.js";

console.log("🔥 전체 controller 불러옴!");

export const postRegister = async (req, res, next) => {
  console.log("📥 [요청 바디]", req.body); // 여기가 제일 중요함
  try {
    console.log("📥 [요청 바디]", req.body); // 여기가 제일 중요함

    const { email, nick_name, password } = req.body;
    const newUser = await registerUser({ email, nick_name, password });

    console.log("📥 email:", email);
    console.log("📥 nick_name:", nick_name);
    console.log("📥 password:", password);

    console.log("유저 생성 됨");

    res.status(201).json({ message: "회원가입 완료 !", user: newUser });
  } catch (err) {
    console.error("❌ postRegister 에러:", err);
    next(err);
  }
};
