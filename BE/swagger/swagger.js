// swagger/swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API Docs",
      version: "1.0.0",
      description: "Node.js + Express + Sequelize API 문서입니다.",
    },
    servers: [
      {
        url: "http://localhost:9503",
        description: "개발 서버",
      },
    ],
  },
  apis: ["./router/**/*.js"], // ✅ 주석으로부터 문서 생성할 대상 파일
};

const specs = swaggerJSDoc(options);

export { swaggerUi, specs };
