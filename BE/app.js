import express from "express";
import { sequelize } from "./config/mariaDB.js";
import routers from "./router/index.js";

const app = express();
const port = "9503";

//Sequelize DB 동기화
sequelize
  .sync({ force: false }) //true면 테이블 초기화
  .then(() => {
    console.log("Sequlize : DB 동기화 완료");
    app.listen(port, () => {
      console.log(`${port}번으로 서버 실행중.`);
    });
  })
  .catch((err) => {
    console.log("Sequlize : DB 연결 실패!", err);
  });
app.use(express.json());
app.use("/", routers);
