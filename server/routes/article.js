require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const getInfo = async (e) => {
  let article = new Object();
  article.id = e;
  article.title = await notion.pages.properties.retrieve({ page_id: e, property_id: "title" });
  article.img = await notion.pages.properties.retrieve({ page_id: e, property_id: "UDr%3F" });
  article.date = await notion.pages.properties.retrieve({ page_id: e, property_id: "JiHn" });
  return article;
};

router.get("/getList", async (req, res) => {
  let idArr = await notion.databases
    .query({
      database_id: process.env.NOTION_DB_ID,
    })
    .then((result) => {
      return result.results.map((id) => id.id);
    });
  const result = await Promise.all(idArr.map((id) => getInfo(id)));
  res.send(result);
});

module.exports = router;
