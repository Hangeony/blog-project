import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

console.log("DB config:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pwd: process.env.DB_PWD,
});

export const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER, // ✅ 수정됨
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  dialect: "mysql", // ✅ 반드시 필요!
  logging: true,
});
