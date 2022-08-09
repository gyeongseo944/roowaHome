const express = require('express');
const app = express();
const models = require('./models/index');

models.sequelize.sync().then(()=>{
    console.log('DB 연결 성공')
}).catch(err=>{
    console.log('DB 연결 에러')
    console.log(err)
})

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(3000);