import express from "express";
import { sequelize } from "./config/mariaDB.js";
import "./models/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import routers from "./router/index.js";
import { swaggerUi, specs } from "./swagger/swagger.js";

const app = express();
const port = "9503";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json()); //요청 body 파싱
app.use("/", routers); //라우터 등록
app.use(errorHandler); //공통 에러 핸들러 (항상 맨 마지막!)

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
// 실행 되는지 확인
app.get("/ping", (req, res) => {
  res.send("pong!");
});
