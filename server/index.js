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
const test = async(e)=>{
    let test1 = new Object;
    test1.title = await notion.pages.properties.retrieve({page_id:e,property_id:'title'});
    test1.img = await notion.pages.properties.retrieve({page_id:e,property_id:'UDr%3F'});
    test1.date = await notion.pages.properties.retrieve({page_id:e,property_id:'JiHn'});
    return test1
}
app.get('/test',async(req,res)=>{
    let idArr = await notion.databases.query({
        database_id:process.env.NOTION_DB_ID
    }).then((result)=>{
       return result.results.map(id => id.id)
    })
    const result = await Promise.all(idArr.map(id=>test(id)))
    res.send(result)
    
})

app.listen(6000);