require("dotenv").config();
const express = require("express");
const app = express();
const models = require("./models/index");
const bodyParser = require("body-parser");
const path = require("path");

models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("DB 연결 에러");
    console.log(err);
  });

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(bodyParser.json());
app.use("/article", require("./routes/article"));
app.use("/recruit", require("./routes/recruit"));
app.use(require("./routes/sendMail")(app));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(8001, () => {
  console.log("-------------------------------------");
  console.log(`${new Date().toLocaleDateString()} server open`);
  console.log("-------------------------------------");
});

// https.createServer(secureOption, app).listen(8001, (req, res) => {
//   console.log("-------------------------------------");
//   console.log(`${new Date().toLocaleDateString()} server open`);
//   console.log("-------------------------------------");
// });
