require('dotenv').config();
const express = require('express');
const app = express();
const models = require('./models/index');
const cors = require('cors');
const {Client} = require('@notionhq/client');
const notion = new Client({auth:process.env.NOTION_TOKEN});


app.use(cors())

models.sequelize.sync().then(()=>{
    console.log('DB 연결 성공')
}).catch(err=>{
    console.log('DB 연결 에러')
    console.log(err)
})
const getInfo = async(e)=>{
    let article = new Object;
    article.title = await notion.pages.properties.retrieve({page_id:e,property_id:'title'});
    article.img = await notion.pages.properties.retrieve({page_id:e,property_id:'UDr%3F'});
    article.date = await notion.pages.properties.retrieve({page_id:e,property_id:'JiHn'});
    return article
}
app.get('/getArticle',async(req,res)=>{
    let idArr = await notion.databases.query({
        database_id:process.env.NOTION_DB_ID
    }).then((result)=>{
       return result.results.map(id => id.id)
    })
    const result = await Promise.all(idArr.map(id=>getInfo(id)))
    res.send(result)
    
})

app.listen(6000);