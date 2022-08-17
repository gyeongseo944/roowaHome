require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const propertyId = {
  date: "mCUM",
  image: "bUV%3C",
  contents: "TXKg",
  title: "title",
};
const getInfo = async (e) => {
  let notice = new Object();
  notice.id = e;
  notice.title = await notion.pages.properties.retrieve({ page_id: e, property_id: propertyId.title });
  notice.img = await notion.pages.properties.retrieve({ page_id: e, property_id: propertyId.image });
  notice.date = await notion.pages.properties.retrieve({ page_id: e, property_id: propertyId.date });
  return notice;
};

router.get("/getList", async (req, res) => {
  const idArr = await notion.databases
    .query({
      database_id: process.env.NOTION_NOTICE_ID,
    })
    .then((result) => {
      return result.results.map((id) => id.id);
    });
  const result = await Promise.all(idArr.map((id) => getInfo(id)));
  res.send({ result: result, idArr: idArr });
});

router.post("/getDetail", async (req, res) => {
  const detail = new Object();
  for (const i in propertyId) {
    detail[i] = await notion.pages.properties.retrieve({ page_id: req.body.pageId, property_id: propertyId[i] });
  }
  if (req.body.thisIndex != 0) {
    detail.bfId = req.body.idArr[req.body.thisIndex - 1];
    detail.bfTitle = await notion.pages.properties
      .retrieve({
        page_id: detail.bfId,
        property_id: propertyId.title,
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
        property_id: propertyId.title,
      })
      .then((res) => {
        return res.results[0].title.plain_text;
      });
  }
  console.log(detail);
  res.send(detail);
});

module.exports = router;
