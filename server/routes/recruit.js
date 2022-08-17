require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const propertyId = {
  endDate: "mCUM",
  contents: "TXKg",
  image: "bUV%3C",
  title: "title",
};
const getInfo = async (id) => {
  let recruit = new Object();
  recruit.id = id;
  recruit.title = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.title,
  });
  recruit.img = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.image,
  });
  recruit.date = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.endDate,
  });
  return recruit;
};

router.get("/getList", async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_RECRUIT_ID,
  });
  const idArr = response.results.map((id) => id.id);
  const result = await Promise.all(idArr.map((id) => getInfo(id)));
  res.send({ result, idArr });
});

module.exports = router;
