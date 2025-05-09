import { User, Account } from "../../../models/index.js";
import argon2 from "argon2";

export const registerUser = async ({ email, nick_name, password }) => {
  console.log("registerUser 시작");

  const existingUser = await User.findOne({ where: { email } }); //동일 이메일있는지 확인
  console.log("✅ 중복 검사 완료");

  if (existingUser) {
    console.log("⚠️ 이미 존재하는 이메일");
    const error = new Error("이미 가입된 이메일입니다.");
    error.status = 409;
    throw error;
  }

  const newUser = await User.create({ email, nick_name });
  console.log("✅ User 생성 완료");

  if (!password) {
    throw new Error("비밀번호가 누락됐습니다!");
  }
  const hashedPw = await argon2.hash(password);
  console.log("🔐 비밀번호 해시 완료");

  await Account.create({
    user_id: newUser.id,
    password: hashedPw,
  });

  console.log("📦 Account 생성 완료");

  return {
    id: newUser.id,
    email: newUser.email,
    nick_name: newUser.nick_name,
  };
};
