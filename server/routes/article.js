require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const articlePropertyId = {
  link: "%3Fm%7B%3C",
  date: "JiHn",
  image: "UDr%3F",
  source: "qSoM",
  contents: "yViY",
  title: "title",
};

const noticePropertyId = {
  date: "mCUM",
  image: "bUV%3C",
  contents: "TXKg",
  title: "title",
};

// get List
const getInfo = async (id, type) => {
  const propertyId = type == "article" ? articlePropertyId : noticePropertyId;
  let contents = new Object();
  contents.id = id;
  contents.title = await notion.pages.properties.retrieve({ page_id: id, property_id: propertyId.title });
  contents.image = await notion.pages.properties.retrieve({ page_id: id, property_id: propertyId.image });
  contents.date = await notion.pages.properties.retrieve({ page_id: id, property_id: propertyId.date });
  return contents;
};
router.get("/getList", async (req, res) => {
  const articleIdArr = await notion.databases
    .query({
      database_id: process.env.NOTION_ARTICLE_ID,
    })
    .then((result) => {
      return result.results.map((id) => id.id);
    });
  const noticeIdArr = await notion.databases
    .query({
      database_id: process.env.NOTION_NOTICE_ID,
    })
    .then((result) => {
      return result.results.map((id) => id.id);
    });
  const articleResult = await Promise.all(articleIdArr.map((id) => getInfo(id, "article")));
  const noticeResult = await Promise.all(noticeIdArr.map((id) => getInfo(id, "notice")));

  res.send({ articleResult: articleResult, articleIdArr: articleIdArr, noticeIdArr: noticeIdArr, noticeResult: noticeResult });
});

//get Detail - article
router.post("/getArticle", async (req, res) => {
  const detail = new Object();
  for (const i in articlePropertyId) {
    detail[i] = await notion.pages.properties.retrieve({ page_id: req.body.pageId, property_id: articlePropertyId[i] });
  }
  if (req.body.thisIndex != 0) {
    detail.bfId = req.body.idArr[req.body.thisIndex - 1];
    detail.bfTitle = await notion.pages.properties
      .retrieve({
        page_id: detail.bfId,
        property_id: articlePropertyId.title,
      })
      .then((res) => {
        return res.results[0].title.plain_text;
      });
  }
  if (req.body.thisIndex < req.body.idArr.length - 1) {
    detail.afId = req.body.idArr[req.body.thisIndex + 1];
    detail.afTitle = await notion.pages.properties
      .retrieve({
        page_id: detail.afId,
        property_id: articlePropertyId.title,
      })
      .then((res) => {
        return res.results[0].title.plain_text;
      });
  }
  res.send(detail);
});

//get Detail - notice
router.post("/getNotice", async (req, res) => {
  const detail = new Object();
  for (const i in noticePropertyId) {
    detail[i] = await notion.pages.properties.retrieve({ page_id: req.body.pageId, property_id: noticePropertyId[i] });
  }
  if (req.body.thisIndex != 0) {
    detail.bfId = req.body.idArr[req.body.thisIndex - 1];
    detail.bfTitle = await notion.pages.properties
      .retrieve({
        page_id: detail.bfId,
        property_id: noticePropertyId.title,
      })
      .then((res) => {
        return res.results[0].title.plain_text;
      });
  }
  if (req.body.thisIndex < req.body.idArr.length - 1) {
    detail.afId = req.body.idArr[req.body.thisIndex + 1];
    detail.afTitle = await notion.pages.properties
      .retrieve({
        page_id: detail.afId,
        property_id: noticePropertyId.title,
      })
      .then((res) => {
        return res.results[0].title.plain_text;
      });
  }
  res.send(detail);
});

module.exports = router;
