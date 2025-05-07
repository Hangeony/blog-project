import express from "express";
import mariaDB from "./connt/mariaDB.js";
import routers from "./router/index.js";
const app = express();

mariaDB.connect((err) => {
  if (err) {
    console.log(`DB연결 실패: ${err}`);
    return;
  }
  console.log("DB 연결성공");
});

app.use(express.json());
app.use("/", routers);

const port = "9503";
app.listen(port, () => {
  console.log(`${port}로 실행시킴`);
});
