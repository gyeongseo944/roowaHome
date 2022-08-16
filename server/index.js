require("dotenv").config();
const express = require("express");
const app = express();
const models = require("./models/index");
const bodyParser = require("body-parser");
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("DB 연결 에러");
    console.log(err);
  });

app.use(bodyParser.json());

app.use("/article", require("./routes/article"));

app.listen(6000);
