require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

router.get("/getList", async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_RECRUIT_ID,
  });
  res.send(response.results);
});

module.exports = router;
