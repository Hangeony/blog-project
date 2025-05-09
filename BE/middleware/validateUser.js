import { body, validationResult } from "express-validator";

export const userValidation = [
  body("email").isEmail().withMessage("유요한 이메일을 입력하세요"),
  body("nick_name").notEmpty().withMessage("닉네임을 입력해주세요"),
  body("password")
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}$/)
    .withMessage(
      "비밀번호는 8자 이상이며, 대문자와 특수문자를 포함해야 합니다."
    ),
];

export const validator = (req, res, next) => {
  const errors = validationResult(req);
  console.log("🔍 검증 결과:", errors.array()); // 이거 꼭 추가
  if (errors.array().length > 0) {
    // 에러가 생겼을시
    const error = new Error("입력갑 오류");
    error.status = 400; //커스텀 status 추가
    error.details = errors.array(); //에러 상세 메시지
    throw error; // 던지면 아래로 전파됨
  }
  next();
};
