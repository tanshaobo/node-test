/*
 * @Author: tanshaobo
 * @Date: 2022-01-18 11:01:28
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-18 13:48:12
 * @Description: express post请求
 * @FilePath: \nodeTest\14_express\post.js
 */

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 创建application/x-www-form-urlencoded编码解析

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('14_express'))

app.get('/index.html',(req, res) => {

  res.sendFile(`${__dirname}/index_post.html`)
})

app.post('/process_post', urlencodedParser, (req, res)=> {
  res.set({'Content-type': 'text/plain; charset=utf-8'})
  // 输出 JSON 格式
  const response = {
    name: req.body.name,
    code: req.body.code
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(9527, ()=> {
  const host = server.address().address
  const port = server.address().port
  console.log('应用实例，访问地址为http://127.0.0.1:9527',host,port)
})