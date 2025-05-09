import mariaDB from "../../../config/mariaDB.js";

export const createBoard = async ({ title, content }) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)`;
    let userId = parseInt("1");
    const values = [userId, title, content];

    mariaDB.query(query, values, (err, result) => {
      if (err) return reject(new Error("게시글 저장 실패"));
      resolve(result.insertId); // 새 게시글 ID 반환
    });
  });
};
