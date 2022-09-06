require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

//getList
router.get("/getList", async (req, res) => {
  const articleResult = await notion.databases.query({
    database_id: process.env.NOTION_ARTICLE_ID,
  });
  const noticeResult = await notion.databases.query({
    database_id: process.env.NOTION_NOTICE_ID,
  });
  res.send({ article: articleResult.results, notice: noticeResult.results });
});

//get Detail -
// router.post("/getDetail", async (req, res) => {
//   const detail = await notion.pages.retrieve({ page_id: req.body.pageId });
//   res.send(detail);
// });

module.exports = router;
