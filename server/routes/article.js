require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const propertyId = {
  link: "%3Fm%7B%3C",
  date: "JiHn",
  image: "UDr%3F",
  source: "qSoM",
  contents: "yViY",
  title: "title",
};
const getInfo = async (e) => {
  let article = new Object();
  article.id = e;
  article.title = await notion.pages.properties.retrieve({ page_id: e, property_id: propertyId.title });
  article.img = await notion.pages.properties.retrieve({ page_id: e, property_id: propertyId.image });
  article.date = await notion.pages.properties.retrieve({ page_id: e, property_id: propertyId.date });
  return article;
};

router.get("/getList", async (req, res) => {
  const idArr = await notion.databases
    .query({
      database_id: process.env.NOTION_DB_ID,
    })
    .then((result) => {
      return result.results.map((id) => id.id);
    });
  const result = await Promise.all(idArr.map((id) => getInfo(id)));
  res.send(result);
});

router.get("/getDetail", async (req, res) => {
  const detail = new Object();
  for (const i in propertyId) {
    detail[i] = await notion.pages.properties.retrieve({ page_id: req.query.pageId, property_id: propertyId[i] });
  }
  res.send(detail);
});

module.exports = router;
