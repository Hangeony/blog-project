import { createBoard } from "./services/createBoards.js";

const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    let userId = parseInt("1");

    //유효성 검사
    if (!title || !content) {
      return res.status(400).json({ message: "제목과 내용은 필수 입니다." });
    }

    //서비스 핵심 로직
    const postId = await createBoard({ userId, title, content });
    return res
      .status(201)
      .json({ message: "성공적으로 작성되었습니다.", postId });
  } catch (err) {
    return res
      .status(500)
      .json({ message: err.message || "게시글 작성중 에러 발생" });
  }
};

export { create };
