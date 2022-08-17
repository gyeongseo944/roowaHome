require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_TOKEN });

const propertyId = {
  teamName: "%7C%5EH%5E",
  title: "title",
  contents: "TXKg",
  tag: "J%3Dzy",
  date: "mCUM",
  img: "bUV%3C",
};
const getInfo = async (id) => {
  let recruit = new Object();
  recruit.id = id;
  recruit.teamName = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.teamName,
  });
  recruit.title = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.title,
  });
  recruit.contents = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.contents,
  });
  recruit.tag = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.tag,
  });
  recruit.date = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.date,
  });
  recruit.img = await notion.pages.properties.retrieve({
    page_id: id,
    property_id: propertyId.img,
  });
  return recruit;
};

router.get("/getList", async (req, res) => {
  console.log("help");
  const response = await notion.databases.query({
    database_id: process.env.NOTION_RECRUIT_ID,
  });
  const idArr = response.results.map((id) => id.id);
  const result = await Promise.all(idArr.map((id) => getInfo(id)));
  res.send({ result, idArr });
});

module.exports = router;
