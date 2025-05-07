import dotenv from "dotenv";
import mariaDB from "mysql2";
dotenv.config();

console.log("DB config:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pwd: process.env.DB_PWD,
});

const conn = mariaDB.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

export default conn;
