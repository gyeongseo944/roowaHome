require("dotenv").config();
const express = require("express");
const app = express();
const models = require("./models/index");
const bodyParser = require("body-parser");

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
app.use("/recruit", require("./routes/recruit"));

app.listen(6000);
